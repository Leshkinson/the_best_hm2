import {BlogType} from "../types";

export let arrBlogs: BlogType[] = [{
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
    getAllBlogs() {
        return arrBlogs
    },
    getBlogById(id: string) {
        return arrBlogs.find((it) => it.id.toString() === id)
    },
    createBlog(body: BlogType) {
        const newBlog = {
            id: (+(new Date())).toString(),
            name: body.name,
            description: body.description,
            websiteUrl: body.websiteUrl
        }
        arrBlogs.push(newBlog)
        return newBlog.id
    },
    changeBlog(id: string, body: BlogType) {
        const findBlog = blogsControl.getBlogById(id)
        if (findBlog) {
            findBlog.name = body.name
            findBlog.description = body.description
            findBlog.websiteUrl = body.websiteUrl

            return true;
        }
        return false;
    },
    deleteBlog(id: string) {
        const findBlog = blogsControl.getBlogById(id)
        if (findBlog) {
            arrBlogs = arrBlogs.filter(el => el.id !== id)
            return true
        }
        return false
    },
    deleteAllBlogs() {
        arrBlogs = []
    }
}