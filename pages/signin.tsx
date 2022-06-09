import React, { useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import AuthForm from '../components/authForm';
import { useRouter } from 'next/router';

const Signin = () => {
  return (
      <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>audit.law lander</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>Make your account here!</IonTitle>
        <IonCard>
          <IonCardHeader>
            {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            <IonCardTitle>Sign Up</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="h-40">
            <AuthForm mode={'signup'} />
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            <IonCardTitle>Sign In</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="h-40">
            <AuthForm mode={'signin'} />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Signin;
