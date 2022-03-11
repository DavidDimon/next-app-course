import Link from 'next/link'

import { Container, Button } from '../src/components'

const Home = () => {
  return (
    <Container>
      <Link href={{ pathname: '/todo', query: { id: 1 } }}>
        <Button>{'test'}</Button>
      </Link>
    </Container>
  )
}

export default Home
