import {validationResult} from "express-validator";
import {NextFunction,  Request, Response} from "express";

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    req.headers.authorization;
    console.log('Prive Oleg')
    if(!errors.isEmpty()){
         res.status(400).send({errors: errors.array()})
       return
    }
    console.log('Buy Oleg 22')
        next()
}