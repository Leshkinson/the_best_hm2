import {PostType} from "../types";
import {blogsControl} from "./repository-blogs";


export let arrPosts: PostType[] = [ {
    id: "1",
    title: "Super title",
    shortDescription: "bad men",
    content: "little",
    blogId: "3",
    blogName: "Aleksandr"
},
    {
        id: "2",
        title: "Worse title",
        shortDescription: "super men",
        content: "long",
        blogId: "2",
        blogName: "Anton"
    },
    {
        id: "3",
        title: "just title",
        shortDescription: "just men",
        content: "just more",
        blogId: "1",
        blogName: "Andrey"
    }]

export const postsControl = {
    getAllPosts(){
        return arrPosts
    },
    getPostById(id:string){
        return arrPosts.find((it) => it.id.toString() === id)
    },
    createPost(body: PostType){
        const findBlog = blogsControl.getBlogById(body.blogId)
        if(findBlog){
            const newPost = {
                id: (+(new Date())).toString(),
                title: body.title,
                shortDescription:body.shortDescription,
                content: body.content,
                blogId: body.blogId,
                blogName: findBlog.name
            }
            arrPosts.push(newPost)
            return newPost.id
        } else {
            return null
        }
    },
    changePost(id: string, body:PostType){
        const findPost = postsControl.getPostById(id)
        const findBlog = blogsControl.getBlogById(body.blogId)
        if(findPost && findBlog){
            findPost.blogId = body.blogId
            findPost.content = body.content
            findPost.title = body.title
            findPost.shortDescription = body.shortDescription
            findPost.blogName = findBlog.name

            return true
        } else{
            return  false
        }

    },
    deletePost(id:string){
        const findPost = postsControl.getPostById(id)
        if(findPost){
            arrPosts = arrPosts.filter(el=> el.id !== id)
            return  true
        }
        return false
    }

}