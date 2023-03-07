import request from 'supertest'
import {app} from "../setting";
import {HTTP_STATUSES} from "../src/http_statuses";
import {postsControl} from "../src/repositories/repository-posts";

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
            .get('/posts')
            .expect(HTTP_STATUSES.OK200, [...postsControl.getAllPosts()])
    })


    //
    // it('PUT, trying to change video with wrong id', async () => {
    //     await request(app)
    //         .put('/videos' + 111)
    //         .send(testDataForPut)
    //         .expect(HTTP_STATUSES.NOT_FOUND)
    // })
    //
    // it('PUT, trying to change video with not valid title', async () => {
    //     await request(app)
    //         .put('/videos/' + 4)
    //         .send({...testDataForPut, title: 213})
    //         .expect(HTTP_STATUSES.BAD_REQUEST_400, {
    //             errorsMessages:
    //                 [{
    //                     message: ERRORS.InvalidDatType,
    //                     field: "title"
    //                 }]
    //         })
    // })
    //
    // it('PUT, trying to change video with empty availableResolutions', async () => {
    //     await request(app)
    //         .put('/videos/' + 4)
    //         .send({...testDataForPut, availableResolutions: []})
    //         .expect(HTTP_STATUSES.BAD_REQUEST_400, {
    //             errorsMessages: [{
    //                 message: ERRORS.EmptyArray,
    //                 field: "availableResolutions"
    //             }]
    //         })
    // })
    //
    // it('PUT, successful video change', async () => {
    //     await request(app)
    //         .put('/videos/' + 4)
    //         .send(testDataForPut)
    //         .expect(HTTP_STATUSES.NO_CONTENT)
    //
    //     expect(controlData.getAllVideos().filter(el => el.id === 4)[0].title).toBe("Karl Marx")
    //
    // })
    //
    it('DELETE, trying remove post with wrong id', async () => {
        const arrLength = postsControl.getAllPosts().length
        await request(app)
            .delete('/posts/' + 111)
            .send(testNewPost)
            .expect(HTTP_STATUSES.NOT_FOUND)

        await request(app)
            .get('/posts')
        expect(arrLength).toBe(arrLength)
    })

    it('DELETE, successful remove posts', async () => {
        await request(app)
            .delete('/posts/' + 1)
            .send(testNewPost)
            .expect(HTTP_STATUSES.NO_CONTENT)
    })
})