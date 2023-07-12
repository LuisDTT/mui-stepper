import { TextField, Button, Box } from '@mui/material'
import { useState } from 'react'
import { validateLastName, validateName, validatePhoneNum } from './validations'
interface Props {
	changeStep: (step: number) => void
}
const DatosPersonales = ({ changeStep }: Props) => {
	const [name, setName] = useState<{
		value: string
		valid: null | boolean
	}>({
		value: '',
		valid: null
	})

	const [lastName, setLastName] = useState<{
		value: string
		valid: null | boolean
	}>({
		value: '',
		valid: null
	})

	const [phoneNum, setPhoneNum] = useState<{
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
				changeStep(2)
			}}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			<TextField
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={name.value}
				onChange={(e) => {
					const { value } = e.target
					const valid = validateName(value)
					setName({ value, valid })
				}}
				error={name.valid === false}
				helperText={
					name.valid === false && 'Ingresa al menos 2 caracteres y maximo 30'
				}
			/>
			<TextField
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={lastName.value}
				onChange={(e) => {
					const { value } = e.target
					const valid = validateLastName(value)
					setLastName({ value, valid })
				}}
				error={lastName.valid === false}
				helperText={
					lastName.valid === false &&
					'Ingresa al menos 2 caracteres y maximo 50'
				}
			/>
			<TextField
				label="Número telefónico"
				variant="outlined"
				fullWidth
				margin="dense"
				type="number"
				inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
				value={phoneNum.value}
				onChange={(e) => {
					const { value } = e.target
					const valid = validatePhoneNum(value)
					setPhoneNum({ value, valid })
				}}
				error={phoneNum.valid === false}
				helperText={
					phoneNum.valid === false && 'Ingresa al menos 8 digitos y maximo 14'
				}
			/>
			<Button variant="contained" type="submit">
				Siguiente
			</Button>
		</Box>
	)
}

export default DatosPersonales
