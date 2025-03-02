// Logic Flow:

// Check karo prompt query parameter hai ya nahi

// Agar nahi ➡️ 400 error

// Agar hai ➡️ AI service ko call karo

// AI ka response client ko send karo

// GET /ai/get-response?prompt=Explain+recursion
// ➡️ AI se answer milega

const aiService = require('../services/ai.service')

module.exports.getReview = async (req, res) => {
    
    const code = req.body.code;    // Query string se prompt value read karta hai

    if(!code){
        return res.status(400).send('Prompt is required')
    }

    // aiService function ko call karke AI response generate kar raha hai.
    const response = await aiService(code)

    // Generated response ko client ko send karta hai.
    res.send(response)
}