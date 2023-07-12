export const validateName = (name: string) => {
	return name.length > 2 && name.length < 30 ? true : false
}

export const validateLastName = (lastName: string) => {
	return lastName.length > 1 && lastName.length < 50 ? true : false
}

export const validatePhoneNum = (phoneNum: string) => {
	return phoneNum.length > 4 && phoneNum.length < 14 ? true : false
}
