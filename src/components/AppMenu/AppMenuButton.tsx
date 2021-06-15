import { FC, useState, useEffect } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import AppsIcon from '@material-ui/icons/Apps'

import { StyledPaper } from './style'

import useAuth from '../Auth'
import AppMenu from './AppMenu'

import { StandardProps } from '..';

const AppMenuButton: FC<StandardProps> = ({ className }) => {
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