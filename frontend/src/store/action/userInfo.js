export default function sendUserInfo(data){
    return{
        type: 'USER_LOGIN_AND_PASSWORD',
        payload: data,
    }
}
