# Setup Instructions

This documents covers the setup instructions to get this project up and running.

## LLM Training / Fine-tuning

The fine-tuning process for the model is conducted exclusively within Colab notebooks. Please refer to the root README.md for the relevant notebooks corresponding to each version release and follow the instructions in the notebooks.

It's important to note that these Colab notebooks require access to free T4 GPU instances for proper execution. Ensure that you are connected to one before running the notebook.

## API Server

### FastAPI

We are currently using FastAPI to serve API. Ensure that you have Python and pip installed.

1. Download CRIA v1.3 GGML model from [HuggingFace](https://huggingface.co/davzoku/cria-llama2-7b-v1.3-GGML). Move the model to this directory, `models/cria-llama2-7b-v1.3.ggmlv3.q4_0.bin`.

#### To run it local without Docker

2. From the root folder, install the required packages using pip:

```
pip install -r requirements.txt
```

3. Start the FastAPI server:

```
cd scripts/
uvicorn scripts.fastapi_server:app --reload --port 8000
```

4.  Access the Swagger API documentation by navigating to `localhost:8000/docs`` in your web browser.

#### To run it with Docker

2. From the root folder, run the following code to build the Docker image.

```
docker build -t "cria-fastapi:0.01" -f fastapi.Dockerfile .
```

3. Run the docker image; map port 8000 on host machine to port 80 inside the docker container

```
docker run -it --rm -p 8000:80 "cria-fastapi:0.0.1"
```

4.  Access the Swagger API documentation by navigating to `localhost:8000/docs`` in your web browser.

## Frontend

We are currently using Next.js to power the frontend of CRIA. Make sure you have npm installed on your system.

1. Install required npm packages:

```
cd frontend-js/
npm install
```

2. Launch the local server in development mode:

```
npm run dev
```

3. Navigate to `localhost:3000` in your web browser to see the frontend.

## Documentation

### Architecture Decision Records (ADR)

The decisions for this site are recorded in [/docs/adr/](/docs/adr/). This documentation is managed using [phodal/adr](https://github.com/phodal/adr).

For more information on Architecture Decision Records (ADR), visit [ADR](https://adr.github.io/).

### ADR Commands

ADR Commands
Here are some useful ADR commands:

- To add a new ADR, use the following command:

```
adr new <decision-name>
```

- To list existing ADRs:

```
adr list
```

- Generate a table of contents for ADRs:

```
adr generate toc
```

- Export ADRs in various formats (CSV, HTML, JSON):

```
adr export <csv/html/json>
```
