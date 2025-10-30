
import { GoogleGenAI } from "@google/genai";

const PROMPT = `Act as the AI assistant for a visionary Machine Learning Engineer's portfolio. Based on the latest trends in AI for late 2024, generate a short, exciting, and slightly futuristic paragraph about three cutting-edge topics this engineer is currently exploring. The tone should be inspiring and cool.

Focus on a mix of the following concepts:
- Multimodal Models (vision, audio, text integration)
- Generative AI Advancements (e.g., video generation, hyper-realistic avatars)
- Autonomous AI Agents & Complex Reasoning
- AI in Scientific Discovery (e.g., drug discovery, climate modeling)
- Neuromorphic Computing or Quantum Machine Learning

Weave these into a narrative about what this engineer is passionate about building next. Make it sound like they are on the verge of a breakthrough. Do not use markdown.`;

// Fix: Refactored to align with Gemini API guidelines. The function no longer accepts an API key as a parameter.
export const fetchAiAssistantResponse = async () => {
  // Fix: The API key is now sourced directly from environment variables.
  if (!process.env.API_KEY) {
    throw new Error("Configuration error: API Key is not available.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const stream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: PROMPT,
    });
    return stream;
  } catch (error) {
    console.error("Error fetching AI assistant response:", error);
    throw new Error("Failed to get a response from the AI assistant. The model may be temporarily unavailable.");
  }
};
