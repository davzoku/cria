export const faqData = [
  {
    shortHeader: 'what-is-cria',
    question:
      'What is CRIA and what sets it aside from other Large Language Models (LLM)?',
    answer:
      'Standing on the shoulders of giants, CRIA is a Large Language Model (LLM) that is instruction tuned on <a href="https://ai.meta.com/llama/"">Meta Llama 2</a> (7B, Chat) Model—a top-tier open-source LLM as of writing. The base model powers CRIA to offer engaging interactions and impressive contextual understanding.<br><br> CRIA is further fine-tuned on a <i>free colab instance</i> using the <a href="https://huggingface.co/datasets/mlabonne/CodeLlama-2-20k"">CodeLlama-2-20k</a> instruction dataset, enhancing its coding capabilities. Additionally, the inference model is quantized, optimizing it for swift deployment and rapid inference. This means you get efficiency without compromising on quality.<br><br> In essence, CRIA is a proof-of-concept, showcasing the potential of instruction tuning even with <i>free, limited resources</i>. Beyond that, it remains well-versed in a broad spectrum of topics, making it an interesting conversation partner. Try CRIA now!',
  },
  {
    shortHeader: 'what-cria-means',
    question: 'What does CRIA stands for?',
    answer:
      'A cria, pronounced as krē-ə, embodies the spirit of a baby llama. It is a homage to its base model, Meta Llama 2.',
  },
  {
    shortHeader: 'why-is-cria-sleeping',
    question: 'Why does CRIA frequently mention taking naps??',
    answer:
      "Hosting a LLM on cloud servers comes with a considerable cost, especially for a project pursued out of interest. Consequently, the inference process is often turned off to manage the costs.<br><br> If you're interest to see a live demonstration, don't hesitate to <a href=\"mailto:walter.tengkw@gmail.com\"\">get in touch with me</a>. Moreover, if you have any methods for near-zero cost hosting or even cost-effective alternatives, please don't hesitate to reach out. Your input and ideas are invaluable to me, and I'm keen to engage in discussions with fellow enthusiasts like you.",
  },
  {
    shortHeader: 'cria-use-cases',
    question:
      "What are the intended use cases for CRIA? Can I rely on the accuracy of CRIA's responses?",
    answer:
      "The goal of CRIA v1.3 is to showcase the potential of fine tuning your own LLM with freely available resources. The initial focus is on establishing a Minimum Viable Product (MVP), with performance considered a secondary concern for this release.<br><br>Hence, it is crucial to recognize that this process is highly experimental. Please exercise caution and avoid interpreting CRIA's responses as authoritative advice.<br><br>While CRIA is versatile and constantly improving, here are a few examples of how users might interact with CRIA:<br><br><b>Casual Conversations:</b> Engage in friendly and informative conversations on a wide range of topics.<br><br><b>Fun and Entertainment:</b> Have some fun with CRIA's cheerful persona by asking it jokes, riddles, or creative questions.<br><br><b>Coding Assistance:</b>: Seek simple coding help, and work on small coding tasks.",
  },
  {
    shortHeader: 'how-is-cria-developed',
    question:
      'How was CRIA created, and where can I find more technical details about its development?',
    answer:
      'The creation of CRIA is a fascinating journey, and you can find comprehensive technical details about its development in our GitHub documentation. Please visit <a href="https://github.com/davzoku/cria"">our GitHub repository</a> for in-depth insights into CRIA\'s architecture, codebase and design decisions that went into building this chatbot.',
  },
  {
    shortHeader: 'future-of-cria',
    question: 'Are there any plans to develop CRIA further in the future?',
    answer:
      "Absolutely! The journey with CRIA is an ongoing endeavor. While there's no set timeline for future feature releases, We're committed in improving this project.<br><br>The goal of CRIA is to deploy an functional MVP that is a conversational chatbot with a cheerful persona. We noted that the current instruction dataset does not match this purpose. Thus, our roadmap includes a comprehensive assessment of the current instruction tuning process, as well as the introduction of a custom dataset to fine-tune the base model to our specific use case. A thorough model evaluation is also part of the roadmap to enhance the understanding and capabilities of CRIA.",
  },
  {
    shortHeader: 'feedback',
    question: 'How can I contribute to the development of CRIA?',
    answer:
      'There are several ways you can contribute to the development and support of CRIA:<br><br><b>Provide Feedback:</b> Your feedback is incredibly valuable in helping us improve CRIA. If you have suggestions, ideas, or encounter any issues, please don\'t hesitate to <a href="mailto:walter.tengkw@gmail.com"">email us</a> or open an issue on <a href="https://github.com/davzoku/cria"">our GitHub repository</a>.<br><br><b>Contribute Code:</b>If you\'re a developer, you can actively contribute to CRIA\'s development by submitting pull requests on our GitHub repository. We welcome contributions in the form of bug fixes, new features, and improvements to existing functionality.<br><br><b>Support Hosting Costs:</b> Running a chatbot like CRIA involves cloud hosting expenses. You can help support the project\'s sustainability by contributing to <a href="https://ko-fi.com/davzoku"">our Ko-fi fund</a>. Your support will directly contribute to covering the backend hosting costs and ensuring the availability of CRIA for users.',
  },
];
