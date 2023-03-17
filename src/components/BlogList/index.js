import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <ul className="blogList-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} eachItem={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
