import { useEffect, useState } from 'react'
import { Posts, PostsData } from '../components/Posts'
import { Profile, UserData } from '../components/Profile'
import { Search } from '../components/Search'
import api from '../services/api'

export function Home() {
  const [userData, setUserData] = useState<UserData>()
  const [posts, setPosts] = useState<PostsData>()

  useEffect(() => {
    async function loadUserData() {
      const user = await api.get('/users/legeannd')
      setUserData(user.data)
    }

    loadUserData()
  }, [])

  useEffect(() => {
    async function loadPosts() {
      const posts = await api.get('/search/issues?q=repo:legeannd/github-blog')
      setPosts(posts.data)
    }

    loadPosts()
  }, [])
  return (
    <>
      <Profile user={userData} />
      <Search postsCount={posts?.total_count || 0} />
      {posts && <Posts posts={posts} />}
    </>
  )
}
