import { useRouter } from 'next/router'
import { Container } from '../src/components'

const Todo = () => {
  const router = useRouter()

  return <Container>{`todo id -> ${router.query?.id}`}</Container>
}

export default Todo
