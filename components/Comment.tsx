import styled from 'styled-components'
import { CommentType } from '../types/Posts-types'

const CommentBodyLI = styled.li`
    padding: 5px 15px;
    margin-bottom: 10px;
    box-shadow: 4px 3px 4px 1px rgba(0,0,0,0.42);
`

export const CommentItem = ({ comment }: {comment: CommentType}) => {
    return (
        <CommentBodyLI>
            <p>{comment.body}</p>
        </CommentBodyLI>
    )
}