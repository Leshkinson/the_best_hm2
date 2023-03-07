import {Request, Response, Router} from "express";
import {HTTP_STATUSES} from "../http_statuses";
import {blogsControl} from "../repositories/repository-blogs";
import {blogValidations} from "../validator/validators";
import {inputValidationMiddleware} from "../middleware/input-validation-middleware";

export const blogsRouter = Router({})

//-------------------GET---------------//
blogsRouter.get('/', (req: Request, res: Response) => {
    res.status(HTTP_STATUSES.OK200).send(blogsControl.getAllBlogs())
})
blogsRouter.get('/:id', (req: Request, res: Response) => {
    const findBlog = blogsControl.getBlogById(req.params.id)
    if (findBlog) {
        res.status(HTTP_STATUSES.OK200).send(findBlog)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})
//-------------------POST---------------//
blogsRouter.post('/',blogValidations, inputValidationMiddleware,(req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK200).send(blogsControl.createBlog(req.body))
})
//-------------------PUT---------------//
blogsRouter.put('/:id',blogValidations, inputValidationMiddleware,(req: Request, res: Response) => {
    const isChangeBlog = blogsControl.changeBlog(req.params.id, req.body)
    if(isChangeBlog)
        res.sendStatus(HTTP_STATUSES.NO_CONTENT)

    res.sendStatus(HTTP_STATUSES.NOT_FOUND)

})
//-------------------DELETE---------------//
blogsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = blogsControl.deleteBlog(req.params.id)
    if (isDeleted) {
        res.sendStatus(HTTP_STATUSES.NO_CONTENT)
    } else {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND)
    }
})