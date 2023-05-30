import { Outlet } from 'react-router-dom'
import coverImg from '../assets/cover.png'

export function Root() {
  return (
    <main className="flex h-full w-full flex-col items-center overflow-x-hidden">
      <div className="max-w-[1444px]">
        <img src={coverImg} alt="" className="bg-cover" />
      </div>

      <Outlet />
    </main>
  )
}
