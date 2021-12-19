import {
	API_KEY,
	APP_ID,
	AUTH_DOMAIN,
	MEASUREMENT_ID,
	MESSAGING_SENDER_ID,
	PROJECT_ID,
	STORAGE_BUCKET
} from '@env';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import { createContext } from 'react';

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const FirestoreContext = createContext(db);
export const StorageContext = createContext(storage);
