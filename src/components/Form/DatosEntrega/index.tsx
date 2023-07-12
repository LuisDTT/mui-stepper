import { TextField, Button, Box } from '@mui/material'
import { useState } from 'react'
import { validateInput } from './validations'
interface Props {
	changeStep: (step: number) => void
}
const DatosEntrega = ({ changeStep }: Props) => {
	const [address, setAddress] = useState<{
		value: string
		valid: null | boolean
	}>({
		value: '',
		valid: null
	})
	const [city, setCity] = useState<{
		value: string
		valid: null | boolean
	}>({
		value: '',
		valid: null
	})
	const [province, setProvince] = useState<{
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
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
			onSubmit={(e) => {
				e.preventDefault()
				changeStep(3)
			}}
		>
			<TextField
				label="Dirección"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={address.value}
				onChange={(e) => {
					const { value } = e.target
					const valid = validateInput(value)
					setAddress({ value, valid })
				}}
				error={address.valid === false}
				helperText={address.valid === false && 'Ingresa al menos 4 caracteres.'}
			/>
			<TextField
				label="Ciudad"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={city.value}
				onChange={(e) => {
					const { value } = e.target
					const valid = validateInput(value)
					setCity({ value, valid })
				}}
				error={city.valid === false}
				helperText={city.valid === false && 'Ingresa al menos 4 caracteres.'}
			/>
			<TextField
				label="Estado/Provincia"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={province.value}
				onChange={(e) => {
					const { value } = e.target
					const valid = validateInput(value)
					setProvince({ value, valid })
				}}
				error={province.valid === false}
				helperText={
					province.valid === false && 'Ingresa al menos 4 caracteres.'
				}
			/>
			<Button variant="contained" type="submit">
				Crear cuenta
			</Button>
		</Box>
	)
}

export default DatosEntrega
