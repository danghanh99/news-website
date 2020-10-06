import React from 'react';
import '../App.css'
class BLock extends React.Component {
  render(){
    console.log(this)
    return( 
        <div>
            <li>
              <img src={require('../images/tongthong.jpg')}></img> 
              <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
              <div id="author">by Dang Hanh</div>
              <div>Nhà Trắng công bố các bức ảnh cho thấy Trump ngồi làm việc trong 
              Trung tâm Quân y Quốc gia Walter Reed, nơi ông đang điều trị Covid-19</div>
              <button>READ MORE</button>
            </li>
        </div>
    )
  }
}

export default BLock;