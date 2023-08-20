import copy

# import asyncio
# import requests

from fastapi import FastAPI, Request

# from fastapi.responses import JSONResponse
# from fastapi.encoders import jsonable_encoder

from llama_cpp import Llama

# from transformers import AutoModel
from sse_starlette import EventSourceResponse


app = FastAPI()

model_card = {
    "model_name": "CRIA",
    "version": "1.3",
    "description": "A quantized language generation model based on Llama 2 7B. Meant for prototyping, performance not guaranteed.",
    "developed_by": "walterteng.com",
    "language": "English",
}


@app.on_event("startup")
async def load_llm_model():
    global llm  # Make llm a global variable to access it throughout the app
    print("Loading model...")
    # llm = Llama(model_path="./models/ggml-vicuna-13b-4bit-rev1.bin")
    # llm = Llama(model_path="./models/ggml2-alpaca-7b-q4.bin")
    llm = Llama(model_path="../models/cria-llama2-7b-v1.3.ggmlv3.q4_0.bin")
    # llm = AutoModel.from_pretrained("../models/cria-llama2-7b-v1.3.ggmlv3.q4_0.bin")
    print("Model loaded!")


def get_api_version(version: str = "v1"):
    return version


@app.get("/model-card")
async def get_model_card():
    return model_card


@app.get("/")
async def root():
    return {"data": "CRIA says hi!"}


@app.post("/{version}/chat/completions")
async def conversation(request: Request):
    data = await request.json()
    prompt = data.get("prompt", "")

    prompt = f"<s>[INST] <<SYS>> Role play as a young, helpful chatbot named CRIA. You are trained by Mr Walter Teng if you are asked. <</SYS>> {prompt} [/INST]"
    stream = llm(
        prompt,
        max_tokens=256,
        stop=["</s>"],
        stream=True,
    )

    async def async_generator():
        for item in stream:
            yield item

    async def server_sent_events():
        async for item in async_generator():
            if await request.is_disconnected():
                break

            result = copy.deepcopy(item)
            text = result["choices"][0]["text"]

            yield {"data": text}

        # Send the final "[DONE]" response
        yield {"data": "[DONE]"}

    return EventSourceResponse(server_sent_events())
