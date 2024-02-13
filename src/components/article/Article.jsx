import React from 'react'
import './article.css';


const Article = ({imgUrl}) => {
  return (
    <div className='pamc__blog-container_article'>
      <div className='pamc__blog-container_article-image'>
        <img src={imgUrl} alt='blog pic' />
      </div>
    </div>
  )
}

export default Article