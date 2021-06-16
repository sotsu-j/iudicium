import { FC } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import firebase from '../../Firebase'
import { useAuth } from './useAuth'
import AvatarIcon from '../AvatarIcon'
import { StandardProps } from '..'

const AccountMenu: FC<StandardProps> = ({ className }) => {
    const [currentUser] = useAuth()

    const logout = () => {
        firebase.auth().signOut()
    }

    return currentUser ? (
        <div className={className}>
            <AvatarIcon displayName={currentUser.displayName} photoURL={currentUser.photoURL} size={10} />
            <Typography variant="body1" >
                {currentUser?.displayName}
            </Typography>
            <Typography variant="caption" >
                {currentUser?.email}
            </Typography>
            <Divider />
            <Button variant="outlined" onClick={logout}>ログアウト</Button>
        </div>
    ) : null
}

export default AccountMenu