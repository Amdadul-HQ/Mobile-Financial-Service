export const saveEmailInLocalStroage = (email) =>{
    localStorage.clear()
    localStorage.setItem('email',email)
}

export const removeEmailFromLocalStroage = () =>{
    localStorage.removeItem('email')
}

export const getEmailFromLocalStroage = () =>{
    localStorage.getItem('email')
}