import { Post } from './Post'

export function Posts() {
  return (
    <div className="grid w-[864px] grid-cols-2 gap-8 py-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
