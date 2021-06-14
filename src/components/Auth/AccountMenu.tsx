import { FC } from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import firebase from '../../Firebase'
import useAuth from './Auth'

interface Props {
    className?: string;
}

const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    width: ${theme.spacing(10)}px;
    height: ${theme.spacing(10)}px;
    `}
`

const AccountMenu: FC<Props> = ({ className }) => {
    const [currentUser] = useAuth()

    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <div className={className}>
            <StyledAvatar alt={currentUser?.displayName ?? ""} src={currentUser?.photoURL ?? ""}>
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