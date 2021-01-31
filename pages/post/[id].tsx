import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Layout } from '../../components/Layout'
import { getPostDetail } from '../../store/postsReducer'
import { AppStateType, initializeStore } from '../../store/store'

import { CommentItem } from '../../components/Comment'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'

const CommentContainerUL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const PostContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-around;
    margin-top: 30px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 4px 3px 4px 1px rgba(0,0,0,0.42);
`
const PostHeader = styled.div`
    display: flex;
    align-items: center;
`
const PostImage = styled.img`
    max-width: 300px;
    margin-right: 20px;
`

export default function SinglePost(): JSX.Element {
    const post = useSelector((state: AppStateType) => state.posts.postDetail)

    return (
        <Layout title={post.title}>
            <Link href='/'><a>back to home page</a></Link>

            <PostContainer>
                <PostHeader>
                    <PostImage src='../post-image.png' alt='postImage' />
                    <h2>{post.title}</h2>
                </PostHeader>
                <p>{post.body}</p>
            </PostContainer>

            <p>Comments</p>

            <CommentContainerUL>
                {post.comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </CommentContainerUL>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const store = initializeStore()
    const { dispatch } = store

    const postID = query.id
    await dispatch(getPostDetail(postID as string))

    return {
        props: { initialReduxState: store.getState() }
    }
}