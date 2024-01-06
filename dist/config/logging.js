"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    level: 'info',
    name: 'app-logger',
    streams: [
        {
            level: 'info',
            stream: process.stdout,
        },
        {
            level: 'warn',
            stream: process.stderr,
        },
        {
            level: 'error',
            stream: process.stderr,
        },
        { level: 'fatal', stream: process.stderr },
    ],
};
