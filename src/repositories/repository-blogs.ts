import {BlogType} from "../types";

export const arrBlogs:BlogType[] = [{
    id: "1",
    name: "Andrey",
    description: "just men",
    websiteUrl: "https://milanac.ru/"
},
    {
        id: "2",
        name: "Anton",
        description: "super men",
        websiteUrl: "https://milanac.ru/"
    },
    {
        id: "3",
        name: "Aleksandr",
        description: "bad men",
        websiteUrl: "https://milanac.ru/"
    }]


export const blogsControl = {
    getAllBlogs(){
        return arrBlogs
    },
    getBlogById(id:string){
        return arrBlogs.find((it) => it.id.toString() === id)
    }

}