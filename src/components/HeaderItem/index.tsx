import Link from 'next/link'
import { Container, Title } from './styles'

function HeaderItem({ title, href = '/', Icon }: Props) {
  return (
    <Link href={href} passHref>
      <Container>
        <Icon />
        <Title>{title}</Title>
      </Container>
    </Link>
  )
}

type Props = {
  title: string
  href?: string
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}

export default HeaderItem
