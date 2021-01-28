import { Layout } from "../../components/Layout";
import styled from 'styled-components'
import { Formik, Field, Form } from 'formik';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/postsReducer";


const StyledForm = styled(Form)`
    display: flex;
    flex-flow: column;
    margin-top: 20px;
`
const StyleField = styled(Field)`
    padding: 10px 20px;
    margin-bottom: 20px;
    resize: none;
`
const StyledButton = styled.button`
    width: 150px;
    padding: 10px;
    cursor: pointer;
`

export interface NewPostValuesType {
    title: string;
    body: string;
}

export default function NewPost() {
    const dispatch = useDispatch()

    return (
        <Layout>
            <Link href='/'><a>back to home page</a></Link>

            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
                onSubmit={(values: NewPostValuesType) => {
                    dispatch(addPost(values))
                    alert('post has ben added')
                }}
            >
                <StyledForm>
                    <StyleField id="title" name="title" placeholder="Post title" />
                    <StyleField id="body" name="body" placeholder="Post text" component="textarea" rows="10"/>
                    <StyledButton type="submit">add</StyledButton>
                </StyledForm>
            </Formik>
        </Layout>
    )
}