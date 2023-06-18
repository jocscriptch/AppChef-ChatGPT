//queryApi.ts
import { AxiosError } from "axios";
import openai from "./chatgpt";

const MAX_ATTEMPTS = 10;  // maximum number of attempts before giving up
const INITIAL_DELAY = 500;  // initial delay in milliseconds

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const query = async (prompt: string, chatId: string, model: string, attempt = 0): Promise<string> => {
  try {
    const res = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.5,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["134"],
    });

    if (res.data.choices && res.data.choices[0] && res.data.choices[0].text) {
      return res.data.choices[0].text;
    } else {
      throw new Error("Unexpected API response");
    }
  } catch (err: any) {
    if (err && err.isAxiosError && err.response?.status === 429 && attempt < MAX_ATTEMPTS) {
      const delay = INITIAL_DELAY * 2 ** attempt;  // exponential backoff
      await sleep(delay);
      return query(prompt, chatId, model, attempt + 1);  // retry
    }

    return `ChatGPT was unable to find an answer for that! (Error: ${err.message})`;
  }
};

export default query;
