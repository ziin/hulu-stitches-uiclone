import Image from 'next/image'
import HeaderItem from '../HeaderItem'
import {
  HomeIcon,
  BadgeCheckIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
} from '@heroicons/react/outline'
import { HeaderContainer, HeaderItems } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem title="HOME" Icon={HomeIcon} href="/" />
        <HeaderItem
          title="TRENDING"
          Icon={LightningBoltIcon}
          href="?genre=trending"
        />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </HeaderItems>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu logo"
      />
    </HeaderContainer>
  )
}

export default Header
