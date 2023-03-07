import {Request, Response, Router} from "express";
import {HTTP_STATUSES} from "../http_statuses";
import {postsControl} from "../repositories/repository-posts";
import {blogValidations, postValidations} from "../validator/validators";
import {inputValidationMiddleware} from "../middleware/input-validation-middleware";


export const postsRouter = Router({})

//-------------------GET---------------//
postsRouter.get('/', (req: Request, res: Response) => {
    res.status(HTTP_STATUSES.OK200).send(postsControl.getAllPosts())
})
postsRouter.get('/:id', (req: Request, res: Response) => {
    const findBlog = postsControl.getPostById(req.params.id)
    if (findBlog) {
        res.status(HTTP_STATUSES.OK200).send(findBlog)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})
//-------------------POST---------------//
postsRouter.post('/', postValidations, inputValidationMiddleware, (req: Request, res: Response) => {
    const newPostId = postsControl.createPost(req.body)
    if (newPostId) {
        res.status(HTTP_STATUSES.OK200).send(newPostId)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})
//-------------------PUT---------------//
postsRouter.post('/:id',  (req: Request, res: Response) => {
    const isChangePost = postsControl.changePost(req.params.id, req.body)
    if (isChangePost) {
        res.sendStatus(HTTP_STATUSES.NO_CONTENT)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})
//-------------------DELETE---------------//
postsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = postsControl.deletePost(req.params.id)
    if (isDeleted) {
        res.sendStatus(HTTP_STATUSES.NO_CONTENT)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})
