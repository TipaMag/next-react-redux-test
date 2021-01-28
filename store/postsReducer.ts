import axios from 'axios'
import { postsAPI } from '../externalApi/posts-api'
import { NewPostValuesType } from '../pages/post/new'
import { PostDetailType, PostType } from '../types/Posts-types'
import { BaseThunkType, InferActionsTypes } from './store'

const initialState = {
  posts: [] as PostType[],
  postDetail: {} as PostDetailType
}
type InitialStateType = typeof initialState

export default function reducer(state = initialState, action: PostsActionsTypes): InitialStateType {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: [...action.payload]
      }
    case 'SET_POST_DETAIL':
      return {
        ...state,
        postDetail: action.payload
      }
    default:
      return state
  }
}

export const postsActions = {
  setPosts: (posts) => ({
    type: 'SET_POSTS',
    payload: posts
  } as const),
  setPostDetail: (post) => ({
    type: 'SET_POST_DETAIL',
    payload: post
  } as const)
}

type PostsActionsTypes = InferActionsTypes<typeof postsActions>
type ThunkType = BaseThunkType<PostsActionsTypes>

export const getPosts = (): ThunkType => async (dispatch)  => {
  const data = await postsAPI.getPosts()
  dispatch(postsActions.setPosts(data))
}

export const getPostDetail = (postID: string): ThunkType => async (dispatch) => {
  const data = await postsAPI.getPostDetail(postID)

  dispatch(postsActions.setPostDetail(data))
}

export const addPost = (postData: NewPostValuesType): ThunkType => async (dispatch) => {
  const data = await postsAPI.addNewPost(postData)
  
  // dispatch(postsActions.setPostDetail(data))
}