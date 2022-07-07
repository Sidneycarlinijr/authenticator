import { createStore, combineReducers } from 'redux'

import userInfoReducer from './reducer/userInfo'

const reducers = combineReducers({
    userInfo: userInfoReducer
})

function storeConfig(){
    return(
        createStore(reducers)
    )

}

export default storeConfig;