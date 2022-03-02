// import { Box, h2 } from "theme-ui"
// import twilio from 'twilio'

import { Stack, HStack, VStack, Box, StackDivider, Link, Flex, Spacer, Button, StylesProvider } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    updateDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const colRef = collection(db, 'leaderboard')

// queries
const q = query(colRef, where("name", "==", "Zoe F"), orderBy('createdAt'))
// realtime collection data
// onSnapshot(q, (snapshot) => {
//     let leaderboard = []
//     snapshot.docs.forEach(doc => {
//         leaderboard.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(leaderboard)
//     })




const PlayerRow = ({id, rank, name})=>{
    const sendText = async () =>{

        console.log(id)

        // TODO: send POST request to your sms endpoint w/ player id
        const res = await fetch('/api/sms', {
            method:"POST",
            body: JSON.stringify({userId: id})
        })
        //change msgSent from false to true
        const db = getFirestore();
        const docRef = collection(db, 'leaderboard', sendText.userId)
        updateDoc( docRef,{
            title: 'updated title'
        })
        .then(()=>{
            updateForm.rest
        })
    }

    

    return (
        <div>
        <section className={styles.row}>
            <h2>{rank}</h2>
            <h2>{name}</h2>
            <Spacer />
            <Button size='sm' onClick={sendText} className={styles.text}>Send Text</Button>
        </section>
        </div>
    )
}

export default PlayerRow
