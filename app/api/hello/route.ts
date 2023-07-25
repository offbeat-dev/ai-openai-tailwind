import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const body = await req.json();

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "tailwind " +
          body.text +
          ". Only respond with code as plain text without code block syntax around it.",
      },
    ],
    temperature: 0.7,
    stream: false,
  });

  const data = (
    (await completion.json()) as ResponseTypes["createChatCompletion"]
  ).choices[0];

  return new Response(JSON.stringify({ result: data.message?.content }), {
    status: 200,
  });
}
