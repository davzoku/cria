# 🍼🦙 CRIA

Welcome to CRIA, a LLM model series based on [Llama 2-7B](https://github.com/facebookresearch/llama).

## What is Cria?

> krē-ə plural crias. : a baby llama, alpaca, vicuña, or guanaco.

<p align="center">
  <img src="assets/icon-512x512.png" width="300" height="300" alt="Cria Logo"> <br>
  <i>or what ChatGPT suggests, <b>"Crafting a Rapid prototype of an Intelligent llm App using open source resources"</b>.</i>
</p>

## Features

- Demostration of instruction-tuning of LLM on **free colab instance**.
- Utilized FastAPI for efficient model serving and inference deployment.
- Integrated Next.js frontend for interactive user interface.

<p align="center">
  <img src="assets/cria-frontend-js.jpeg" alt="Frontend"> <br>
  <i>Leveraging on open source resources such as <a href="https://github.com/horizon-ui/chatgpt-ai-template">Horizon AI Template</a></i>
</p>

## Model History

| HuggingFace Model                                                                                                                                                   | Model Type    | Base Model                                                                                    | Dataset                                                                                                                | Colab                                                                                                                                                                                                                                                                                                           | Status       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [cria-llama2-7b-v1.3](https://huggingface.co/davzoku/cria-llama2-7b-v1.3), <br> [cria-llama2-7b-v1.3_peft](https://huggingface.co/davzoku/cria-llama2-7b-v1.3_peft) | Merged / PEFT | [NousResearch/Llama-2-7b-chat-hf](https://huggingface.co/NousResearch/Llama-2-7b-chat-hf)     | [mlabonne/CodeLlama-2-20k](https://huggingface.co/datasets/mlabonne/CodeLlama-2-20k)                                   | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1rYTs3qWJerrYwihf1j0f00cnzzcpAfYe) [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1Wjs2I1VHjs6zT_GE42iEXsLtYh6VqiJU) | Latest       |
| cria-llama2-7b-v1.1, cria-llama2-7b-v1.2                                                                                                                            | Merged / PEFT | [TinyPixel/Llama-2-7B-bf16-sharded](https://huggingface.co/TinyPixel/Llama-2-7B-bf16-sharded) | [n3rd0/DreamBook_Guanaco_Format](https://huggingface.co/datasets/n3rd0/DreamBook_Guanaco_Format)                       | N.A.                                                                                                                                                                                                                                                                                                            | Experimental |
| cria-llama2-7b-v1.0                                                                                                                                                 | PEFT          | [TinyPixel/Llama-2-7B-bf16-sharded](https://huggingface.co/TinyPixel/Llama-2-7B-bf16-sharded) | [Elliot4AI/dolly-15k-chinese-guanacoformat](https://huggingface.co/datasets/Elliot4AI/dolly-15k-chinese-guanacoformat) | N.A.                                                                                                                                                                                                                                                                                                            | Experimental |

## References

### Guides / Tutorials / Discussions

- [ML Blog - Fine-Tune Your Own Llama 2 Model in a Colab Notebook](https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html)
- [Fine-tune Llama 2 in Google Colab.ipynb - Colaboratory](https://colab.research.google.com/drive/1PEQyJO1-f6j0S_XJ8DV50NkpzasXkrzd?usp=sharing)
- [Making LLMs even more accessible with bitsandbytes, 4-bit quantization and QLoRA](https://huggingface.co/blog/4bit-transformers-bitsandbytes)
- [bnb-4bit-training.ipynb - Colaboratory](https://colab.research.google.com/drive/1VoYNfYDKcKRQRor98Zbf2-9VQTtGJ24k?usp=sharing)
- [🐐Llama 2 Fine-Tune with QLoRA [Free Colab 👇🏽] - YouTube](https://www.youtube.com/watch?v=eeM6V5aPjhk)
- [Fine-Tune Large LLMs with QLoRA (Free Colab Tutorial) - YouTube](https://www.youtube.com/watch?v=NRVaRXDoI3g)
- [LLaMA2 for Multilingual Fine Tuning? - YouTube](https://www.youtube.com/watch?v=ThKWQcyQXF8)
- [How to Tune Falcon-7B With QLoRA on a Single GPU - YouTube](https://www.youtube.com/watch?v=AXG7TA7vIQ8)
- [🦙Llama 2 Fine-Tuning with 4-Bit QLoRA on Dolly-15k [Free Colab 🙌] - YouTube](https://www.youtube.com/watch?v=o5bU1H-6TqM)
- [Fine-Tune Your Own Llama 2 Model in a Colab Notebook | Towards Data Science](https://towardsdatascience.com/fine-tune-your-own-llama-2-model-in-a-colab-notebook-df9823a04a32)

### Datasets

- [mlabonne/CodeLlama-2-20k](https://huggingface.co/datasets/mlabonne/CodeLlama-2-20k)
- [n3rd0/DreamBook_Guanaco_Format](https://huggingface.co/datasets/n3rd0/DreamBook_Guanaco_Format)
- [Elliot4AI/dolly-15k-chinese-guanacoformat](https://huggingface.co/datasets/Elliot4AI/dolly-15k-chinese-guanacoformat)

### Models

- [NousResearch/Llama-2-7b-chat-hf](https://huggingface.co/NousResearch/Llama-2-7b-chat-hf)
- [TinyPixel/Llama-2-7B-bf16-sharded](https://huggingface.co/TinyPixel/Llama-2-7B-bf16-sharded)
