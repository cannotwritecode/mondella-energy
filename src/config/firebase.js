import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY
const firebaseAuthDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const firebaseProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const firebaseStorageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
const firebaseMessagingSender = import.meta.env
  .VITE_FIREBASE_MESSAGING_SENDER_ID
const firebaseAppId = import.meta.env.VITE_FIREBASE_APP_ID
const firebaseMeasurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSender,
  appId: firebaseAppId,
  measurementId: firebaseMeasurementId,
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
export default app
