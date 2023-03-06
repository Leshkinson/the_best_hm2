"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const http_statuses_1 = require("../http_statuses");
const repository_blogs_1 = require("../repositories/repository-blogs");
exports.blogsRouter = (0, express_1.Router)({});
//-------------------GET---------------//
exports.blogsRouter.get('/', (req, res) => {
    res.status(http_statuses_1.HTTP_STATUSES.OK200).send(repository_blogs_1.blogsControl.getAllBlogs());
});
exports.blogsRouter.get('/:id', (req, res) => {
    const findBlog = repository_blogs_1.blogsControl.getBlogById(req.params.id);
    if (findBlog) {
        res.send(findBlog);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
