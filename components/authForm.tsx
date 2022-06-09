import { IonItem, IonButton, IonContent, IonInput, IonCard, IonPage } from '@ionic/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useSWRConfig } from 'swr';
import NextImage from 'next/image';
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password, username });
    setIsLoading(false);
    // router.push('/');
  };

  return (
    <IonPage>
      <IonContent>
      </IonContent>
      <IonCard >
        <form onSubmit={handleSubmit}>
          <IonInput
            placeholder="email"
            type="email"
            onIonChange={e => setEmail(e.target.value)}

          />
          <IonInput
            placeholder="username"
            type="username"
            onIonChange={e => setUsername(e.target.value)}
          />
          <IonInput
            placeholder="password"
            type="password"
            onIonChange={e => setPassword(e.target.value)}
          />
          <IonButton
            type="submit"
            isLoading={isLoading}
            
          >
            {mode}
          </IonButton>
        </form>
      </IonCard>
    </IonPage>
  );
};

export default AuthForm;
