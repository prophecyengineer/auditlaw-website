import { IonPage } from "@ionic/react";
import AuthForm from "../authForm";


const SignUp = () => {
    return (
        <IonPage>
            <AuthForm mode="signup"/>
            </IonPage>)
}

SignUp.authPage = true

export default SignUp