import linkIcon from '../assets/icons/link.svg'
import backIcon from '../assets/icons/back.svg'
import githubIcon from '../assets/icons/github.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import commentIcon from '../assets/icons/comment.svg'
import { Link } from 'react-router-dom'
import { PostDetailsData } from '../pages/PostDetails'
import { formatDateFromNow } from '../utils/format'

interface PostHeaderProps {
  details: PostDetailsData
}

export function PostHeader({ details }: PostHeaderProps) {
  return (
    <div className="-mt-24 flex w-[864px] gap-8 rounded-profile bg-base-profile px-10 py-8 text-base-title">
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex gap-2 font-bold uppercase text-base-blue"
          >
            <img src={backIcon} className="w-3 text-base-blue" alt="" />
            Voltar
          </Link>
          <a
            target="_blank"
            href={details.html_url}
            className="flex gap-2 font-bold uppercase text-base-blue"
            rel="noreferrer"
          >
            Ver no Github
            <img src={linkIcon} className="w-3 text-base-blue" alt="" />
          </a>
        </div>
        <h1 className="pt-5 text-2xl font-bold">{details.title}</h1>

        <div className="flex gap-6 pt-2">
          <div className="flex items-center gap-2">
            <img src={githubIcon} className="w-4 text-base-blue" alt="" />

            <div className="text-base-subtitle">{details.user.login}</div>
          </div>

          <div className="flex items-center gap-2">
            <img src={calendarIcon} className="w-4 text-base-blue" alt="" />

            <div className="text-base-subtitle">
              {formatDateFromNow(details.created_at)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={commentIcon} className="w-4 text-base-blue" alt="" />

            <div className="text-base-subtitle">
              {details.comments} comentários
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
