import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppStateType, initializeStore } from '../store/store'
import { getPosts } from '../store/postsReducer'

import { Layout } from '../components/Layout'
import { Post } from '../components/Post'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

const PostsContainerUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const LinkButtonA = styled.a`
  display: inline-block;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: 4px 3px 4px 1px rgba(0,0,0,0.42);
  cursor: pointer;
`

export default function Home() {
  const posts = useSelector((state: AppStateType) => state.posts.posts)

  return (
    <Layout title='Home page'>
      <Link href={'post/new'}>
        <LinkButtonA>add new post</LinkButtonA>
      </Link>

      <PostsContainerUL>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostsContainerUL>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initializeStore()
  const { dispatch } = store
  await dispatch(getPosts())

  return {
    props: { initialReduxState: store.getState() }
  }
}