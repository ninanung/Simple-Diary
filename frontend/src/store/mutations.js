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
    },
    [constant.LOGINPOPUP]: (state) => {
        state.Login = true;
        console.log("login POPUP");
    },
    [constant.SIGNINPOPUP]: (state) => {
        state.Signin = true;
        console.log("signin POPUP");
    },
    [constant.LOGINCANCEL]: (state) => {
        state.Login = false;
        console.log("login CANCEL");
    },
    [constant.SIGNINCANCEL]: (state) => {
        state.Signin = false;
    }
}