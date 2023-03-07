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
        res.status(http_statuses_1.HTTP_STATUSES.OK200).send(findBlog);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
//-------------------POST---------------//
exports.postsRouter.post('/', (req, res) => {
    const newPostId = repository_posts_1.postsControl.createPost(req.body);
    if (newPostId) {
        res.status(http_statuses_1.HTTP_STATUSES.OK200).send(newPostId);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
//-------------------PUT---------------//
exports.postsRouter.post('/:id', (req, res) => {
    const isChangePost = repository_posts_1.postsControl.changePost(req.params.id, req.body);
    if (isChangePost) {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NO_CONTENT);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
//-------------------DELETE---------------//
exports.postsRouter.delete('/:id', (req, res) => {
    const isDeleted = repository_posts_1.postsControl.deletePost(req.params.id);
    if (isDeleted) {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NO_CONTENT);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
