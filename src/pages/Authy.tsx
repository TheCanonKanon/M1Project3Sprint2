import { loginScript } from "../auth/auth_signin_password";
import { registerScript } from "../auth/auth_signup_password";

export default async function Authy({request}) {
    const formData = await request.formData();
    const email = formData.get("eMail");
    const password = formData.get("password");
    const AuthType = formData.get("AuthType");

    
    if (AuthType === "Register") {
        registerScript(email,password)
    } else if (AuthType === "Login") {
        loginScript(email,password)
    }
    return "bla"
}