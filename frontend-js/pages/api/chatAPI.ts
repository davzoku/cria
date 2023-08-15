import { ChatBody } from '@/types/types';
import { OpenAIStream, OpenLLMAPI, FastAPI } from '@/utils/chatStream';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { inputCode, model, apiKey } = (await req.json()) as ChatBody;
    const apiType = process.env.API_TYPE;
    let apiKeyFinal;
    let stream;

    // if (apiKey) {
    //   apiKeyFinal = apiKey;
    // } else {
    //   apiKeyFinal = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    // }

    // if (!apiKey) {
    //   return new Response('API key not found', { status: 500 });
    // }

    if (apiType === "FASTAPI") {
      stream = await FastAPI(inputCode, model, apiKeyFinal);
    } else if (apiType === "FASTAPI") {
      stream = await OpenLLMAPI(inputCode, model, apiKeyFinal);
    } else if  (apiType === "FASTAPI") {  
      stream = await OpenAIStream(inputCode, model, apiKeyFinal);
    } else {
      // not implemented
      console.error("Unsupported API type:", apiType);
    }


    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;
