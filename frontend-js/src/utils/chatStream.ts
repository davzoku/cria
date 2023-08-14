import endent from 'endent';
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';

const createPrompt = (inputCode: string) => {
  const data = (inputCode: string) => {
    return endent`${inputCode}`;
  };

  if (inputCode) {
    return data(inputCode);
  }
};

export const OpenAIStream = async (
  inputCode: string,
  model: string,
  key: string | undefined,
) => {
  const prompt = createPrompt(inputCode);

  const system = { role: 'system', content: prompt };

  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key || process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify({
      model,
      messages: [system],
      temperature: 0,
      stream: true,
    }),
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  if (res.status !== 200) {
    const statusText = res.statusText;
    const result = await res.body?.getReader().read();
    throw new Error(
      `CRIA API returned an error: ${
        decoder.decode(result?.value) || statusText
      }`,
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const data = event.data;

          if (data === '[DONE]') {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta.content;
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };

      const parser = createParser(onParse);

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
};


// export const OpenLLMAPI = async (
//   inputCode: string,
//   model: string,
//   key: string | undefined,
// ) => {
//   const prompt = createPrompt(inputCode);

//   const system = { role: 'system', content: prompt };

//   const res = await fetch(`https://170f8506-7b6e-4ade-bac4-66f550d78b05.mock.pstmn.io/v1/generate`, {    
//     headers: {
//       'Content-Type': 'application/json',
//       // Authorization: `Bearer ${key || process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
//     },
//     method: 'POST',
//     body: JSON.stringify({
//       model,
//       messages: [system],
//       temperature: 0,
//       stream: true,
//     }),
//   });

//   const encoder = new TextEncoder();
//   const decoder = new TextDecoder();

//   if (res.status !== 200) {
//     const statusText = res.statusText;
//     const result = await res.body?.getReader().read();
//     throw new Error(
//       `CRIA API returned an error: ${
//         decoder.decode(result?.value) || statusText
//       }`,
//     );
//   }

//   const stream = new ReadableStream({
//     async start(controller) {
//       const onParse = (event: ParsedEvent | ReconnectInterval) => {
//         if (event.type === 'event') {
//           const data = event.data;

//           if (data === '[DONE]') {
//             controller.close();
//             return;
//           }

//           try {
//             const json = JSON.parse(data);
//             const text = json.choices[0].delta.content;
//             const queue = encoder.encode(text);
//             controller.enqueue(queue);
//           } catch (e) {
//             controller.error(e);
//           }
//         }
//       };

//       const parser = createParser(onParse);

//       for await (const chunk of res.body as any) {
//         parser.feed(decoder.decode(chunk));
//       }
//     },
//   });

//   return stream;
// };

export const OpenLLMAPI = async (
  prompt: string,
  model: string,
  key: string | undefined
) => {
  const requestBody = {
    prompt,
    llm_config: {
      use_llama2_prompt: false,
      max_new_tokens: 2,
      min_length: 0,
      early_stopping: false,
      num_beams: 1,
      num_beam_groups: 1,
      use_cache: true,
      temperature: 0.6,
      top_k: 12,
      top_p: 0.9,
      typical_p: 1,
      epsilon_cutoff: 0,
      eta_cutoff: 0,
      diversity_penalty: 0,
      repetition_penalty: 1,
      encoder_repetition_penalty: 1,
      length_penalty: 1,
      no_repeat_ngram_size: 0,
      renormalize_logits: false,
      remove_invalid_values: false,
      num_return_sequences: 1,
      output_attentions: false,
      output_hidden_states: false,
      output_scores: false,
      encoder_no_repeat_ngram_size: 0,
      n: 1,
      best_of: 1,
      presence_penalty: 0.5,
      frequency_penalty: 0,
      use_beam_search: false,
      ignore_eos: false,
    },
  };

  const response = await fetch(`https://170f8506-7b6e-4ade-bac4-66f550d78b05.mock.pstmn.io/v1/generate`, {      
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${key || process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: prompt }],
      temperature: 0,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`OpenAI API error: ${errorMessage}`);
  }

  const result = await response.json();

  const output = result.responses[0];

  return output;
};