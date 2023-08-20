# 5. front-end-selection

Date: 2023-08-15

## Status

2023-08-15 Accepted

## Context

n the development of CRIA, we need to make a decision regarding the choice of the front-end tech stack. We have shortlisted two primary options: Python-based solutions such as Streamlit and Gradio, and JavaScript-based solutions such as Next.js with a component library like Chakra UI. We also mention Flutter as a potential option but acknowledge that its evaluation will be conducted in future iterations.

## Decision

We have decided to proceed with the development of **a front-end using Next.js, coupled with a component library like Chakra UI.** This decision is based on several considerations, including the long-term benefits of using a JavaScript-based solution, native support for web standards, and improved integration capabilities with existing web-based products if applicable.

## Rationale

- **Long-Term Benefits and Native Support:**

  - _JavaScript-Based Solution (Next.js):_ While there may be a learning curve for a Python team to adapt to JavaScript, using Next.js as the front-end technology offers long-term benefits. It natively supports web standards such as Progressive Web Apps (PWA), Search Engine Optimization (SEO), and Open Graph Protocol (OGP). This ensures that our application is well-equipped for future web advancements.

- **Easier Integration with Web-Based Products:**

  - _JavaScript-Based Solution (Next.js):_ Next.js is better suited for integration with existing web-based products, especially if they are also JavaScript-based. This facilitates interoperability and potential synergies with other products in our ecosystem.

- **Support for Web and Mobile Applications:**
  - _Flutter:_ While Flutter is mentioned as a potential option due to its superior support for both web and mobile applications, we acknowledge that its evaluation will be conducted in future iterations of the project. This allows us to assess its suitability and potential advantages more thoroughly.

## Alternatives Considered

- **Python-Based Solutions (Streamlit and Gradio):** These solutions are straightforward to implement and maintain by a Python team. However, they may lack certain long-term benefits and native support for web standards compared to JavaScript-based solutions.

- **Flutter:** Mentioned as a potential option due to its cross-platform capabilities but is deferred for evaluation in future iterations.

## Consequences

By selecting Next.js with a component library like Chakra UI as our front-end technology, we ensure that our ChatGPT application is built on a foundation that supports web standards and enhances integration possibilities with other web-based products if applicable. This decision positions our application for future growth and compatibility.
