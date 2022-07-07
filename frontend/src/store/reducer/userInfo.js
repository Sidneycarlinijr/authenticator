const initialState = {
    email: undefined,
    password: undefined
}

export default function (state = initialState, action){
//     if(action.type === 'USER_LOGIN_AND_PASSWORD'){
//         return{
//             ...state,
//             email: action.payload.email,
//             password: action.payload.password
//         }
//     }


switch(action.type){
    case 'USER_LOGIN_AND_PASSWORD':
        return {
            ...state,
            email: action.payload.email,
            password: action.payload.password
        }
    default:
        return state
}
}