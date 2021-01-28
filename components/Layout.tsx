import Head from 'next/head'
import styled from 'styled-components'

const LayoutContainer = styled.div`
    max-width: 960px;
    padding: 0 10px;
    margin: 50px auto;
`

export const Layout = ({ children, title = 'Next App' }: { children: React.ReactNode, title?: string }) => {
    return (
        <LayoutContainer>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next,js,react,redux" />
                <meta name="description" content="this is next-react-redux test task" />
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Head>

            <main>{children}</main>
        </LayoutContainer>
    )
}

