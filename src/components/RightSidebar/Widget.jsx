import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/Comment-alt.jpeg'
import pen from '../../assests/Pen.jpeg'
import blacklogo from '../../assests/blacklogo.jpeg'


const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Observability is the key to the future of software (and your DevOps carrer)</p>
            </div>   
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>           
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Help us identify new roles for community members</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Navigation and UI research starting soon</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="blacklogo" width='18' />
                <p>Temporary policy: ChatGPT is banned</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Why was this same spam flag declined, yet the questions marked as spam?</p>
            </div>  
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course of action when a user has enough rep to ...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Is a link to "How to ask" help page a useful comment</p>
            </div>
        </div>
    </div>
  )
}

export default Widget