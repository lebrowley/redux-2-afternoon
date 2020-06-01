import axios from 'axios';

const initialState = {
    email: null,
    firstName: null, 
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'   //define the action type so we can put it on the action object below, so we can access it in the reducer function below that

export function requestUserData() {
    let data = axios.get('/auth/user-data').then(res => res.data)  //access the db data so we can define the payload value in the return
    return {  //action object
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + '_FULFILLED' :
            const {email, firstName, lastName} = action.payload.user
            return {email, firstName, lastName}
        default: 
        return state
    }
}