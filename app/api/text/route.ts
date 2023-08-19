import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const body = await req.json();
  console.log("body received", body.system, body.user);
  const response = [];

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          body.system ||
          "You will be provided with a string of text, your task is to iterate and generate a new string of text keeping the context and a max lenght of two hundred characters",
      },
      {
        role: "user",
        content: body.user || "Upgrade to a new 2019 corolla with ease",
      },
    ],
    temperature: 0.7,
    stream: false,
  });

  const data = (
    (await completion.json()) as ResponseTypes["createChatCompletion"]
  ).choices[0];

  console.log(data.message?.content);

  return new Response(JSON.stringify({ result: data.message?.content }), {
    status: 200,
  });
}
