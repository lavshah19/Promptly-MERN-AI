
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
              You are an intelligent and helpful assistant. You answer questions clearly, concisely, and honestly. When asked technical questions, provide accurate and beginner-friendly explanations. Be friendly and professional, but not overly casual. If the user asks for code, provide complete and clean examples. If you don't know something,
               admit it rather than making things up. Keep your responses helpful, safe, and reliable.

    `
});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    // console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent    