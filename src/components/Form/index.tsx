import { Box, Typography } from '@mui/material'
import { LogoSpace, FormSpace, Img } from './styles'
import DatosUsuario from './DatosUsuario'
import DatosPersonales from './DatosPersonales'
import DatosEntrega from './DatosEntrega'
import Complete from './Complete'
import Stepper from '../Stepper'
import { useState } from 'react'

const Form = () => {
	const [step, setStep] = useState(0)

	const changeStep = (step: number) => {
		setStep(step)
	}

	const steps: {
		[key: number]: JSX.Element
	} = {
		0: <DatosUsuario changeStep={changeStep} />,
		1: <DatosPersonales changeStep={changeStep} />,
		2: <DatosEntrega changeStep={changeStep} />,
		3: <Complete />
	}

	return (
		<Box
			sx={{
				padding: '30px',
				display: 'flexbox',
				flexDirection: 'column'
			}}
		>
			<LogoSpace>
				<Img src={'/favicon.png'} />
				<Typography variant="h3">AluraFood</Typography>
			</LogoSpace>
			<FormSpace>
				{step < 3 && <Stepper step={step} />}
				{steps[step]}
			</FormSpace>
		</Box>
	)
}

export default Form
