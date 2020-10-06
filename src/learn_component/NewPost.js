import React from 'react';
import '../App.css'
import Block from './Block'
class NewPost extends React.Component {
  render(){
    return( 
      <div>
        <div id="newposts">
            <h3>BÀI VIẾT MỚI</h3>
            <div id="posts">
            <ul>
              <li>
                <img src={require('../images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
              <li>
                <img src={require('../images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
              <li>
                <img src={require('../images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
              <li>
                <img src={require('../images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
            </ul>
            </div>
          </div>
      </div>
    ) 
  }
}

export default NewPost;