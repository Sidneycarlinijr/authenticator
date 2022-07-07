const initialState = {
    email: '',
    password: ''
}

export default function (state = initialState, action) {
    if (action.type === 'USER_LOGIN_AND_PASSWORD') {
        return {
            email: action.payload.userData.email,
            password: action.payload.userData.password
        }
    } else {
        return (state)
    }
}