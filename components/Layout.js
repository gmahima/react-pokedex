import styled from 'styled-components'
import Head from 'next/head'
import tw from 'twin.macro'

const Container = styled.div`


${tw`flex flex-col`}

`
const Top = styled("div")`

${tw`bg-yellow-300 w-full h-32`}
`
const Layout = ({children}) => (
    <Container>

            <Head>
            <title>Pokémon</title>
            </Head>
            <Top />
            {children}

        
    </Container>
)

export default Layout