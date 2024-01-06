"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pingController_1 = __importDefault(require("../../controllers/pingController"));
exports.default = async (server) => {
    server.get('/ping', pingController_1.default);
};
