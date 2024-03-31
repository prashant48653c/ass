import React from 'react'
import './sidebar.css'
const Tagbox:React.FC = () => {
  return (
    <>
    <h5>Trending tags</h5>
    <div className='tagbox' >
        <div className="tag">Tech</div>
        <div className="tag">Beauty</div>
        <div className="tag">Fashion</div>
        <div className="tag">Money</div>
        <div className="tag">AI</div>
        <div className="tag">Bitcoin</div>
        <div className="tag">React</div>


    </div>
    </>

  )
}

export default Tagbox