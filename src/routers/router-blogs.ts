import {Request, Response, Router} from "express";
import {HTTP_STATUSES} from "../http_statuses";
import {blogsControl} from "../repositories/repository-blogs";

export const blogsRouter = Router({})

//-------------------GET---------------//
blogsRouter.get('/', (req: Request, res: Response) => {
    res.status(HTTP_STATUSES.OK200).send(blogsControl.getAllBlogs())
})
blogsRouter.get('/:id', (req: Request, res: Response) => {
    const findBlog = blogsControl.getBlogById(req.params.id)
    if (findBlog) {
        res.send(findBlog)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})