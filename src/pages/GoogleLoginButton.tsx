import { IonButton } from "@ionic/react";
import { environment } from "../environment/environment";


const GoogleLoginButton: React.FC = () => {
    const connectWithGoogle = ()=>(window.location.href = `${environment.url}/api/connect/google`)

    return (
        <>
            <IonButton onClick={connectWithGoogle}>Login via Google</IonButton>
        </>
    );
};

export default GoogleLoginButton;
