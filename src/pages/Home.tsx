import { Posts } from '../components/Posts'
import { Profile } from '../components/Profile'
import { Search } from '../components/Search'

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <Posts />
    </>
  )
}
