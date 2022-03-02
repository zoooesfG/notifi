//wnload the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
import twilio from "twilio"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    setDoc,
    orderBy, serverTimestamp,
    updateDoc } from "firebase/firestore";


    const firebaseConfig = {
      apiKey: "AIzaSyA5qsxUaqCK926zTNiTSFoFHy-BK7dEG3c",
      authDomain: "notifi-457d2.firebaseapp.com",
      projectId: "notifi-457d2",
      storageBucket: "notifi-457d2.appspot.com",
      messagingSenderId: "807342511177",
      appId: "1:807342511177:web:87b8eded14b751cbec1b98",
      measurementId: "G-7VRSQ4KPPR"
      };
      
      // Initialize Firebase
    initializeApp(firebaseConfig);
    const db = getFirestore();

export default async function handler (req, res) {
    if (req.method === "POST") {
      const { userId } = JSON.parse (req.body)
      const twilioResp = await sendTwilio(userId)
      // todo: check on the twilioResp and decide whether to continue onto firestore stuff 
      const firestoreResp = await updateFirestore(userId)
      // return a thing to the client
      res.status(200).json({status: "i did the thing!"})
    }
    else if (req.method ==="GET"){
      const resp = await getFirestoreDocs()
      // fetch firestore info (do that in a new function below)
    }
    else{
      return res.status(405).json({ error: "method not supported" })
    }
}

async function sendTwilio(userId){
  try {
    const accountSid = process.env.TWILIO_ACCT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    // return console.log(player)
    // TODO: Get the player's phone number from scorebot
    // { "playerId": "12345" }
    // console.log(req.body)
    // console.log(userId)
    const playerRequest = await fetch(`https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/players/${userId}`)
    const playerData = await playerRequest.json()
    // console.log(playerData)
    // TODO: Send message to the player
    const message = await client.messages.create({
      body: 'winner winner chicken dinner!!',
      from: '+12163696199',
      mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
      to: playerData.data.phone
    })
    return { message: "Success!" }
  } catch (error) {
    console.error(error)
      return {error: "it all went sideways!"}
    // return something here, error state!
  }
}

async function updateFirestore(userId){

    //FIREBASE UPDATEY STUFF
    const ref = setDoc(doc(db, "leaderboard", userId), {
      id: userId,
      notified: new Date()
    })

      console.log("hi there i'm doin a thing!")
      console.log(ref)

    return {status: "sent! probably!"}
}

async function getFirestoreDocs(){
  const snapshot = await getDocs(doc(db, "leaderboard"))
  console.log(snapshot.data())
}
