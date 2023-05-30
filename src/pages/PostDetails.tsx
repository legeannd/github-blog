import { useParams } from 'react-router-dom'
import { PostHeader } from '../components/PostHeader'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

export function PostDetails() {
  const { id } = useParams()
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `

  return (
    <>
      <PostHeader />

      <div className="w-[864px] px-8 py-10 text-base-text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </>
  )
}
