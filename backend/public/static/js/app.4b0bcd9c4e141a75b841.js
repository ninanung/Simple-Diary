webpackJsonp([1],{"25rK":function(t,e){},"8ya9":function(t,e){},A63Q:function(t,e){},Ipd2:function(t,e){},JCku:function(t,e){},L6Eh:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=n("NYxO"),a="login",s="logout",r="signinpopup",c="loginpopup",u="signincancel",l="logincancel",d="photopopup",p="photocancel",v=n("mtWM"),m=n.n(v),f="/api/login",h="/api/signin",_="/api/confirm",g="/api/changephoto",k=function(t,e){return m.a.post(f,{id:t,password:e})},y=function(t,e,n){return m.a.post(h,{id:t,password:e,email:n})},b=function(t,e){return m.a.post(_,{id:t,code:e})},C=function(t){return m.a.post(g,t)},w={name:"login",data:function(){return{id:"",password:""}},methods:{login:function(){var t=this,e=void 0;k(this.id,this.password).then(function(n){return e=n.data.error,n.data.words,"false"===e?(t.$store.dispatch(a,{id:t.id,email:n.data.email,src:n.data.src}),t.id="",t.password="",console.log("get login"),t.$store.dispatch(l),t.$router.push({name:"home"})):alert(n.data.words)})},cancel:function(){this.$store.dispatch(l)}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"form"},[n("h1",{staticClass:"inputhead"},[t._v("Login")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("ID")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"id",attrs:{type:"text",placeholder:"ID",autofocus:""},domProps:{value:t.id},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.login(e)}],input:function(e){e.target.composing||(t.id=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.login(e)}],input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("button",{on:{click:function(e){t.login()}}},[t._v("Login")]),t._v(" "),n("button",{on:{click:function(e){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var $=n("VU/8")(w,P,!1,function(t){n("hV+J")},"data-v-4c0218b2",null).exports,E={name:"login",data:function(){return{id:"",password:"",repeatPassword:"",email:"",repeatEmail:"",isWrong:!1}},computed:Object(o.b)(["IDs"]),watch:{id:function(){this.id.length>10&&(alert("ID can't be longer then 10 digits"),this.id="")}},methods:{signin:function(){var t=this;if(this.id.length<3)return alert("ID must be longer then 3 digits");if(!(this.id&&this.password&&this.email&&this.repeatEmail&&this.repeatPassword))return alert("Please write all information");if(this.password!==this.repeatPassword)return alert("Password is not match with repeated one");if(this.email!==this.repeatEmail)return alert("Email is not match with repeated one");var e="",n=void 0;y(this.id,this.password,this.email).then(function(i){return e=i.data.words,n=i.data.error,"true"==i.data.error?console.log(e):console.log(i.data),"false"==n?(t.id="",t.password="",t.email="",console.log("get signin"),alert('We send email to your address, Please check "Confirm Code". If you do not confirm account, it will deleted next day.'),t.$store.dispatch(u)):alert(e)})},cancel:function(){this.$store.dispatch(u)}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"form",on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin()}]}},[n("h1",{staticClass:"inputhead"},[t._v("Signin")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("ID")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",placeholder:"ID",autofocus:""},domProps:{value:t.id},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin()}],input:function(e){e.target.composing||(t.id=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin()}],input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Repeat Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{type:"password",placeholder:"Repeat Password"},domProps:{value:t.repeatPassword},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin()}],input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin()}],input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Repeat Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatEmail,expression:"repeatEmail"}],attrs:{type:"email",placeholder:"Repeat Email"},domProps:{value:t.repeatEmail},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin()}],input:function(e){e.target.composing||(t.repeatEmail=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("button",{on:{click:function(e){t.signin()}}},[t._v("Signin")]),t._v(" "),n("button",{on:{click:function(e){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var S=n("VU/8")(E,x,!1,function(t){n("JCku")},"data-v-c2798816",null).exports,L={name:"photopopup",computed:Object(o.b)(["user"]),methods:{changePhoto:function(){var t=this;if(!this.$refs.photofile.files[0])return alert("Please select Photo first");var e=new FormData;e.append("file",this.$refs.photofile.files[0]),e.append("id",this.user.id),C(e).then(function(e){return"true"==e.data.error?alert(e.data.word):(t.$store.dispatch(a,{id:e.data.id,email:e.data.email,src:e.data.src}),t.$store.dispatch(p),t.$router.push({name:"profile"}))})},cancel:function(){this.$store.dispatch(p)}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"form",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.cancel()}}},[n("h1",{staticClass:"inputhead"},[t._v("Change Photo")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Now")]),t._v(" "),n("img",{attrs:{src:this.user.src}})]),t._v(" "),n("div",{staticClass:"input"},[n("label",[t._v("Select Photo")]),t._v(" "),n("form",{attrs:{method:"post",enctype:"multipart/form-data"}},[n("input",{ref:"photofile",attrs:{type:"file",name:"photo",accept:".jpeg, .jpg, .png"}})])]),t._v(" "),n("div",{staticClass:"input"},[n("button",{on:{click:function(e){t.changePhoto()}}},[t._v("Update")]),t._v(" "),n("button",{on:{click:function(e){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var R=n("VU/8")(L,N,!1,function(t){n("jVb5")},"data-v-2ead6bbc",null).exports,V={name:"app",computed:Object(o.b)(["islogin","user","Login","Signin","Photo"]),components:{Signin:S,Login:$,PhotoPopUp:R},data:function(){return{titleText:"Siary"}},methods:{logout:function(){this.$store.dispatch(s),this.$router.push({name:"home"})},loginPage:function(){this.$store.dispatch(c)},signinPage:function(){this.$store.dispatch(r)}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[t.Login?n("login"):t._e(),t._v(" "),t.Signin?n("signin"):t._e(),t._v(" "),t.Photo?n("photo-pop-up"):t._e(),t._v(" "),n("div",{staticClass:"title"},[n("div",{staticClass:"span"},[t.islogin?n("span",[n("button",{staticClass:"btn btn-default",on:{click:function(e){t.logout()}}},[t._v("Logout")])]):[n("span",[n("button",{staticClass:"btn btn-default",on:{click:function(e){t.loginPage()}}},[t._v("Login")])]),t._v(" "),n("span",[n("button",{staticClass:"btn btn-default",on:{click:function(e){t.signinPage()}}},[t._v("Signin")])])],t._v(" "),n("br"),t._v(" "),t.islogin?n("span",[t._v("Hello, "+t._s(t.user.id))]):n("span",[t._v("Please Login!")])],2),t._v(" "),n("router-link",{attrs:{id:"title",to:{name:"home"}}},[t._v("Siary")])],1),t._v(" "),n("div",{staticClass:"nav"},[n("nav",[t.islogin?n("ul",[n("li",[n("router-link",{attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"main"}}},[t._v("Main")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"profile"}}},[t._v("Profile")])],1)]):t._e()])]),t._v(" "),n("div",[n("router-view")],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("Developer: Seungje Jun")]),this._v(" "),e("p",[this._v("Contact: ninanung@naver.com")]),this._v(" "),e("p",[this._v("Github: https://github.com/ninanung")])])}]};var F,I,U=n("VU/8")(V,D,!1,function(t){n("25rK")},null,null).exports,j=n("bOdI"),J=n.n(j),O=(F={},J()(F,a,function(t,e){t.islogin=!0,t.user.id=e.id,t.user.email=e.email,t.user.src=e.src}),J()(F,s,function(t){t.islogin=!1,t.user.id="",t.user.email="",t.user.src=""}),J()(F,c,function(t){t.Login=!0}),J()(F,r,function(t){t.Signin=!0}),J()(F,l,function(t){t.Login=!1}),J()(F,u,function(t){t.Signin=!1}),J()(F,d,function(t){t.Photo=!0}),J()(F,p,function(t){t.Photo=!1}),F),M=(I={},J()(I,a,function(t,e){t.commit(a,e)}),J()(I,s,function(t){t.commit(s)}),J()(I,c,function(t){t.commit(c)}),J()(I,r,function(t){t.commit(r)}),J()(I,l,function(t){t.commit(l)}),J()(I,u,function(t){t.commit(u)}),J()(I,d,function(t){t.commit(d)}),J()(I,p,function(t){t.commit(p)}),I);i.a.use(o.a);var T=new o.a.Store({state:{islogin:!1,user:{id:"",email:"",src:""},Login:!1,Signin:!1,Photo:!1},mutations:O,actions:M}),W=n("/ocq"),Y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("h1",{staticClass:"one"},[this._v("Your Day and My Day, Siary")]),this._v(" "),e("h1",{staticClass:"two"},[this._v("Not an SNS, Just our normal Life")]),this._v(" "),e("h1",{staticClass:"three"},[this._v("Write private or public Diary")]),this._v(" "),e("h1",{staticClass:"four"},[this._v("Show or see somebody's Little Time")])])}]};var H=n("VU/8")({name:"home"},Y,!1,function(t){n("oqv4")},"data-v-23860cb2",null).exports,q={name:"islogin",computed:Object(o.b)(["user"]),methods:{changePhoto:function(){return this.$store.dispatch(d)}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("img",{attrs:{src:this.user.src},on:{click:function(e){t.changePhoto()}}}),t._v(" "),n("h1",[t._v("Your ID :")]),t._v(" "),n("h2",[t._v(t._s(t.user.id))]),t._v(" "),n("h1",[t._v("Your Email :")]),t._v(" "),n("h2",[t._v(t._s(t.user.email))])])},staticRenderFns:[]};var A=n("VU/8")(q,G,!1,function(t){n("A63Q")},"data-v-c989420a",null).exports,K={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("404 Not Found!!!!!")]),this._v(" "),e("img",{attrs:{src:n("kvT1")}})])}]};var Q=n("VU/8")({name:"404"},K,!1,function(t){n("L6Eh")},"data-v-7792f96c",null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var B=n("VU/8")({name:"Main"},z,!1,function(t){n("8ya9")},"data-v-22e336e6",null).exports,X={name:"Confirm",data:function(){return{id:"",code:""}},created:function(){this.id=this.$route.params.id,this.code=this.$route.params.code},methods:{confirm:function(){var t=this;b(this.id,this.code).then(function(e){return"true"==e.data.error?alert(e.data.words+" Please try again or contact to us."):(console.log("confirm success"),t.$router.push({name:"result"}))})}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"background"}}),t._v(" "),n("h1",{attrs:{id:"words"}},[t._v("Please confirm your account")]),t._v(" "),n("h2",{attrs:{id:"words"}},[t._v("Click the button.")]),t._v(" "),n("button",{staticClass:"btn btn-default",on:{click:function(e){t.confirm()}}},[t._v("Confirming!")])])},staticRenderFns:[]};var tt=n("VU/8")(X,Z,!1,function(t){n("f9yG")},"data-v-75347c2c",null).exports,et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Confirming Your account is success! Please Login!")])])}]};var nt=n("VU/8")({},et,!1,function(t){n("Ipd2")},"data-v-86ce351a",null).exports;i.a.use(W.a),i.a.config.productionTip=!1,i.a.prototype.$axios=m.a;var it=new W.a({mode:"history",routes:[{path:"/",name:"home",component:H},{path:"/confirm/:id/:code",name:"confirm",component:tt},{path:"/confirm/result",name:"result",component:nt},{path:"/main",name:"main",component:B},{path:"/login",name:"login",component:$},{path:"/signin",name:"signin",component:S},{path:"/profile",name:"profile",component:A},{path:"*",component:Q}]});new i.a({store:T,router:it,el:"#app",render:function(t){return t(U)}})},f9yG:function(t,e){},"hV+J":function(t,e){},jVb5:function(t,e){},kvT1:function(t,e,n){t.exports=n.p+"static/img/404.224f7f0.jpg"},oqv4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4b0bcd9c4e141a75b841.js.map