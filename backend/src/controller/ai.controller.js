const generateContent = require("../services/ai.service");

const generateContentController = async (req, res) => {
    try {
        const prompt = req.body.prompt;
        if (!prompt) {
            return res.status(400).send("Bad request");
        }
        const result = await generateContent(prompt);
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};

module.exports = { generateContentController };
