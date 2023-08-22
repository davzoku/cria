FROM python:3-slim-bullseye

RUN apt-get update && apt-get install -y \
	build-essential \
	libopenblas-dev \
	ninja-build

RUN python -m pip install --no-cache-dir --upgrade \
	cmake \
	fastapi \
	sse-starlette \
	uvicorn

RUN CMAKE_ARGS="-DLLAMA_CLBLAST=on" \
	FORCE_CMAKE=1 \
	LLAMA_CLBLAST=1 \
	pip install --no-cache-dir llama_cpp_python --verbose

WORKDIR /app

COPY /models/cria-llama2-7b-v1.3.ggmlv3.q4_0.bin ../models/cria-llama2-7b-v1.3.ggmlv3.q4_0.bin

COPY /scripts/fastapi_server.py /app/

EXPOSE 80

CMD ["uvicorn", "fastapi_server:app", "--host", "0.0.0.0", "--port", "80"]
