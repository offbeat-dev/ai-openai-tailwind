import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const body = await req.json();

  const response = await openai.createImage({
    prompt: "a marketing shot of a toyota corolla",
    n: 1,
    size: "1024x1024",
  });
  const data2 = ((await response.json()) as ResponseTypes["createImage"])
    .data[0];

  return new Response(JSON.stringify({ url: data2.url }), {
    status: 200,
  });
}
