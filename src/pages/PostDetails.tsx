import { useParams } from 'react-router-dom'
import { PostHeader } from '../components/PostHeader'

import { useEffect, useState } from 'react'
import api from '../services/api'
import { PostCardProps } from '../components/Post'
import { MarkdownHandler } from '../components/MarkdownHandler'

export interface PostDetailsData extends PostCardProps {
  comments: string
  html_url: string
  user: {
    login: string
  }
}

export function PostDetails() {
  const [postDetail, setPostDetail] = useState<PostDetailsData>()
  const { id } = useParams()

  useEffect(() => {
    async function loadPostDetails() {
      const { data } = await api.get(`repos/legeannd/github-blog/issues/${id}`)
      setPostDetail(data)
    }

    loadPostDetails()
  }, [id])

  return (
    <>
      {postDetail && (
        <>
          {' '}
          <PostHeader details={postDetail} />
          <div className="w-[864px] px-8 py-10 text-base-text">
            <MarkdownHandler markdown={postDetail.body} />
          </div>
        </>
      )}
    </>
  )
}
