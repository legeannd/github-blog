import coverImg from './assets/cover.png'
import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

function App() {
  return (
    <main className="flex h-full w-full flex-col items-center overflow-x-hidden bg-base-background">
      <div className="max-w-[1444px]">
        <img src={coverImg} alt="" className="bg-cover" />
      </div>

      <Profile />
      <Search />
      <Posts />
    </main>
  )
}

export default App
