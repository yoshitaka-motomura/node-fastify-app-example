"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (request, reply) => {
    //reply.header('Content-Type', 'application/json').code(200)
    return JSON.stringify({ ping: 'pong' });
};
