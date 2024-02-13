import React from 'react'
import { Article } from '../../components';
import {cedar, iowcit, vdew, sheep, fam} from './imports';
import './blog.css';



const Blog = () => {
  return (
    <div className='pamc__blog section__padding' id='blog'>
      <div className='pamc__blog-heading'>
        <h1 className='gradient__text'>Whats Going On</h1>
        </div>
        <div className='pamc__blog-container'>
          <div className='pamc__blog-container_groupA'>
            <Article imgURL={fam} />
          </div>
          <div className='pamc__blog-container_groupB'>
          <Article imgURL={iowcit} />
          <Article imgURL={cedar} />
          <Article imgURL={sheep} />
          <Article imgURL={vdew} />
            </div>
        </div>
    </div>
  )
}

export default Blog