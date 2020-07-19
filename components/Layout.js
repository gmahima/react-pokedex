import styled from 'styled-components'
import Head from 'next/head'
import tw from 'twin.macro'

const Container = styled.div`


`

const Layout = ({children}) => (
    <Container>

            <Head>
            <title>Pokémon</title>
            </Head>
            <div>{children}</div>

        
    </Container>
)

export default Layout