import { FC } from 'react'

export interface Props {
    className?: string;
	onClick?: () => void;
}

export function AppMenu(props: Props): FC;
export function AppMenuButton(props: Props): FC;