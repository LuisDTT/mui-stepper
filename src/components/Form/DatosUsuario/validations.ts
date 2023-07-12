export const validateEmail = (email: string) => {
	if (email.length > 8 && email.length < 25 && email.includes('@')) {
		return true
	} else {
		return false
	}
}

export const validatePassword = (password: string) => {
	if (password.length >= 8 && password.length < 20) {
		return true
	} else {
		return false
	}
}
