import Firebase from 'firebase';
import { FC, createContext, useEffect, useState } from 'react';

import firebase from '../../Firebase';

type AuthContextProps = {
  currentUser: Firebase.User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Firebase.User | null | undefined>(undefined)

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, [])

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
