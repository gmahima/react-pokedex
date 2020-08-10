import styled from 'styled-components'
import Head from 'next/head'
import tw from 'twin.macro'

const Container = styled.div`
${tw`flex flex-col`}
`

const Layout = ({children}) => (
    <Container>

            <Head>
            <title>Pokémon</title>
            </Head>
            
            {children}

        
    </Container>
)

export default Layout