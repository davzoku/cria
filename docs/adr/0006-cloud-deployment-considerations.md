# 6. cloud-deployment-considerations

Date: 2023-08-20

## Status

2023-08-20 Proposed (Draft)

## Context

In the development of CRIA, we need to make a decision regarding the cloud deployment platform. We have shortlisted two main options: Amazon SageMaker and RunPod. This decision will impact the reliability, cost, and scalability of hosting our application.

## Decision

//todo

## Rationale

- **Amazon SageMaker:** SageMaker is a reliable and well-established platform for machine learning and AI workloads. However, it is known to be relatively expensive.

- **RunPod:** RunPod offers Serverless GPU computing for AI Inference and Training, allowing users to pay by the second for their compute usage. This flexible platform is designed to scale dynamically, meeting the computational needs of AI workloads from the smallest to the largest scales.

## Consequences

The choice of cloud deployment platform will significantly impact our application's reliability, cost, scalability, and ease of use. Careful evaluation and testing of both options are necessary to make an informed decision that aligns with our budget and infrastructure requirements.
