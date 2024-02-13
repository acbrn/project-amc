import React from 'react'
import './article.css';


const Article = ({imgUrl, description, title}) => {
  return (
    <div className='pamc__blog-container_article'>
      <div className='pamc__blog-container_article-image'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='pamc__blog-container_article-content'>
        <p>{description}</p>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Article