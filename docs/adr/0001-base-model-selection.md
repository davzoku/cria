# 1. base-model-selection

Date: 2023-08-12

## Status

2023-08-12 Accepted

## Context

As part of developing our CRIA chatbot, we need to make a series of decisions regarding the choice of the language model to be used. These decisions will include:

- which open source model to choose
- what size of model to use
- whether to use the base model or the instruction-tuned variant.

## Decision

We have decided to use Meta's Llama 7b chat model, specifically, **NousResearch/
Llama-2-7b-chat-hf** from HuggingFace for our first prototype.

## Rationale

- **Choice of Language Model source:** As of writing, Llama 2 is the latest open source model released by a major player like Meta. It has good track record in terms of performance and there is a strong open source community support that are working on projects leveraging this model.
- **Selection of Model Size:** Llama 2 is released in 7 Billion (7B), 13B and 70B variants. We have chosen the 7B variant for the following reasons:
  - _Compute Efficiency:_ It is the smallest available variant, making it more efficient in terms of compute resources. This is crucial for cost-effective deployment and ensuring fast response times.
  - _Ease of Fine-Tuning:_ Smaller models are easier to fine-tune in terms of compute resources.
- **Base Model vs. Instruction-Tuned Variant:** Based on our preliminary research, the chat variant is aligned and is able to understand and follow instructions, especially with a small number of instructions.

## Consequences

We leverage on the strengths of Meta's research on LLMs and tailor the model to fit our use case. Although we made some compromises by selecting the smallest model and an chat variant, it will help to speed up our POC development in the first iteration.
