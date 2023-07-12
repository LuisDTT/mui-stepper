import { Box, Stepper, Step, StepLabel } from '@mui/material'

interface Props {
	step: number
}

const StepperComponent = ({ step }: Props) => {
	const steps = ['Datos de usuario', 'Datos personales', 'Datos de entrega']

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={step}>
				{steps.map((step) => (
					<Step key={step}>
						<StepLabel>{step}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	)
}

export default StepperComponent
