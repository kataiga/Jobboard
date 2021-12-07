export const nameValidation = (name: string) => {
    return name.length > 3
}

export const dateValidation = (date: string) => {
    return !isNaN(new Date(date) as never)
}

export const emailValidation = (email: string) => {
    const isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return isEmail.test(email) 
}

export const passwordValidation = (password: string) => {
    return password.length >= 8
}

export const passwordComparation = (password1: string, password2: string) => {
    return password1 === password2 && password1 !== ''
}

export const registerFirstValidation = (toValidate: Array<{data: string , setter: React.Dispatch<React.SetStateAction<boolean>>}>) => {
    const [firstnameError, lastnameError, dateError] = [!nameValidation(toValidate[0].data), !nameValidation(toValidate[1].data), !dateValidation(toValidate[2].data)]
    toValidate[0].setter(firstnameError)
    toValidate[1].setter(lastnameError)
    toValidate[2].setter(dateError)

    return [firstnameError, lastnameError, dateError].every(validation => !validation)
}

export const registerSecondValidation = (toValidate: Array<{data: string , setter: React.Dispatch<React.SetStateAction<boolean>>}>) => {
    const [emailError, passwordError, passwordCheckError, passwordCompareError] = [!emailValidation(toValidate[0].data), !passwordValidation(toValidate[1].data), !passwordValidation(toValidate[2].data), !passwordComparation(toValidate[1].data, toValidate[2].data)]
    toValidate[0].setter(emailError)
    toValidate[1].setter(passwordError)
    toValidate[2].setter(passwordCheckError)

    if(!passwordError) toValidate[1].setter(passwordCompareError)
    if(!passwordCheckError) toValidate[2].setter(passwordCompareError)

    return [emailError, passwordError, passwordCheckError, passwordCompareError].every(validation => !validation)
}

export const loginValidation = (toValidate: Array<{data: string , setter: React.Dispatch<React.SetStateAction<boolean>>}>) => {
    const [emailError, passwordError] = [!emailValidation(toValidate[0].data), !passwordValidation(toValidate[1].data)]
    toValidate[0].setter(emailError)
    toValidate[1].setter(passwordError)

    return [emailError, passwordError].every(validation => !validation)
}