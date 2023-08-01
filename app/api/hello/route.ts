import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const body = await req.json();

  const prompts = [
    {
      section: "header",
      prompt:
        'we are going to generate a landing page for a single page website about the topic "pet store we take care of your pets". I\'ll provide examples and instructions for each one of the sections I want to generate. I need you to act as if you were a developer and adjust the content of the JSON structures I provide so I can use them to generate the landing page. components with id containing "short-text" can have a max of fifty characters. components with id containing "paragraph-text" should have a descriptive paragraph of minimum of two hundred characters and a maximum of four hundred characters introducing clients to the brand. components with id containing "logo" should have a maximum of two words representing the name of the brand. please return only JSON code. no explanations. let\'s start with the header. here is the example json structure: "components":[{"id":"short-text-1","type":"textnode","content":"FirstLink"},{"id":"short-text-2","type":"textnode","content":"SecondLink"},{"id":"short-text-3","type":"textnode","content":"ThirdLink"},{"id":"short-text-4","type":"textnode","content":"FourthLink"},{"id":"logo-5","type":"textnode","content":"Tailblocks"},{"id":"short-text-6","type":"textnode","content":"Button"}]',
    },
    {
      section: "hero",
      prompt:
        'adjust the text-node content in the following so I can use the following JSON structure to generate a top selling landing page for the topic \'pet store we take care of your pets\'. for images adjust the alt attribute and for the src attribute use an url with the format https://source.unsplash.com/random/700x700/?[topic]. components with id containing "short-text" can have a max of fifty characters. components with id containing "paragraph-text" should have a descriptive paragraph of minimum of two hundred characters and a maximum of four hundred characters introducing clients to the brand. please return only JSON code. no explanations. here is the example json structure:  components:[{id:"short-text-1",type:"textnode",content:"BuildyourSassinminutes",},{id:"paragraph-text-2",type:"textnode",content:"TheOne-ManSaaSFramework.",},{id:"short-text-3",type:"textnode",content:"TheOne-ManSaaSFramework.",},{id:"short-text-4",type:"textnode",content:"TheOne-ManSaaSFramework.",},{id:"image-1",type:"image",attributes:{alt:"BUILD→MARKET→MANAGEYOURSAAS-TheOne-ManSaaSFramework",src:"https://source.unsplash.com/random/700x700/?saas",}]',
    },
  ];

  // const response: string[] = [];

  // await prompts.forEach(async (prompt) => {
  //   const completion = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "user",
  //         content: prompt.prompt,
  //       },
  //     ],
  //     temperature: 0.7,
  //     stream: false,
  //   });
  //   const data = (
  //     (await completion.json()) as ResponseTypes["createChatCompletion"]
  //   ).choices[0];

  //   response.push(data.message?.content as string);
  // });

  // console.log(response);
  // return;
  const response = [];

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompts[0].prompt,
      },
    ],
    temperature: 0.7,
    stream: false,
  });

  const data = (
    (await completion.json()) as ResponseTypes["createChatCompletion"]
  ).choices[0];

  response.push(JSON.parse(data.message?.content as string));

  const completion2 = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompts[1].prompt,
      },
    ],
    temperature: 0.7,
    stream: false,
  });

  const data2 = (
    (await completion2.json()) as ResponseTypes["createChatCompletion"]
  ).choices[0];

  response.push(JSON.parse(data2.message?.content as string));

  return new Response(JSON.stringify({ result: response }), {
    status: 200,
  });
}
