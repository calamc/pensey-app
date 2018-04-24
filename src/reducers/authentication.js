export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        return {
            uid: action.user.uid,
            provider: action.user.providerData[0]
        };
        case 'LOGOUT':
        return {

        };
        default:
        return state;
    }
};