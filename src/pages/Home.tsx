import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import GoogleLoginButton from './GoogleLoginButton';

const Home: React.FC = () => {
  //2.1

  //2.2 Function defination
 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Google Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <GoogleLoginButton></GoogleLoginButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
