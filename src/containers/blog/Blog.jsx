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
            <Article imgUrl={fam} description="Gaming Controller" title='It is always fun to play Xbox, even relaxing.'/>
          </div>
            <div className='pamc__blog-container_groupB'>
              <Article imgUrl={iowcit} description='Artificial Intelligence' title='The wonders and possibilities of the AI market'/>
              <Article imgUrl={cedar} description='Seattle' title='This is one of my favorite cities to visit'/>
              <Article imgUrl={sheep} description='IcePhenyx' title='My gamer tag on most devices, and this is the logo I came up with'/>
              <Article imgUrl={vdew} description='Space' title='An AI generated picture, with the idea of wonders of space'/>
            </div>
        </div>
    </div>
  )
}

export default Blog