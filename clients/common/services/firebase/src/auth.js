import { firebaseAuth } from './index'

export const signInWithEmailAndPassword = async ({ email, password }) => firebaseAuth().signInWithEmailAndPassword(email, password)

export const createUserWithEmailAndPassword = async ({ email, password }) => firebaseAuth().createUserWithEmailAndPassword(email, password)

export const signInWithFacebook = async () => {
  const provider = new firebaseAuth.FacebookAuthProvider()
  return firebaseAuth().signInWithPopup(provider)
}

export const signInWithGoogle = async () => {
  const provider = new firebaseAuth.GoogleAuthProvider()
  return firebaseAuth().signInWithPopup(provider)
}
