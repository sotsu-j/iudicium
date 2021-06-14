import { FC } from 'react'

import Button from '@material-ui/core/Button'

import firebase from '../../Firebase'

const SignIn: FC = ({ children }) => {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  return (
    <div>
      <Button color="inherit" onClick={login}>{children ?? "googleでログインする"}</Button>
    </div>
  )
}

export default SignIn
