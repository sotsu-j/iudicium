import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { useAuth } from './Auth'
import SignIn from './SignIn'
import AccountMenu from './AccountMenu'

interface Props {
    className?: string;
}

const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    width: ${theme.spacing(4)}px;
    height: ${theme.spacing(4)}px;
    `}
`

const StyledPaper = styled(Paper)`
    ${({ theme }) => `
    display: flex;
    justify-content: center;
    min-width: ${theme.spacing(36)}px;
    margin: ${theme.spacing(2)}px;
    padding: ${theme.spacing(2)}px;
    border-radius: 1em;
    `}
`

const AccountButton: FC<Props> = ({ className }) => {
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
                        <StyledAvatar alt={currentUser?.displayName ?? ""} src={currentUser?.photoURL ?? ""}>
                            {(currentUser?.displayName || "").slice(0, 1)}
                        </StyledAvatar>
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