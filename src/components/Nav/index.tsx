import { useRouter } from 'next/router'
import requests from '@utils/requests'
import { ScrollContainer, Label, FadeBlock } from './styles'

function Nav() {
  const router = useRouter()
  return (
    <nav style={{ position: 'relative' }}>
      <ScrollContainer>
        {Object.entries(requests).map(([key, { title }]) => (
          <Label key={key} onClick={() => router.push(`/?genre=${key}`)}>
            {title}
          </Label>
        ))}
      </ScrollContainer>
      <FadeBlock />
    </nav>
  )
}

export default Nav
