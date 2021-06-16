import { FC, useState, useEffect } from 'react'

import { StyledAvatar } from './style'

import firebase from '../Firebase'

export interface AvatarIconProps {
    size?: number;
    uid?: string;
    displayName?: string | null;
    photoURL?: string | null;
}

const AvatarIcon: FC<AvatarIconProps> = ({ size = 4, uid = null, displayName = "", photoURL = undefined }) => {
    const [state, setState] = useState({
        displayName: displayName ?? "",
        photoURL: photoURL ?? undefined,
    })
    const database = firebase.database()

    useEffect(() => {
        if (uid) {
            database.ref(`users/${uid}`).on('value', (snapshot) => {
                const data: User = snapshot.val()
                data && setState({ displayName: data.name, photoURL: data.photoURL})
            })
        }
    }, [uid, displayName, photoURL])

    return (
        <StyledAvatar alt={state.displayName} src={state.photoURL} size={size}>
            {state.displayName.slice(0, 1)}
        </StyledAvatar>
    )
}

export default AvatarIcon