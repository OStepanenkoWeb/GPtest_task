import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase.initializeApp({ projectId: 'gptesttask' }).firestore()
export const firestore = firebase.firestore
