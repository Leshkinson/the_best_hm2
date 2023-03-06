"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const http_statuses_1 = require("../http_statuses");
const repository_posts_1 = require("../repositories/repository-posts");
exports.postsRouter = (0, express_1.Router)({});
//-------------------GET---------------//
exports.postsRouter.get('/', (req, res) => {
    res.status(http_statuses_1.HTTP_STATUSES.OK200).send(repository_posts_1.postsControl.getAllPosts());
});
exports.postsRouter.get('/:id', (req, res) => {
    const findBlog = repository_posts_1.postsControl.getPostById(req.params.id);
    if (findBlog) {
        res.send(findBlog);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
