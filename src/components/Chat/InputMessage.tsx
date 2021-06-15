import { FC, useState } from "react"

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import useChat from './useChat'

import { StyledInputMassage } from "./style"

const InputMessage: FC = () => {
	const [state, setState] = useState("")
	const [, dispatch] = useChat()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState(event.currentTarget.value)

	const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter') {
			submit()
		}
	}

	const handleClick = () => {
		submit()
	}

	const submit = () => {
		if (state) {
			dispatch({ type: 'sendMessage', payload: state })
			setState("")
		}
	}

	return (
		<StyledInputMassage>
			<TextField
				id="standard-name"
				label="MESSAGE"
				value={state}
				placeholder="メッセージを入力してください"
				onChange={handleChange}
				onKeyPress={handleEnterKeyPress}
				margin="dense"
				fullWidth
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<IconButton disabled={state.length === 0} onClick={handleClick}>
				<SendIcon />
			</IconButton>
		</StyledInputMassage>
	)
}

export default InputMessage