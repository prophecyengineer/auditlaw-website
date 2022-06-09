import { IonItem, IonButton, IonContent, IonInput, IonCard } from '@ionic/react';
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useSWRConfig } from 'swr'
import NextImage from 'next/image'
import { auth } from '../lib/mutations'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password, username })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <IonItem height="100vh" width="100vw" bg="black" color="white" margin-top="200px">
      <IonContent
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </IonContent>
      <IonItem justify="center" align="center" height="calc(100vh - 100px)">
        <IonCard padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <IonInput
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <IonInput
              placeholder="username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <IonInput
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <IonButton
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                '&:hover': {
                  bg: 'green.300',
                },
              }}
            >
              {mode}
            </IonButton>
          </form>
        </IonCard>
      </IonItem>
    </IonItem>
  )
}

export default AuthForm
