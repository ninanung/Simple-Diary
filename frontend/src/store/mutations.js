import constant from '../constant.js';

export default {
    [constant.LOGIN]: (state, payload) => {
        state.islogin = true;
        state.user.id = payload.id;
        state.user.email = payload.email;
    },
    [constant.LOGOUT]: (state) => {
        state.islogin = false;
        state.user.id = "";
        state.user.email = "";
    }
}