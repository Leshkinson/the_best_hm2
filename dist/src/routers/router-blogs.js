"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const http_statuses_1 = require("../http_statuses");
const repository_blogs_1 = require("../repositories/repository-blogs");
const validators_1 = require("../validator/validators");
const input_validation_middleware_1 = require("../middleware/input-validation-middleware");
const authorization_guard_1 = require("../middleware/authorization-guard");
exports.blogsRouter = (0, express_1.Router)({});
//-------------------GET---------------//
exports.blogsRouter.get('/', (req, res) => {
    res.status(http_statuses_1.HTTP_STATUSES.OK200).send(repository_blogs_1.blogsControl.getAllBlogs());
});
exports.blogsRouter.get('/:id', (req, res) => {
    const findBlog = repository_blogs_1.blogsControl.getBlogById(req.params.id);
    if (findBlog) {
        res.status(http_statuses_1.HTTP_STATUSES.OK200).send(findBlog);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
//-------------------POST---------------//
exports.blogsRouter.post('/', authorization_guard_1.authorizationGuard, validators_1.blogValidations, input_validation_middleware_1.inputValidationMiddleware, (req, res) => {
    res.status(http_statuses_1.HTTP_STATUSES.OK200).send(repository_blogs_1.blogsControl.createBlog(req.body));
});
//-------------------PUT---------------//
exports.blogsRouter.put('/:id', authorization_guard_1.authorizationGuard, validators_1.blogValidations, input_validation_middleware_1.inputValidationMiddleware, (req, res) => {
    const isChangeBlog = repository_blogs_1.blogsControl.changeBlog(req.params.id, req.body);
    if (isChangeBlog)
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NO_CONTENT);
    res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
});
//-------------------DELETE---------------//
exports.blogsRouter.delete('/:id', (req, res) => {
    const isDeleted = repository_blogs_1.blogsControl.deleteBlog(req.params.id);
    if (isDeleted) {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NO_CONTENT);
    }
    else {
        res.sendStatus(http_statuses_1.HTTP_STATUSES.NOT_FOUND);
    }
});
