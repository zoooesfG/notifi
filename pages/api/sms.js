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

    // return console.log(player)
    // TODO: Get the player's phone number from scorebot
    // { "playerId": "12345" }
    const { userId } = JSON.parse (req.body)
    // console.log(req.body)
    console.log(userId)
    const playerRequest = await fetch(`https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/players/${userId}`)
    const playerData = await playerRequest.json()
    console.log(playerData)
    // TODO: Send message to the player
    const message = await client.messages.create({
      body: 'winner winner chicken dinner!!',
      from: '+12163696199',
      mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
      to: playerData.data.phone
    })
    return res.json({ message: "Success!" })
  } catch (error) {
    console.error(error)
    // TODO: return api handler error response
  }
}
