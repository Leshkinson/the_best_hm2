import {PostType} from "../types";


export const arrPosts: PostType[] = [ {
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
    }

}