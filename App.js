"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./pages/Home"));
var About_1 = __importDefault(require("./pages/About"));
var Header_1 = __importDefault(require("./components/Header"));
var Footer_1 = __importDefault(require("./components/Footer"));
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", Component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/about", Component: About_1.default })),
            react_1.default.createElement(Footer_1.default, null))));
};
exports.default = App;
