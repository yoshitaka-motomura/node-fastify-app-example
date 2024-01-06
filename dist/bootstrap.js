"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const logging_1 = __importDefault(require("./config/logging"));
const path = __importStar(require("path"));
const autoload_1 = __importDefault(require("@fastify/autoload"));
// Create Fastify instance
const server = (0, fastify_1.default)({
    logger: process.env.NODE_ENV !== 'test' ? logging_1.default : false,
});
exports.server = server;
// Autoload all routes
server.register(autoload_1.default, {
    dir: path.join(__dirname, 'routes'),
    dirNameRoutePrefix: true,
});
// Default Response Content-type to application/json
server.addHook('preHandler', (request, reply, done) => {
    reply.header('Content-Type', 'application/json').code(200);
    done();
});
// Define App Function that
const app = async () => {
    try {
        await server.listen({ port: 3000, host: '0.0.0.0' });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.app = app;
