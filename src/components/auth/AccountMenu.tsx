import { FC } from 'react'

import Button from '@material-ui/core/Button'

import firebase from '../../Firebase'

interface Props {
    className?: string;
}

const AccountMenu: FC<Props> = ({ className }) => {
    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <div className={className}>
            <Button onClick={logout}>ログアウト</Button>
        </div>
    )
}

export default AccountMenu