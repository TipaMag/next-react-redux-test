import axios from 'axios'
import { NewPostValuesType } from '../pages/post/new'

export const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/'
})

export const postsAPI = {
    async getPosts() {
        try {
            const { data } =  await instance.get('posts')
            return data
        } catch (err) {
            console.log(err)
        }
    },
    async getPostDetail(id: string) {
        try {
            const { data } = await instance.get(`posts/${id}?_embed=comments`)
            return data
        } catch (err) {
            console.log(err)
        }
    },
    async addNewPost(post: NewPostValuesType) {
        try {
            const { data } = await instance.post(`posts`, post)
            return data
        } catch (err) {
            console.log(err)
        }
    }
}