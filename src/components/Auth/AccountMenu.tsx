import { FC } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import { StyledAvatar } from './style'

import firebase from '../../Firebase'
import { useAuth } from './useAuth'

interface Props {
    className?: string;
}

const AccountMenu: FC<Props> = ({ className }) => {
    const [currentUser] = useAuth()

    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <div className={className}>
            <StyledAvatar alt={currentUser?.displayName ?? ""} src={currentUser?.photoURL ?? ""} size={10}>
                {(currentUser?.displayName || "").slice(0, 1)}
            </StyledAvatar>
            <Typography variant="body1" >
                {currentUser?.displayName}
            </Typography>
            <Typography variant="caption" >
                {currentUser?.email}
            </Typography>
            <Divider />
            <Button variant="outlined" onClick={logout}>ログアウト</Button>
        </div>
    )
}

export default AccountMenu