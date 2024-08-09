import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export function loginScript(email:string,password:string) {
const auth = getAuth();
const test = signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}