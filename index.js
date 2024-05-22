"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("./App"));
var react_1 = __importDefault(require("react"));
var container = document.getElementById('app');
var root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render(react_1.default.createElement(App_1.default, null));
