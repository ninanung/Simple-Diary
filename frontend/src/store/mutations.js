import constant from '../constant.js';

export default {
    [constant.LOGIN]: (state, payload) => {
        state.islogin = true;
        state.user.id = payload.id;
        state.user.email = payload.email;
        state.user.src = payload.src;
    },
    [constant.LOGOUT]: (state) => {
        state.islogin = false;
        state.user.id = "";
        state.user.email = "";
        state.user.src = "";
    },
    [constant.LOGINPOPUP]: (state) => {
        state.Login = true;
    },
    [constant.SIGNINPOPUP]: (state) => {
        state.Signin = true;
    },
    [constant.LOGINCANCEL]: (state) => {
        state.Login = false;
    },
    [constant.SIGNINCANCEL]: (state) => {
        state.Signin = false;
    },
    [constant.PHOTOPOPUP]: (state) => {
        state.Photo = true;
    },
    [constant.PHOTOCANCEL]: (state) => {
        state.Photo = false;
    }
}