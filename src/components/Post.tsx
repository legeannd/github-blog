import { Link } from 'react-router-dom'
import { formatDateFromNow } from '../utils/format'
import { MarkdownHandler } from './MarkdownHandler'
export interface PostCardProps {
  created_at: string
  body: string
  title: string
  url: string
  number: number
}

interface PostProps {
  data: PostCardProps
}

export function Post({ data }: PostProps) {
  return (
    <Link to={`posts/${data.number}`}>
      <div className="h-60 cursor-pointer rounded-profile bg-base-post p-8">
        <div className="flex items-start gap-2">
          <span className="text-title w-auto text-xl text-base-title">
            {data.title}
          </span>

          <span className="text-body text-right text-sm text-base-span">
            {formatDateFromNow(data.created_at)}
          </span>
        </div>
        <div className="line-clamp-4 pt-5 text-base-text">
          <MarkdownHandler markdown={data.body} />
        </div>
      </div>
    </Link>
  )
}
