webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br />\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_admin_dashboard_admin_component__ = __webpack_require__("./src/app/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'chat/:id', component: __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user-manage', component: __WEBPACK_IMPORTED_MODULE_14__dashboard_admin_dashboard_admin_component__["a" /* DashboardAdminComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_admin_dashboard_admin_component__["a" /* DashboardAdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_19__services_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  background: url(\"http://shurl.esy.es/y\") no-repeat fixed center;\n  background-size: cover;\n}\n\n.fa-2x {\n  font-size: 1.5em;\n}\n\n.app {\n  position: relative;\n  overflow: hidden;\n  top: 19px;\n  height: calc(100% - 38px);\n  margin: auto;\n  padding: 0;\n  -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);\n}\n\n.app-one {\n  background-color: #f7f7f7;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);\n}\n\n.side {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.side-one {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  position: relative;\n  display: block;\n  top: 0;\n}\n\n.side-two {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  position: relative;\n  top: -100%;\n  left: -100%;\n  -webkit-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n.heading {\n  padding: 10px 16px 10px 15px;\n  margin: 0;\n  height: 60px;\n  width: 100%;\n  background-color: #eee;\n  z-index: 1000;\n}\n\n.heading-avatar {\n  padding: 0;\n  cursor: pointer;\n}\n\n.heading-avatar-icon img {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.heading-name {\n  padding: 0 !important;\n  cursor: pointer;\n}\n\n.heading-name-meta {\n  font-weight: 700;\n  font-size: 100%;\n  padding: 5px;\n  padding-bottom: 0;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #000;\n  display: block;\n}\n\n.heading-online {\n  display: none;\n  padding: 0 5px;\n  font-size: 12px;\n  color: #93918f;\n}\n\n.heading-compose {\n  padding: 0;\n}\n\n.heading-compose i {\n    text-align: center;\n    padding: 5px;\n    color: #93918f;\n    cursor: pointer;\n  }\n\n.heading-dot {\n  padding: 0;\n  margin-left: 10px;\n}\n\n.heading-dot i {\n    text-align: right;\n    padding: 5px;\n    color: #93918f;\n    cursor: pointer;\n  }\n\n.searchBox {\n  padding: 0 !important;\n  margin: 0 !important;\n  height: 60px;\n  width: 100%;\n}\n\n.searchBox-inner {\n  height: 100%;\n  width: 100%;\n  padding: 10px !important;\n  background-color: #fbfbfb;\n}\n\n/*New Message*/\n\n.newMessage {\n  padding: 0 !important;\n  margin: 0 !important;\n  height: 100%;\n  position: relative;\n  left: -100%;\n}\n\n.newMessage-heading {\n  padding: 10px 16px 10px 15px !important;\n  margin: 0 !important;\n  height: 100px;\n  width: 100%;\n  background-color: #00bfa5;\n  z-index: 1001;\n}\n\n.newMessage-main {\n  padding: 10px 16px 0 15px !important;\n  margin: 0 !important;\n  height: 60px;\n  margin-top: 30px !important;\n  width: 100%;\n  z-index: 1001;\n  color: #fff;\n}\n\n.newMessage-title {\n  font-size: 18px;\n  font-weight: 700;\n  padding: 10px 5px !important;\n}\n\n.newMessage-back {\n  text-align: center;\n  vertical-align: baseline;\n  padding: 12px 5px !important;\n  display: block;\n  cursor: pointer;\n}\n\n.newMessage-back i {\n    margin: auto !important;\n  }\n\n.composeBox {\n  padding: 0 !important;\n  margin: 0 !important;\n  height: 60px;\n  width: 100%;\n}\n\n.composeBox-inner {\n  height: 100%;\n  width: 100%;\n  padding: 10px !important;\n  background-color: #fbfbfb;\n}\n\n.composeBox-inner input:focus {\n    outline: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n\n.compose-sideBar {\n  padding: 0 !important;\n  margin: 0 !important;\n  background-color: #fff;\n  overflow-y: auto;\n  border: 1px solid #f7f7f7;\n  height: calc(100% - 160px);\n}\n\n/*Conversation*/\n\n.conversation {\n  padding: 0 !important;\n  margin: 0 !important;\n  height: 100%;\n  /*width: 100%;*/\n  border-left: 1px solid rgba(0, 0, 0, .08);\n  /*overflow-y: auto;*/\n}\n\n.message {\n  padding: 0 !important;\n  margin: 0 !important;\n  background: no-repeat fixed center;\n  background-size: cover;\n  overflow-y: auto;\n  border: 1px solid #f7f7f7;\n  height: calc(100% - 120px);\n}\n\n.message-previous {\n  margin: 0 !important;\n  padding: 0 !important;\n  height: auto;\n  width: 100%;\n}\n\n.previous {\n  font-size: 15px;\n  text-align: center;\n  padding: 10px !important;\n  cursor: pointer;\n}\n\n.previous a {\n    text-decoration: none;\n    font-weight: 700;\n  }\n\n.message-body {\n  margin: 0 !important;\n  padding: 0 !important;\n  width: auto;\n  height: auto;\n}\n\n.message-main-receiver {\n  /*padding: 10px 20px;*/\n  margin-bottom: 8px;\n  max-width: 60%;\n}\n\n.message-main-sender {\n  padding: 3px 20px !important;\n  margin-left: 40% !important;\n  max-width: 60%;\n}\n\n.message-text {\n  margin: 0 !important;\n  padding: 5px !important;\n  word-wrap: break-word;\n  font-weight: 200;\n  font-size: 14px;\n  padding-bottom: 0 !important;\n}\n\n.message-time {\n  margin: 0 !important;\n  margin-left: 50px !important;\n  font-size: 12px;\n  text-align: right;\n  color: #9a9a9a;\n}\n\n.receiver {\n  width: auto !important;\n  padding: 4px 10px 7px !important;\n  border-radius: 10px 10px 10px 0;\n  background: #ffffff;\n  font-size: 12px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n  word-wrap: break-word;\n  display: inline-block;\n}\n\n.sender {\n  float: right;\n  width: auto !important;\n  background: #DDDDDD;\n  border-radius: 10px 10px 0 10px;\n  padding: 4px 10px 7px !important;\n  font-size: 12px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n  display: inline-block;\n  word-wrap: break-word;\n}\n\n/*Reply*/\n\n.reply {\n  height: 60px;\n  width: 100%;\n  background-color: #f5f1ee;\n  padding: 10px 5px 10px 5px !important;\n  margin: 0 !important;\n  z-index: 1000;\n}\n\n.reply-emojis {\n  padding: 5px !important;\n}\n\n.reply-emojis i {\n    text-align: center;\n    padding: 5px 5px 5px 5px !important;\n    color: #93918f;\n    cursor: pointer;\n  }\n\n.reply-recording {\n  padding: 5px !important;\n}\n\n.reply-recording i {\n    text-align: center;\n    padding: 5px !important;\n    color: #93918f;\n    cursor: pointer;\n  }\n\n.reply-send {\n  padding: 5px !important;\n}\n\n.reply-send i {\n    text-align: center;\n    padding: 5px !important;\n    color: #93918f;\n    cursor: pointer;\n  }\n\n.reply-main {\n  padding: 2px 5px !important;\n}\n\n.reply-main textarea {\n    width: 100%;\n    resize: none;\n    overflow: hidden;\n    padding: 5px !important;\n    outline: none;\n    border: none;\n    text-indent: 5px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    height: 100%;\n    font-size: 16px;\n  }\n\n.reply-main textarea:focus {\n      outline: none;\n      border: none;\n      text-indent: 5px;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n    }\n\n@media screen and (max-width: 700px) {\n  .app {\n    top: 0;\n    height: 100%;\n  }\n\n  .heading {\n    height: 70px;\n    background-color: #009688;\n  }\n\n  .fa-2x {\n    font-size: 2.3em !important;\n  }\n\n  .heading-avatar {\n    padding: 0 !important;\n  }\n\n  .heading-avatar-icon img {\n    height: 50px;\n    width: 50px;\n  }\n\n  .heading-compose {\n    padding: 5px !important;\n  }\n\n    .heading-compose i {\n      color: #fff;\n      cursor: pointer;\n    }\n\n  .heading-dot {\n    padding: 5px !important;\n    margin-left: 10px !important;\n  }\n\n    .heading-dot i {\n      color: #fff;\n      cursor: pointer;\n    }\n\n  .sideBar {\n    height: calc(100% - 130px);\n  }\n\n  .sideBar-body {\n    height: 80px;\n  }\n\n  .sideBar-avatar {\n    text-align: left;\n    padding: 0 8px !important;\n  }\n\n  .avatar-icon img {\n    height: 55px;\n    width: 55px;\n  }\n\n  .sideBar-main {\n    padding: 0 !important;\n  }\n\n    .sideBar-main .row {\n      padding: 0 !important;\n      margin: 0 !important;\n    }\n\n  .sideBar-name {\n    padding: 10px 5px !important;\n  }\n\n  .name-meta {\n    font-size: 16px;\n    padding: 5% !important;\n  }\n\n  .sideBar-time {\n    padding: 10px !important;\n  }\n\n  .time-meta {\n    text-align: right;\n    font-size: 14px;\n    padding: 4% !important;\n    color: rgba(0, 0, 0, .4);\n    vertical-align: baseline;\n  }\n  /*Conversation*/\n  .conversation {\n    padding: 0 !important;\n    margin: 0 !important;\n    height: 100%;\n    /*width: 100%;*/\n    border-left: 1px solid rgba(0, 0, 0, .08);\n    /*overflow-y: auto;*/\n  }\n\n  .message {\n    height: calc(100% - 140px);\n  }\n\n  .reply {\n    height: 70px;\n  }\n\n  .reply-emojis {\n    padding: 5px 0 !important;\n  }\n\n    .reply-emojis i {\n      padding: 5px 2px !important;\n      font-size: 1.8em !important;\n    }\n\n  .reply-main {\n    padding: 2px 8px !important;\n  }\n\n    .reply-main textarea {\n      padding: 8px !important;\n      font-size: 18px;\n    }\n\n  .reply-recording {\n    padding: 5px 0 !important;\n  }\n\n    .reply-recording i {\n      padding: 5px 0 !important;\n      font-size: 1.8em !important;\n    }\n\n  .reply-send {\n    padding: 5px 0 !important;\n  }\n\n    .reply-send i {\n      padding: 5px 2px 5px 0 !important;\n      font-size: 1.8em !important;\n    }\n}\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"min-height:500px;\">\r\n  <div *ngFor=\"let message of messages\">\r\n    <div *ngIf=\"message.url === this.url\">\r\n      <div *ngIf=\"message.sender === first_name\">\r\n        <div class=\"row message-body\">\r\n          <div class=\"col-sm-12 message-main-sender\">\r\n            <div class=\"sender\">\r\n              <div class=\"message-text\">\r\n                {{message.message}}{{message.groupID}}\r\n              </div>\r\n              <span class=\"message-time pull-right\">{{message.sender}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"message.sender !== first_name\">\r\n        <div class=\"row message-body\">\r\n          <div class=\"col-sm-12 message-main-receiver\">\r\n            <div class=\"receiver\">\r\n              <div class=\"message-text\">\r\n                {{message.message}}\r\n              </div>\r\n              <span class=\"message-time pull-right\">{{message.sender}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <img id=\"img-stream2\" src=\"\" />\r\n</div>\r\n<div class=\"row reply\">\r\n  <div class=\"col-sm-10 col-xs-10 reply-main\">\r\n    <input [(ngModel)]=\"message\" (keyup)=\"$event.keyCode == 13 && sendMessage()\" class=\"form-control\" />\r\n  </div>\r\n  <div class=\"col-sm-2 col-xs-2 reply-send\">\r\n    <button (click)=\"sendMessage()\" class=\"btn btn-primary\">Send</button>\r\n  </div>\r\n</div>\r\n<div class=\"row reply\">\r\n  <div class=\"col-sm-10 col-xs-10 reply-main\">\r\n    <input type=\"file\" [(ngModel)]=\"image\" (keyup)=\"$event.keyCode == 13 && sendImage()\" />\r\n  </div>\r\n  <div class=\"col-sm-2 col-xs-2 reply-send\">\r\n    <button (click)=\"sendImage()\" class=\"btn btn-primary\">Send Image</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"addClientModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Add new Client</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form (submit)=\"addClient()\">\r\n          <fieldset class=\"form-group\">\r\n            <legend>Invite Members</legend>\r\n            <div class=\"form-check\" *ngFor=\"let user of users\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" name=\"client\" (change)=\"addClient(user, $event.target.checked)\">\r\n                {{user.first_name}} {{user.last_name}}\r\n              </label>\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"modal-footer\">\r\n            <input type=\"submit\" class=\"btn btn-success\" value=\"Add\" />\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, authService, userService, router, flashMessage) {
        this.chatService = chatService;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.url = this.router.url;
        this.messages = [];
        this.imgChunks = [];
        /*groups: group[];
        group: group;
        group_id: any;
        group_name: string;
        admin: user;*/
        this.client = [];
        this.newClient = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (users) {
            return _this.users = users;
        });
        this.chatService
            .getMessages()
            .subscribe(function (data) {
            _this.messages.push(data);
        });
        /*this.chatService
          .getImages()
          .subsribe((chunk: string) => {
            console.log(this.imgChunks);
            var img = document.getElementById('img-stream2');
            this.imgChunks.push(chunk);
            img.setAttribute('src', 'data:image/jpeg;base64,' + window.btoa(chunk));
          });*/
        this.authService.getProfile().subscribe(function (user) {
            _this.id = user._id;
            _this.first_name = user.first_name;
            _this.sender = user.first_name;
        }, function (err) {
            console.log(err);
            return false;
        });
        /*this.authService.getCurrentGroup(this.chatService.currentGroup).subscribe(group => {
          this.group = group;
          this.group_id = group._id;
          this.group_name = group.group_name;
          this.admin = group.admin;
          this.client = group.client;
        },
          err => {
            console.log(err);
            return false;
          });*/
    };
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.url, this.message, this.sender);
        this.message = '';
    };
    ChatComponent.prototype.sendImage = function () {
        this.chatService.sendImage(this.image);
        this.image = '';
    };
    ChatComponent.prototype.addClient = function (user, isChecked) {
        console.log(this.newClient);
        if (isChecked) {
            this.newClient.push(user);
        }
        for (var _i = 0, _a = this.newClient; _i < _a.length; _i++) {
            var client = _a[_i];
            this.authService.addGroup(client)
                .subscribe(function (data) {
                console.log(data.msg);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-admin/dashboard-admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-admin/dashboard-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h2><b>User Request</b></h2>\r\n<div class=\"jumbotron\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\"></th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Occupation</th>\r\n        <th scope=\"col\">Phone</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\"></th>\r\n        <th scope=\"col\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let request of requests\">\r\n        <th><img src=\"https://chat-on-lan.herokuapp.com/api/profile/{{request._id}}/picture\" width=\"42\" height=\"42\" style=\"border-radius: 50%;\" /></th>\r\n        <th scope=\"row\">{{request.first_name}} {{request.last_name}}</th>\r\n        <td>{{request.occupation}}</td>\r\n        <td>{{request.phone}}</td>\r\n        <td>{{request.email}}</td>\r\n        <td><input type=\"button\" (click)=\"acceptUser(request)\" value=\"Accept\" class=\"btn btn-primary\" /></td>\r\n        <td><input type=\"button\" (click)=\"rejectUser(request._id)\" value=\"Reject\" class=\"btn btn-danger\" /></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<hr />\r\n<h2><b>Workers Detail</b></h2>\r\n<div class=\"jumbotron\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Occupation</th>\r\n        <th scope=\"col\">Phone</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <th *ngIf=\"user.img\"><img src=\"http://192.168.0.1:3000/api/profile/{{request._id}}/picture\" width=\"42\" height=\"42\" style=\"border-radius: 50%;\" /></th>\r\n        <th scope=\"row\">{{user.first_name}} {{user.last_name}}</th>\r\n        <td>{{user.occupation}}</td>\r\n        <td>{{user.phone}}</td>\r\n        <td>{{user.email}}</td>\r\n        <td><input type=\"button\" (click)=\"deleteUser(user._id)\" value=\"Delete\" class=\"btn btn-danger\" /></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard-admin/dashboard-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent(userService, authService, router, flashMessage) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (users) {
            return _this.users = users;
        });
        this.userService.getUserRequest()
            .subscribe(function (requests) {
            return _this.requests = requests;
        });
    };
    DashboardAdminComponent.prototype.acceptUser = function (request) {
        var _this = this;
        var user = {
            first_name: request.first_name,
            last_name: request.last_name,
            phone: request.phone,
            occupation: request.occupation,
            email: request.email,
            username: request.username,
            img: {
                data: request.img.data,
                contentType: request.img.contentType
            }
        };
        this.authService.addUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Requet Accepted', { cssClass: 'alert-success', timeout: 1000 });
                _this.users.push(data.user);
            }
            else {
                _this.flashMessage.show('Something went wrong..', { cssClass: 'alert-danger', timeout: 1000 });
            }
        });
        this.rejectUser(request._id);
    };
    DashboardAdminComponent.prototype.deleteUser = function (id) {
        var users = this.users;
        this.userService.deleteUser(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i]._id == id) {
                        users.splice(i, 1);
                    }
                }
            }
        });
    };
    DashboardAdminComponent.prototype.rejectUser = function (id) {
        var requests = this.requests;
        this.userService.deleteUserRequest(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < requests.length; i++) {
                    if (requests[i]._id == id) {
                        requests.splice(i, 1);
                    }
                }
            }
        });
    };
    DashboardAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__("./src/app/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__("./src/app/dashboard-admin/dashboard-admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 100%;\r\n  margin-left: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\">\r\n      <div class=\"card text-white border-secondary mb-3\" style=\"width: 20rem;\">\r\n        <h3 class=\"card-header bg-primary text-white\"><i class=\"fa fa-bell-o\" style=\"font-size:24px\"></i> Notifications</h3>\r\n        <div class=\"card-body\">\r\n          <div *ngFor=\"let notification of notifications\">\r\n            <div *ngIf=\"notification.type === 'group'\">\r\n              <div class=\"alert alert-dismissible alert-light\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"removeNotification(notification._id)\">&times;</button>\r\n                <strong>New Group!</strong> <br />You have an invitation to join\r\n                <a class=\"alert-link\">{{notification.data.grpName}}</a>, created by {{notification.data.grpAdmin}}.\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"notification.type === 'user'\">\r\n              <div class=\"alert alert-dismissible alert-light\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"removeNotification(notification._id)\">&times;</button>\r\n                <strong>New User Request!</strong><br />\r\n                <a class=\"alert-link\" [routerLink]=\"['/user-manage']\">{{notification.data}}</a>, request to join the system.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"card text-white bg-primary mb-3\" style=\"width: 20rem; max-height:30rem\">\r\n          <h3 class=\"card-header\">Create Group</h3>\r\n          <div class=\"card-body\">\r\n            <form (submit)=\"addGroup()\">\r\n              <div class=\"form-group\">\r\n                <label>Group Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"group_name\" name=\"group_name\" class=\"form-control\" required />\r\n              </div>\r\n              <fieldset class=\"form-group\">\r\n                <legend>Invite Members</legend>\r\n                <div class=\"form-check\" *ngFor=\"let client of users\">\r\n                  <div *ngIf=\"user._id !== client._id\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" name=\"client\" (change)=\"addClient(client, $event.target.checked)\">\r\n                      {{client.first_name}} {{client.last_name}}\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n              <div class=\"card-footer text-muted\">\r\n                <input type=\"submit\" class=\"btn btn-secondary btn-lg btn-block\" value=\"Add Group\" />\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <h1>Current Discussions</h1><br />\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-4\" *ngFor=\"let group of groups\">\r\n        <div class=\"card border-light mb-3\" style=\"width: 15rem;\">\r\n          <h3 class=\"card-header\">{{group.group_name}}</h3>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Admin :</h5>\r\n            <h6 class=\"card-subtitle text-muted\">{{group.admin.first_name}}</h6><br />\r\n            <h5 class=\"card-title\">Clients :</h5>\r\n            <div *ngFor=\"let client of group.client\">\r\n              <h6 class=\"card-subtitle text-muted\">{{client.first_name}}</h6><br />\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"joinChat(group)\" style=\"max-width: 25rem;\">Join Discussion</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, userService, chatService, router, flashMessage) {
        this.authService = authService;
        this.userService = userService;
        this.chatService = chatService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.client = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.userService.getUser()
            .subscribe(function (users) {
            return _this.users = users;
        });
        this.authService.getNotification().subscribe(function (notifications) {
            _this.notifications = notifications;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.getGroups();
    };
    DashboardComponent.prototype.joinChat = function (group) {
        var oldClient = false;
        for (var _i = 0, _a = group.client; _i < _a.length; _i++) {
            var nClient = _a[_i];
            if (this.user._id === nClient._id) {
                oldClient = true;
            }
        }
        if (this.user._id === group.admin._id) {
            oldClient = true;
        }
        if (oldClient === false) {
            this.authService.addClient(this.user, group._id)
                .subscribe(function (data) {
                console.log(data.msg);
            });
        }
        this.router.navigate(['chat/' + group._id]);
    };
    DashboardComponent.prototype.addGroup = function () {
        var _this = this;
        var newGroup = {
            group_name: this.group_name,
            client: this.client
        };
        this.authService.addGroup(newGroup)
            .subscribe(function (group) {
            _this.groups.push(group);
        });
        for (var _i = 0, _a = this.client; _i < _a.length; _i++) {
            var nClient = _a[_i];
            var newNotification = {
                userID: nClient._id,
                type: "group",
                data: { grpName: this.group_name, grpAdmin: this.user.first_name }
            };
            this.authService.addNotification(newNotification)
                .subscribe(function (data) {
                //console.log(data);
            });
        }
    };
    DashboardComponent.prototype.getGroups = function () {
        var _this = this;
        this.authService.getGroup().subscribe(function (groups) {
            _this.groups = groups;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.addClient = function (user, isChecked) {
        if (isChecked) {
            this.client.push(user);
        }
    };
    DashboardComponent.prototype.removeNotification = function (id) {
        this.authService.removeNotification(id).subscribe(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\"><b>Sign In</b></h1>\r\n<div class=\"jumbotron\" style=\"width:600px; margin-left:280px\">\r\n  <form class=\"form-signin\" (submit)=\"onLoginSubmit()\" style=\"width:200px; margin-left:170px\">\r\n    <fieldset class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"Username\"><i class=\"fa fa-address-card\"></i> Username</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n      </div><br />\r\n      <div class=\"form-group\">\r\n        <label for=\"Password\"><i class=\"fa fa-lock\"></i> Password</label>\r\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n      </div>\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n        </label>\r\n      </div><br />\r\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Login\" style=\"margin-left:50px\">\r\n    </fieldset>\r\n  </form>  \r\n  <div class=\"text-center\">\r\n    Don't have an account? <a class=\"alert-link\" [routerLink]=\"['/register']\">Sign Up</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user.id, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                if (data.user.id == "5ae5d3357549c24fe4372d3e") {
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.router.navigate(['dashboard']);
                }
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "/*Notification*/\r\n\r\n.notification-list {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.notification-list .noti-title {\r\n    border-radius: 0.25rem 0.25rem 0 0;\r\n    background-color: #64c5b1;\r\n    margin: -6px -1px 0px -1px;\r\n    width: auto;\r\n    padding: 12px 20px;\r\n  }\r\n\r\n.notification-list .noti-title h5 {\r\n      color: #ffffff;\r\n      margin: 0;\r\n    }\r\n\r\n.notification-list .noti-title .label {\r\n      float: right;\r\n    }\r\n\r\n.notification-list .noti-icon {\r\n    font-size: 22px;\r\n    padding: 0 12px;\r\n    vertical-align: middle;\r\n    color: rgba(49, 58, 70, 0.8);\r\n  }\r\n\r\n.notification-list .noti-icon-badge {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 14px;\r\n    right: 8px;\r\n  }\r\n\r\n.notification-list .notify-item {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n.notification-list .notify-item .notify-icon {\r\n      float: left;\r\n      height: 36px;\r\n      width: 36px;\r\n      line-height: 36px;\r\n      text-align: center;\r\n      margin-right: 10px;\r\n      border-radius: 50%;\r\n      color: #ffffff;\r\n    }\r\n\r\n.notification-list .notify-item .notify-icon img {\r\n        margin-top: 4px;\r\n      }\r\n\r\n.notification-list .notify-item .notify-details {\r\n      margin-bottom: 0;\r\n      overflow: hidden;\r\n      margin-left: 45px;\r\n      text-overflow: ellipsis;\r\n      white-space: nowrap;\r\n    }\r\n\r\n.notification-list .notify-item .notify-details b {\r\n        font-weight: 500;\r\n      }\r\n\r\n.notification-list .notify-item .notify-details small {\r\n        display: block;\r\n      }\r\n\r\n.notification-list .notify-item .notify-details span {\r\n        display: block;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n        font-size: 13px;\r\n      }\r\n\r\n.notification-list .notify-all {\r\n    border-radius: 0 0 0.25rem 0.25rem;\r\n    margin: 0 0 -5px 0;\r\n    background-color: #e2e2e2;\r\n  }\r\n\r\n.notification-list .profile-dropdown .notify-item {\r\n    padding: 4px 20px;\r\n  }\r\n\r\n.profile-dropdown {\r\n  width: 170px;\r\n}\r\n\r\n.profile-dropdown i {\r\n    font-size: 17px;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\r\n  }\r\n\r\n.profile-dropdown span {\r\n    vertical-align: middle;\r\n  }\r\n\r\n.nav-user {\r\n  padding: 0 12px !important;\r\n}\r\n\r\n.nav-user img {\r\n    height: 36px;\r\n    width: 36px;\r\n  }\r\n\r\n.header-title {\r\n  margin-bottom: 8px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.02em;\r\n  font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <img src=\"assets/images/logo_1.png\" style=\"height:4rem; width:auto;\"/>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/user-manage']\">User Detail </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2><b>{{user.first_name}} {{user.last_name}}</b></h2><br />\r\n  <div class=\"jumbotron\" style=\"min-height:400px;\">\r\n    <table class=\"table table-hover\" style=\"width:50%\">\r\n      <tr>\r\n        <th scope=\"row\">First name :</th>\r\n        <td>{{user.first_name}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"row\">Last name :</th>\r\n        <td>{{user.last_name}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"row\">Occupation :</th>\r\n        <td>{{user.occupation}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"row\">Phone :</th>\r\n        <td>{{user.phone}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"row\">Email :</th>\r\n        <td>{{user.email}}</td>\r\n      </tr>\r\n    </table>\r\n    <br />\r\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editDetailModal\">Edit Detail</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#changePwdModal\" style=\"margin-left:130px\">Change Password</button>\r\n  </div>\r\n\r\n  <div class=\"modal\" id=\"editDetailModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Edit detail</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form (submit)=\"editProfile()\" id=\"editProfile\">\r\n            <div class=\"form-group\">\r\n              <label>First Name</label>\r\n              <input type=\"text\" [(ngModel)]=\"first_name\" name=\"first_name\" class=\"form-control\" required />\r\n              <label>Last Name</label>\r\n              <input type=\"text\" [(ngModel)]=\"last_name\" name=\"last_name\" class=\"form-control\" required />\r\n              <label>Occupation Name</label>\r\n              <input type=\"text\" [(ngModel)]=\"occupation\" name=\"occupation\" class=\"form-control\" required />\r\n              <label>Phone</label>\r\n              <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" required />\r\n              <label>Email</label>\r\n              <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" required />\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <input type=\"reset\" class=\"btn btn-danger\" value=\"Reset\" />\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Change\" />\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal\" id=\"changePwdModal\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Change Password</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form (submit)=\"changePwd()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Your Password</label>\r\n              <input type=\"password\" [(ngModel)]=\"password\" name=\"old_password\" class=\"form-control\" required />\r\n              <label for=\"password\">New Password</label>\r\n              <input type=\"password\" [(ngModel)]=\"new_password\" name=\"new_password\" class=\"form-control\" required />\r\n              <label for=\"password\">Conform New Password</label>\r\n              <input type=\"password\" [(ngModel)]=\"conform_password\" name=\"conform_password\" class=\"form-control\" required />\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <input type=\"reset\" class=\"btn btn-danger\" value=\"Reset\" />\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Change\" />\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (user) {
            _this.user = user;
            _this.first_name = user.first_name;
            _this.last_name = user.last_name;
            _this.phone = user.phone;
            _this.occupation = user.occupation;
            _this.email = user.email;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        var newUser = {
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            occupation: this.occupation,
            email: this.email
        };
        this.authService.editProfile(newUser).subscribe(function (data) {
            _this.user = data.user;
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.changePwd = function () {
        var _this = this;
        var pwd = {
            password: this.password,
            new_password: this.new_password,
            conform_password: this.conform_password
        };
        if (pwd.new_password == pwd.conform_password) {
            this.authService.changePwd(pwd).subscribe(function (data) {
                _this.user = data.user;
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.flashMessage.show("New password is not match with the conform password", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['profile']);
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <fieldset class=\" col-md-4\" style=\"position:center\">\r\n    <div class=\"form-group\">\r\n      <label for=\"first_name\">First Name</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"last_name\">Last Name</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email_address\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"phone\">Phone Number</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"occupation\">Occupation</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"occupation\" name=\"occupation\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary mr-auto\" style=\"margin-left:50px\" value=\"Submit\" />\r\n    <input type=\"reset\" class=\"btn btn-danger\" style=\"margin-left:100px\" value=\"Reset\" />\r\n\r\n  </fieldset>\r\n  \r\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            occupation: this.occupation,
            email: this.email,
            username: this.username
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You request send to the CEO. Please wait for reply.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show('Something went wrong..', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
        //send notification to the Head
        var newNotification = {
            userID: "5aeec8a7ec9c300014700f29",
            type: "user",
            data: this.first_name + " " + this.last_name
        };
        this.authService.addNotification(newNotification)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //this.isDev = true; 
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/addUser', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /*
    getProfile() {
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type', 'application/json');
      return this.http.get('/api/profile', { headers: headers })
        .map(res => res.json());
    }
  
    storeUserData(token, user) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;
    }
  
    loadToken() {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    }
  
    loggedIn() {
      return tokenNotExpired('id_token');
    }
    */
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var id = this.loadId();
        return this.http.get('/api/profile/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editProfile = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var id = this.loadId();
        return this.http.put('/api/update/' + id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePwd = function (pwd) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var id = this.loadId();
        return this.http.put('/api/changePwd/' + id, pwd, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addNotification = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/addNotification', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeNotification = function (id) {
        return this.http.delete('/api/removeNotification/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getNotification = function () {
        var id = this.loadId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('/api/getNotification/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getGroup = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('/api/groups', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addGroup = function (newGroup) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var id = this.loadId();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/addGroup/' + id, newGroup, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addClient = function (user, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/addClient/' + id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCurrentGroup = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('/api/group/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, id, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.id = id;
        this.user = user;
    };
    AuthService.prototype.loadId = function () {
        var id = localStorage.getItem('id');
        this.id = id;
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        return id;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isAdmin = function () {
        return (this.id == "5aeec8a7ec9c300014700f29" && Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token'));
    };
    AuthService.prototype.isWorker = function () {
        return (this.id != "5aeec8a7ec9c300014700f29" && Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token'));
    };
    AuthService.prototype.logout = function () {
        this.id = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService() {
        var _this = this;
        this.url = '/';
        this.getMessages = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.socket.on('new-message', function (data) {
                    observer.next(data);
                });
            });
        };
        this.getImages = function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.socket.on('img-chunk', function (chunk) {
                    observer.next(chunk);
                });
            });
        };
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        //this.getImages();
    }
    ChatService.prototype.sendMessage = function (url, message, sender) {
        this.socket.emit('new-message', { url: url, message: message, sender: sender });
    };
    ChatService.prototype.sendImage = function (image) {
        this.socket.emit('img-chunk', image);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserRequest = function () {
        return this.http.get('/api/requests')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/adduser', newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('/api/user/' + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUserRequest = function (id) {
        return this.http.delete('/api/deleterequest/' + id)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.first_name == undefined || user.last_name == undefined || user.email == undefined || user.phone == undefined || user.occupation == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map