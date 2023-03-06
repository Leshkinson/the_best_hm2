"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_posts_1 = require("./src/routers/router-posts");
const router_blogs_1 = require("./src/routers/router-blogs");
const router_testing_1 = require("./src/routers/router-testing");
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
exports.app.use('/posts', router_posts_1.postsRouter);
exports.app.use('/blogs', router_blogs_1.blogsRouter);
exports.app.use('/testing', router_testing_1.testingRouter);
