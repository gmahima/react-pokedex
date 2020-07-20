import styled from 'styled-components'
import Head from 'next/head'
import tw from 'twin.macro'

const Container = styled.div`

display:grid;
grid-template-columns: 1.3fr 1.7fr 1.3fr 0.7fr;
grid-template-rows:  9rem 1fr 4rem;
grid-auto-flow: row;
column-gap: 1rem;
row-gap: 1rem;

${tw` sm:h-screen sm:overflow-hidden m-0 p-0`}

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