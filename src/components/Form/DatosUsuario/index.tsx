import { TextField, Button, Box } from '@mui/material'
import { useState } from 'react'
import { validateEmail, validatePassword } from './validations'

interface Props {
	changeStep: (step: number) => void
}

const DatosUsuario = ({ changeStep }: Props) => {
	const [email, setEmail] = useState<{
		value: string
		valid: null | boolean
	}>({
		value: '',
		valid: null
	})

	const [password, setPassword] = useState<{
		value: string
		valid: null | boolean
	}>({
		value: '',
		valid: null
	})

	return (
		<Box
			component="form"
			autoComplete="off"
			onSubmit={(e) => {
				e.preventDefault()
				if (email.valid && password.valid) {
					changeStep(1)
				}
			}}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			<TextField
				label="Correo electrónico"
				variant="outlined"
				fullWidth
				margin="dense"
				type="email"
				error={email.valid === false}
				helperText={
					email.valid === false && 'Ingresa un correo electronico valido'
				}
				value={email.value}
				name="email"
				onChange={(e) => {
					const { value } = e.target
					setEmail({ value: value, valid: validateEmail(value) })
				}}
			/>
			<TextField
				label="Contraseña"
				variant="outlined"
				fullWidth
				margin="dense"
				type="password"
				name="password"
				error={password.valid === false}
				helperText={
					password.valid === false &&
					'Ingresa una contraseña valida, al menos 8 caracteres y maximo 20'
				}
				value={password.value}
				onChange={(e) => {
					const { value } = e.target
					validatePassword(value)
					setPassword({ value: value, valid: validatePassword(value) })
				}}
			/>
			<Button variant="contained" type="submit">
				Siguiente
			</Button>
		</Box>
	)
}

export default DatosUsuario
