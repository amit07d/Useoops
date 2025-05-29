import { GoogleGenAI } from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-flash-preview-05-20';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = '';

  for await (const chunk of response) {
    if (chunk.text) {
      console.log(chunk.text); 
      fullText += chunk.text;
    }
  }

  return fullText; 
}

export default main;
