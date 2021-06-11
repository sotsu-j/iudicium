import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

import IconButton from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import AppsIcon from '@material-ui/icons/Apps'

import { useAuth } from '../Auth/'
import AppMenu from './AppMenu'

interface Props {
    className?: string;
}

const StyledPaper = styled(Paper)`
    ${({ theme }) => `
    flex-grow: 1;
    display: flex;
    justify-content: center;
    min-width: ${theme.spacing(36)}px;
    margin: ${theme.spacing(2)}px;
    border-radius: 1em;
    `}
`

const AppMenuButton: FC<Props> = ({ className }) => {
    const [currentUser] = useAuth()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    useEffect(() => setAnchorEl(null), [currentUser])

    return currentUser == null ? null : (
        <div className={className}>
            <IconButton size="small" onClick={handleClick}>
                <AppsIcon />
            </IconButton>
            <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} >
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <StyledPaper>
                        <AppMenu onClick={() => setAnchorEl(null)} />
                    </StyledPaper>
                </ClickAwayListener>
            </Popper>
        </div >
    )
}

export default AppMenuButton