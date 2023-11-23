import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
//   const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClicked, setIdFromButtonClicked] = useState(id)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
        console.log(res)
        setLoading(false)
        setError('')
        // setPosts(res.data)
        setPost(res.data)
    })
    .catch(err =>{
        console.log(err)
        setLoading(false)
        setError('Something went wrong!')
    })
  },[idFromButtonClicked, id])

  const handleClick = () => {
    setIdFromButtonClicked(id)
  }

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Post</button>
        {/* <div>{post.title}</div> */}
        <div>
          {
            loading ? 'loading' : post.title
          }
          {
            error ? error : null
          }
        </div>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title }</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching