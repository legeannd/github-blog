import { Post } from './Post'

export function Posts() {
  return (
    <div className="grid w-[864px] grid-cols-2 gap-8 py-12">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Post id={index} key={index} />
        ))}
    </div>
  )
}
