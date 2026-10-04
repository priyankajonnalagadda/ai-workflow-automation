const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY"
});

const getAIResponse = async (input) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: input }]
  });

  return response.choices[0].message.content;
};