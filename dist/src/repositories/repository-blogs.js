"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsControl = exports.arrBlogs = void 0;
exports.arrBlogs = [{
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
    }];
exports.blogsControl = {
    getAllBlogs() {
        return exports.arrBlogs;
    },
    getBlogById(id) {
        return exports.arrBlogs.find((it) => it.id.toString() === id);
    },
    createBlog(body) {
        const newBlog = {
            id: (+(new Date())).toString(),
            name: body.name,
            description: body.description,
            websiteUrl: body.websiteUrl
        };
        exports.arrBlogs.push(newBlog);
        return newBlog.id;
    },
    changeBlog(id, body) {
        const findBlog = exports.blogsControl.getBlogById(id);
        if (findBlog) {
            findBlog.name = body.name;
            findBlog.description = body.description;
            findBlog.websiteUrl = body.websiteUrl;
            return true;
        }
        return false;
    },
    deleteBlog(id) {
        const findBlog = exports.blogsControl.getBlogById(id);
        if (findBlog) {
            exports.arrBlogs = exports.arrBlogs.filter(el => el.id !== id);
            return true;
        }
        return false;
    }
};
