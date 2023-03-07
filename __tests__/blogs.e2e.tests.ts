import request from 'supertest'
import {app} from "../setting";
import {HTTP_STATUSES} from "../src/http_statuses";
import {postsControl} from "../src/repositories/repository-posts";
import {blogsControl} from "../src/repositories/repository-blogs";

const testDataForPut = {
    "title": 'Karl Marx',
    "author": "Dia",
    "availableResolutions": ["P2160"],
    "canBeDownloaded": true,
    "minAgeRestriction": 17,
    "publicationDate": "2023-03-02T10:43:11.595Z"
}

const testNewPost = {
    "title": "new post",
    "shortDescription": "new post",
    "content": "new post",
    "blogId": "1"
}

describe('/videos', () => {

    beforeAll(async () => {
        await request(app).delete('/__test__/data')
    })

    it('GET, should return posts[]', async () => {
        await request(app)
            .get('/blogs')
            .expect(HTTP_STATUSES.OK200, [...blogsControl.getAllBlogs()])
    })

    it('DELETE, trying remove blogs with wrong id', async () => {
        const arrLength = postsControl.getAllPosts().length
        await request(app)
            .delete('/blogs/' + 111)
            .send(testNewPost)
            .expect(HTTP_STATUSES.NOT_FOUND)

        await request(app)
            .get('/blogs')
        expect(arrLength).toBe(arrLength)
    })

    it('DELETE, successful remove blogs', async () => {
        await request(app)
            .delete('/blogs/' + 1)
            .send(testNewPost)
            .expect(HTTP_STATUSES.NO_CONTENT)
    })
})