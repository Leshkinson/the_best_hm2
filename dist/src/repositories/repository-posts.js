"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsControl = exports.arrPosts = void 0;
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
    }
};
