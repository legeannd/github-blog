import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
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
  dayjs.extend(relativeTime)
  dayjs.locale('pt-br')

  function formatDate(date: string) {
    return dayjs(date).fromNow()
  }

  return (
    <Link to={`posts/${data.number}`}>
      <div className="h-60 cursor-pointer rounded-profile bg-base-post p-8">
        <div className="flex items-start gap-2">
          <span className="text-title w-auto text-xl text-base-title">
            {data.title}
          </span>

          <span className="text-body text-right text-sm text-base-span">
            {formatDate(data.created_at)}
          </span>
        </div>
        <div className="line-clamp-4 pt-5 text-base-text">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.body}</ReactMarkdown>
        </div>
      </div>
    </Link>
  )
}
