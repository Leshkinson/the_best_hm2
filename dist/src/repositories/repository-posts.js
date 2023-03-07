"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsControl = exports.arrPosts = void 0;
const repository_blogs_1 = require("./repository-blogs");
exports.arrPosts = [{
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
    }];
exports.postsControl = {
    getAllPosts() {
        return exports.arrPosts;
    },
    getPostById(id) {
        return exports.arrPosts.find((it) => it.id.toString() === id);
    },
    createPost(body) {
        const findBlog = repository_blogs_1.blogsControl.getBlogById(body.blogId);
        if (findBlog) {
            const newPost = {
                id: (+(new Date())).toString(),
                title: body.title,
                shortDescription: body.shortDescription,
                content: body.content,
                blogId: body.blogId,
                blogName: findBlog.name
            };
            exports.arrPosts.push(newPost);
            return newPost.id;
        }
        else {
            return null;
        }
    },
    changePost(id, body) {
        const findPost = exports.postsControl.getPostById(id);
        const findBlog = repository_blogs_1.blogsControl.getBlogById(body.blogId);
        if (findPost && findBlog) {
            findPost.blogId = body.blogId;
            findPost.content = body.content;
            findPost.title = body.title;
            findPost.shortDescription = body.shortDescription;
            findPost.blogName = findBlog.name;
            return true;
        }
        else {
            return false;
        }
    },
    deletePost(id) {
        const findPost = exports.postsControl.getPostById(id);
        if (findPost) {
            exports.arrPosts = exports.arrPosts.filter(el => el.id !== id);
            return true;
        }
        return false;
    }
};
