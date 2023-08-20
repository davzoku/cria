# 3. training-compute-considerations

Date: 2023-08-12

## Status

2023-08-12 Accepted

## Context

In the development of CRIA, we need to make a decision regarding the training environment for our language model. Specifically, we must choose between training the model locally or renting GPU resources for training. It is important to note that our auxiliary objective for this project is to showcase how users can easily fine-tune large language models with free resources.

## Decision

We have decided to use the **free Colab (Google Colaboratory) instance** as the training environment for our language model. This decision aligns with our objective of making the training process accessible to all users, regardless of their compute resources. While Colab instances have limitations, including restrictions on training dataset size, this approach serves the purpose of creating a prototype and showcasing fine-tuning with free resources.

## Rationale

- **Accessible Training Environment:**

  - _Local Training:_ Training the model locally may introduce barriers for users running on different local machine set ups. This may potentially cause unnecessary issues during the training process.
  - _Colab Instance:_ Utilizing a free Colab instance ensures that the training process is accessible to all users, regardless of their individual compute resources. This meets our auxiliary objective of showcasing fine-tuning with free resources.

- **Cost Considerations:**

  - _Rented GPU Resources:_ Renting GPU resources for training would incur costs, which would go against our objective of using free resources for the project. (At least for POC)
  - _Colab Instance:_ The use of Colab instances is cost-free, making it a suitable choice for a prototype project with budget constraints.

- **Limitations Acknowledged:**
  - _Dataset Size Limitation:_ While Colab instances have limitations, such as restrictions on the size of the training dataset, these limitations are acceptable for the current prototype phase. We can revisit the issue of compute resources and dataset size in future iterations as the project evolves; eg. using Colab Pro or other alternatives.

## Alternatives Considered

- **Local Training:** We considered training the model on local machines. However, this option would create barriers for users without access to powerful compute resources and could result in environment-related issues.

- **Rented GPU Resources:** Another option was to rent GPU resources for training, but this approach would incur costs, which contradicts our objective of showcasing free resource utilization.

## Consequences

By choosing to use free Colab instances as the training environment, we ensure that the training process is accessible to all users without incurring costs. While there are limitations such as limited dataset size for training, these are considered acceptable for the prototype phase of the project.
