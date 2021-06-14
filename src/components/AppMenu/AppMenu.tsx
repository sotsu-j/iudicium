import Link from 'next/link'
import { useRouter } from 'next/router'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import menuitems from './menuitems'

const AppMenu = ({ onClick = () => { } }) => {
	const { pathname } = useRouter()

	return (
		<List component="nav" onClick={onClick}>
			{menuitems.map(({ label, to, Icon }, index) => {
				return label == null
					? <Divider key={index} />
					: (
						<Link href={to} key={index}>
							<ListItem
								selected={to === pathname}
								button
								dense
							>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={label} />
							</ListItem>
						</Link>
					)
			})}
		</List>
	)
}

export default AppMenu