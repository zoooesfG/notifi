
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, where } from "firebase/firestore";


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


export default async function handler (req, res){
    //pull Scorebot info
  //pull Scorebot info
    const scorebotData = await fetch('https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50');
    const data = await scorebotData.json()
    //pull firestore data
    const snapshot = await getDocs(collection(db, "leaderboard"))
    const firestoreData = snapshot.docs

    // const docSnap = await g
    const response = {
        items:[]
    }

    data.items.forEach(scorebotObj => {
        const item = firestoreData.find(firestoreObj => firestoreObj.id === scorebotObj.player.id)
        if(item){
            scorebotObj.textSent = true
        }
        else{
            scorebotObj.textSent = false
        }
        response.items.push(scorebotObj)
    })

    console.log(response)

    res.status(200).json(response)
}
