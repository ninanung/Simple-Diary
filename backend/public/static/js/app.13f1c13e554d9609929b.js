webpackJsonp([1],{"0fIF":function(t,n){},"81C7":function(t,n){},"8ya9":function(t,n){},CP9E:function(t,n){},L6Eh:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),o=e("NYxO"),s="login",a="logout",r="signinpopup",c="loginpopup",u="signincancel",l="logincancel",d="photopopup",p="photocancel",h=e("mtWM"),f=e.n(h),v="/api/login",m="/api/signin",_="/api/confirm",g="/api/changephoto",C={login:function(t,n){return f.a.post(v,{id:t,password:n})},signin:function(t,n){return f.a.post(m,{id:t,password:n})},confirm:function(t,n){return f.a.post(_,{id:t,code:n})},changePhoto:function(t,n){return f.a.post(g,{id:t,file:n})}},k={name:"login",data:function(){return{id:"",password:""}},methods:{login:function(){var t=this,n=void 0;C.login(this.id,this.password).then(function(e){return n=e.data.error,e.data.words,console.log(e.data),"false"===n?(t.$store.dispatch(s,{id:t.id,email:e.data.email,src:e.data.src}),t.id="",t.password="",console.log("get login"),t.$router.push({name:"home"})):alert("Please check your ID and password")})},cancel:function(){this.$store.dispatch(l)}}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal"},[e("div",{staticClass:"form"},[e("h1",{staticClass:"inputhead"},[t._v("Login")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"id",attrs:{type:"text",placeholder:"ID",autofocus:""},domProps:{value:t.id},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.login(n)}],input:function(n){n.target.composing||(t.id=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.login(n)}],input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("button",{on:{click:function(n){t.login()}}},[t._v("Login")]),t._v(" "),e("button",{on:{click:function(n){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var b=e("VU/8")(k,y,!1,function(t){e("cp2P")},"data-v-3f8f8eb6",null).exports,w={name:"login",data:function(){return{id:"",password:"",email:"",isWrong:!1}},computed:Object(o.b)(["IDs"]),watch:{id:function(){this.id.length>10&&(alert("ID can't be longer then 10 digits"),this.id="")}},methods:{signin:function(){var t=this;if(this.id.length<3)return alert("ID must be longer then 3 digits");if(!(this.id&&this.password&&this.email))return alert("Please write all information");var n="",e=void 0;C.signin(this.id,this.password).then(function(i){return n=i.data.words,e=i.data.error,"true"==i.data.error?console.log(n):console.log(i.data),"false"==e?(t.id="",t.password="",t.email="",console.log("get signin"),alert('We send email to your address, Please check "Confirm Code". If you do not confirm account, it will deleted next day.'),t.$router.push({name:"home"})):alert(n)})},cancel:function(){this.$store.dispatch(u)}}},P={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal"},[e("div",{staticClass:"form"},[e("h1",{staticClass:"inputhead"},[t._v("Signin")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"id",attrs:{type:"text",placeholder:"ID",autofocus:""},domProps:{value:t.id},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.signin()}],input:function(n){n.target.composing||(t.id=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.signin()}],input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.signin()}],input:function(n){n.target.composing||(t.email=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("button",{on:{click:function(n){t.signin()}}},[t._v("Signin")]),t._v(" "),e("button",{on:{click:function(n){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var $=e("VU/8")(w,P,!1,function(t){e("lYNR")},"data-v-22834991",null).exports,x={name:"app",computed:Object(o.b)(["islogin","user","Login","Signin"]),components:{Signin:$,Login:b},data:function(){return{titleText:"Siary"}},methods:{logout:function(){this.$store.dispatch(a),this.$router.push({name:"home"})},loginPage:function(){this.$store.dispatch(c)},signinPage:function(){this.$store.dispatch(r)},changeTitleText:function(){this.titleText="Go to Home"},changeTitleSiary:function(){this.titleText="Siary"}}},E={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"body"},[t.Login?e("login"):t._e(),t._v(" "),t.Signin?e("signin"):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"span"},[t.islogin?e("span",[e("router-link",{attrs:{to:{name:"logout"}}},[t._v("Logout")])],1):[e("span",[e("button",{staticClass:"btn btn-default",on:{click:function(n){t.loginPage()}}},[t._v("Login")])]),t._v(" "),e("span",[e("button",{staticClass:"btn btn-default",on:{click:function(n){t.signinPage()}}},[t._v("Signin")])])],t._v(" "),e("br"),t._v(" "),t.islogin?e("span",[t._v("Hello, { user.id }")]):e("span",[t._v("Please Login!")])],2),t._v(" "),e("h1",[e("a",{attrs:{id:"title",href:"/"},on:{mouseout:function(n){t.changeTitleSiary()},mouseover:function(n){t.changeTitleText()}}},[t._v(t._s(t.titleText))])])]),t._v(" "),e("div",{staticClass:"nav"},[e("nav",[t.islogin?e("ul",[e("li",[e("router-link",{attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"main"}}},[t._v("Main")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"profile"}}},[t._v("Profile")])],1)]):t._e()])]),t._v(" "),e("div",[e("router-view")],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer"},[n("p",[this._v("Developer: Seungje Jun")]),this._v(" "),n("p",[this._v("Contact: ninanung@naver.com")]),this._v(" "),n("p",[this._v("Github: https://github.com/ninanung")])])}]};var S,L,N=e("VU/8")(x,E,!1,function(t){e("nchR")},null,null).exports,I=e("bOdI"),R=e.n(I),T=(S={},R()(S,s,function(t,n){t.islogin=!0,t.user.id=n.id,t.user.email=n.email,t.user.src=n.src}),R()(S,a,function(t){t.islogin=!1,t.user.id="",t.user.email="",t.user.src=""}),R()(S,c,function(t){t.Login=!0}),R()(S,r,function(t){t.Signin=!0}),R()(S,l,function(t){t.Login=!1}),R()(S,u,function(t){t.Signin=!1}),R()(S,d,function(t){t.Photo=!0}),R()(S,p,function(t){t.Photo=!1}),S),D=(L={},R()(L,s,function(t,n){t.commit(s,n)}),R()(L,a,function(t){t.commit(a)}),R()(L,c,function(t){t.commit(c)}),R()(L,r,function(t){t.commit(r)}),R()(L,l,function(t){t.commit(l)}),R()(L,u,function(t){t.commit(u)}),R()(L,d,function(t){t.commit(r)}),R()(L,p,function(t){t.commit(l)}),L);i.a.use(o.a);var F=new o.a.Store({state:{islogin:!1,user:{id:"",email:"",src:""},Login:!1,Signin:!1,Photo:!1},mutations:T,actions:D}),V=e("/ocq"),U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"one"},[this._v("Your Day and My Day, Siary")]),this._v(" "),n("h1",{staticClass:"two"},[this._v("Not an SNS, Just our normal Life")]),this._v(" "),n("h1",{staticClass:"three"},[this._v("Write private or public Diary")]),this._v(" "),n("h1",{staticClass:"four"},[this._v("Show or see somebody's Little Time")])])}]};var j=e("VU/8")({name:"home"},U,!1,function(t){e("0fIF")},"data-v-78428bc6",null).exports,O={name:"login",computed:Object(o.b)(["user"]),methods:{changePhoto:function(){var t=this;if(!this.$ref.photofile.files[0])return alert("Please select Photo first");var n=this.$ref.photofile.files[0];C.changePhoto(user.id,n).then(function(n){return"true"==n.data.error?alert(n.data.word):(t.$store.dispatch(constnat.LOGIN,{id:n.data.id,email:n.data.email,src:n.data.src}),t.$store.dispatch(p),t.$router.push({name:"profile"}))})},cancel:function(){this.$store.dispatch(p)}}},Y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal"},[e("div",{staticClass:"form",on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel()}}},[e("h1",{staticClass:"inputhead"},[t._v("Change Photo")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("Select Photo")]),t._v(" "),e("form",{attrs:{method:"post",enctype:"multipart/form-data"}},[e("input",{ref:"photofile",attrs:{type:"file",name:"photo",accept:".jpeg, .jpg, .png"}})])]),t._v(" "),e("div",{staticClass:"input"},[e("button",{on:{click:function(n){t.changePhoto()}}},[t._v("Login")]),t._v(" "),e("button",{on:{click:function(n){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"input"},[n("label",[this._v("Now")]),this._v(" "),n("img",{attrs:{src:"{{ user.src }}"}})])}]};var H=e("VU/8")(O,Y,!1,function(t){e("pBbY")},"data-v-057067c5",null).exports,M={name:"islogin",computed:Object(o.b)(["user","Photo"]),components:{PhotoPopUp:H},data:function(){return{popup:!1}},methods:{changePhoto:function(){this.$store.dispatch(d)}}},W={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("img",{attrs:{src:"{{ user.src }}"},on:{click:function(n){t.changePhoto()}}}),t._v(" "),e("h1",[t._v("Your ID")]),t._v(" "),e("h2",[t._v(t._s(t.user.id))]),t._v(" "),e("h1",[t._v("Your Email")]),t._v(" "),e("h2",[t._v(t._s(t.user.email))]),t._v(" "),t.Photo?e("photopopup"):t._e()],1)},staticRenderFns:[]};var G=e("VU/8")(M,W,!1,function(t){e("CP9E")},"data-v-70cddd7c",null).exports,J={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("404 Not Found!!!!!")]),this._v(" "),n("img",{attrs:{src:e("kvT1")}})])}]};var B=e("VU/8")({name:"404"},J,!1,function(t){e("L6Eh")},"data-v-7792f96c",null).exports,q={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var z=e("VU/8")({name:"Main"},q,!1,function(t){e("8ya9")},"data-v-22e336e6",null).exports,A={name:"Confirm",data:function(){return{id:"",code:""}},mounted:function(){this.id=this.$router.params.id,this.code=this.$router.params.code},methods:{confirm:function(){var t=this;C.confrim(this.id,this.code).then(function(n){if("true"==n.data.error){return t.$router.push({name:"result",params:{first:"Confirming your account is failed. Please try again or contact to us.",second:n.data.words}})}var e=n.data.words;return t.$router.push({name:"result",params:{first:e,second:"Please, Login!"}})})}}},K={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",{attrs:{id:"words"}},[t._v("Please confirm your account")]),t._v(" "),e("h2",{attrs:{id:"words"}},[t._v("Click the button.")]),t._v(" "),e("button",{staticClass:"btn btn-default",on:{click:function(n){t.confirm()}}},[t._v("Confirming!")])])},staticRenderFns:[]};var Q=e("VU/8")(A,K,!1,function(t){e("81C7")},"data-v-73df9551",null).exports,X={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",{attrs:{id:"words"}},[this._v(this._s(this.first))]),this._v(" "),n("h1",{attrs:{id:"words"}},[this._v(this._s(this.second))])])},staticRenderFns:[]};var Z=e("VU/8")({name:"result",props:["first","second"]},X,!1,function(t){e("VP3p")},"data-v-54c29ca0",null).exports;i.a.use(V.a),i.a.config.productionTip=!1,i.a.prototype.$axios=f.a;var tt=new V.a({mode:"history",routes:[{path:"/",name:"home",component:j},{path:"/confirm/:id/:code",name:"confirm",component:Q,children:[{path:"result",name:"result",props:!0,component:Z}]},{path:"/main",name:"main",component:z},{path:"/login",name:"login",component:b},{path:"/signin",name:"signin",component:$},{path:"/profile",name:"profile",component:G},{path:"*",component:B}]});new i.a({store:F,router:tt,el:"#app",render:function(t){return t(N)}})},VP3p:function(t,n){},cp2P:function(t,n){},kvT1:function(t,n,e){t.exports=e.p+"static/img/404.224f7f0.jpg"},lYNR:function(t,n){},nchR:function(t,n){},pBbY:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.13f1c13e554d9609929b.js.map