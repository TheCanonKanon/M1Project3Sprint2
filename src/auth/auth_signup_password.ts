import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export function registerScript(email:string,password:string) {
const auth = getAuth();
const test = createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}