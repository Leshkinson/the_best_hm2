import {Request, Response, Router} from "express";
import {HTTP_STATUSES} from "../http_statuses";
import {postsControl} from "../repositories/repository-posts";


export const postsRouter = Router({})

//-------------------GET---------------//
postsRouter.get('/', (req: Request, res: Response) => {
    res.status(HTTP_STATUSES.OK200).send(postsControl.getAllPosts())
})
postsRouter.get('/:id', (req: Request, res: Response) => {
    const findBlog = postsControl.getPostById(req.params.id)
    if (findBlog) {
        res.send(findBlog)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})
