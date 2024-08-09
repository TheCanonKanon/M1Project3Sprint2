import { getAuth, signOut } from "firebase/auth";
import { redirect } from "react-router-dom";



export function signOutScript() {
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {

    });
}