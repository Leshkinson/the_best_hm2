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
    }
};
