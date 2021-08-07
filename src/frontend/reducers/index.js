const reducer = (state,actions)=>{
    switch (actions.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                mylist:[...state.mylist,actions.payload]
            }
            break;
        case 'DELETE_FAVORITE':
            return {
                ...state,
                mylist:state.mylist.filter(items=>items.id!==actions.payload)
            }
            break;
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user:actions.payload
            }
            break;
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user:actions.payload
            }
            break;
         case 'REGISTER_REQUEST':
            return {
                ...state,
                user:actions.payload
            }
            break;
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing:state.trends.find(item => item.id=== Number(actions.payload))
                || state.original.find(item => item.id === Number(actions.payload))
                || []
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer