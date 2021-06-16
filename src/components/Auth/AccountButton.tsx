import { FC, useState, useEffect } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { StyledPaper } from './style'

import { useAuth } from './useAuth'
import SignIn from './SignIn'
import AccountMenu from './AccountMenu'
import AvatarIcon from '../AvatarIcon'
import { StandardProps } from '..'

const AccountButton: FC<StandardProps> = ({ className }) => {
    const [currentUser] = useAuth()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    useEffect(() => setAnchorEl(null), [currentUser])

    return (
        <div className={className}>
            {currentUser == null
                ? <SignIn>ログイン</SignIn>
                : (
                    <IconButton size="small" onClick={handleClick}>
                        <AvatarIcon displayName={currentUser.displayName} photoURL={currentUser.photoURL} />
                    </IconButton>
                )
            }
            <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <StyledPaper>
                        <AccountMenu />
                    </StyledPaper>
                </ClickAwayListener>
            </Popper>
        </div >
    )
}

export default AccountButton