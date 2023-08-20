# 2. instruct-dataset-selection

Date: 2023-08-12

## Status

2023-08-12 Accepted

## Context

In the development of CRIA, we need to make a decision regarding the dataset to be used for training and fine-tuning the language model. Specifically, we must choose between creating our own dataset and using an existing dataset from Hugging Face.

## Decision

We have decided to use an existing suitable open-source dataset from Hugging Face, specifically the **mlabonne/CodeLlama-2-20k** dataset. This dataset aligns with the instruct-style prompts used in our base model (NousResearch/
Llama-2-7b-chat-hf).

Although the CodeLlama-2 dataset does not perfectly match our downstream task, it is a high-quality dataset suitable for prototyping our application. We plan to create a custom dataset in future iterations to better align with our specific task.

## Rationale

- **Time, Manpower, and Cost Considerations:**

  - _Creating a Custom Dataset:_ To create our own instruction dataset, we would need to either engage a group of experts to help write instructions or use techniques like self-instruct or evol-instruct to prompt the language model to generate the dataset. Both approaches would incur additional time, manpower, and cost, which would extend the development timeline for the proof of concept (POC).

  - _Use of Existing Dataset:_ Utilizing an existing open-source dataset significantly reduces the time and resources required for dataset creation. This is crucial for speeding up the POC development phase.

- **Suitability of CodeLlama-2 Dataset:**
  - _Alignment with Instruct-Style Prompts:_ The CodeAlpaca dataset, although originally intended for coding instruction question and answer pairs, follows a similar instruct-style prompt structure. This alignment makes it a suitable choice for fine-tuning our language model and prototyping our application.
  - _High-Quality Data:_ The CodeLlama-2 dataset is based on the CodeAlpaca data. It is converted into Llama-2 instruction format. The original dataset has high quality and is used by the open source community to train their own models as well.
- **Future Iteration for Custom Dataset:**
  - _Custom Dataset Development:_ While we choose to use the CodeLlama-2 dataset for the initial POC, we recognize the importance of having a dataset that aligns more closely with our specific downstream task. Therefore, we plan to invest in creating our custom dataset in future iterations to enhance model performance.

## Alternatives Considered

- **Creating a Custom Dataset:** We considered the option of creating our own instruction dataset using human annotators or prompting techniques. However, this approach would introduce additional complexity, time, and cost to the POC development phase.

## Consequences

By using the CodeLlama-2 dataset from Hugging Face, we expedite the development of our ChatGPT application's POC by leveraging an existing high-quality dataset that aligns with instruct-style prompts. While it may not perfectly match our downstream task, it provides a solid foundation for initial testing and development. We will create a custom dataset in future iterations to ensure that our language model is fine-tuned to our specific use case.
