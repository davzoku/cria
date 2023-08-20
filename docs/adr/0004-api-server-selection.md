# 4. api-server-selection

Date: 2023-08-15

## Status

2023-08-15 Accepted

## Context

In the development of CRIA, we need to make a decision regarding the choice of the API server. We have shortlisted three options: Bentoml's OpenLLM, a custom FastAPI server, and Hugging Face's Text Generation Inference.

## Decision

We have decided to proceed with the development of **a custom FastAPI server** as the initial choice for our API server. This decision is based on several considerations, including ease of implementation, customizability, and support for Server-Sent Events (SSE), a critical feature for CRIA. We will evaluate the option of using Hugging Face's Text Generation Inference in subsequent iterations.

## Rationale

- **Ease of Implementation and Customizability:**

  - _Custom FastAPI Server:_ A custom FastAPI server allows us to implement the exact API contract that we need for the frontend. It provides a high level of customizability and flexibility to tailor the server to our specific requirements, reducing unnecessary bloat and complexity.
  - _OpenLLM_: While Bentoml's OpenLLM is convenient for packaging and deployment, it may not provide the same level of flexibility and customization that a custom FastAPI server offers. Developing a custom server gives us full control over the implementation.

    - _No Support for SSE:_ OpenLLM do not support SSE, unlike FastAPI or Text Generation Inference. SSE enables real-time message updates to clients without the need to wait for the entire message to be ready before sending it to the client. This is essential for maintaining a fluid conversation experience.
    - _Support for LangChain and Adapters_: A number of popular open source LLMs are supported by OpenLLM and there is an elaborate guide on how to add custom models into their library. It also supports PEFT Adapters out of the box; this allows more flexibility in deploying the models (no need to merge model before hand). LangChain is also supported. These features might be very attractive in future iterations of the project.

  - _Text Generation Inference:_ At first glance,Text Generation Inference library simplifies the API server process and offers a Dockerized solution. However, due to time constraints, we have chosen to focus on the development of a custom FastAPI server initially. We plan to evaluate the Text Generation Inference option in subsequent iterations of the project.

## Alternatives Considered

- **Bentoml's OpenLLM:** We considered using Bentoml's OpenLLM due to its convenience in packaging and deployment. However, it lacks SSE support, a critical feature for our application.

- **Hugging Face's Text Generation Inference:** This option simplifies the API server process but was not fully explored due to time constraints.

## Consequences

By opting for a custom FastAPI server, we ensure that our API server is tailored to our specific requirements, offers support for SSE, and provides the customizability needed for our ChatGPT application. While it requires more development effort initially, it aligns with our project's goals and can be evaluated further in future iterations.
