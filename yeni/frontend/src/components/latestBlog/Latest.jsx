import React from 'react'
import Title from '../title/Title'
import "./Latest.scss"

const Latest = () => {
  return (
    <div className='container'>
<Title>
    <h3>Latest Blogs</h3>
</Title>
<div className="latest">
        <div className="row">
          <div className="col-lg-4">
            <div className="box-1 box">
             
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-2 box">
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-3 box">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest