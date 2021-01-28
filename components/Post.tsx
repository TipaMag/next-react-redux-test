import styled from 'styled-components'
import Link from 'next/link'
import { PostType } from '../types/Posts-types'

const PostItemLI = styled.li`
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 4px 3px 4px 1px rgba(0,0,0,0.42);
`
const PostImage = styled.img`
    width: 200px;
    margin-right: 20px;
`
const PostBody = styled.div`
    display: flex;
    flex-flow: column;
`

export const Post = ({ post }: {post: PostType}) => {
    return (
        <PostItemLI>
            <PostImage src='post-image.png' alt='postImage' />
            <PostBody>
                <Link href={`/post/${post.id}`}>
                    <a style={{fontSize: '25px'}}>{post.title}</a>
                </Link>
                <p>{post.body}</p>
            </PostBody>
        </PostItemLI>
    )
}