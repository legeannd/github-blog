import { Post, PostCardProps } from './Post'

export interface PostsData {
  items: Array<PostCardProps>
  total_count: number
}
interface PostsProps {
  posts: PostsData
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className="grid w-[864px] grid-cols-2 gap-8 py-12">
      {posts.items.map((item) => (
        <Post data={item} key={item.number} />
      ))}
    </div>
  )
}
