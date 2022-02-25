//wnload the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
import twilio from "twilio"



export default async function handler (req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "method not supported" })
    }

    const accountSid = process.env.TWILIO_ACCT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    // TODO: Get the player's phone number from scorebot
    // { "playerId": "12345" }
    // const { playerId } = req.body

    // TODO: Send message to the player
    const message = await client.messages.create({
      body: 'winner winner chicken dinner!!',
      from: '+12163696199',
      mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
      to: '+16475378775'
    })
    
    return res.json({ message: "Success!" })
  } catch (error) {
    console.error(error)
    // TODO: return api handler error response
  }
}
