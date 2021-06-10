import { FC, useState, useContext } from 'react'
import styled from 'styled-components'

import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Popper from '@material-ui/core/Popper'

import { AuthContext } from './Auth'
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

const AccountButton: FC<Props> = ({ className }) => {
    const { currentUser } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

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
                <AccountMenu />
            </Popper>
        </div>
    )
}

export default AccountButton