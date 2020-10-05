import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello'
import Content from './learn_component/Content'
import Sidebar from './learn_component/Sidebar'
function App() {

  // let firstName = "dang";
  // let lastName = "hanh";
  // let pr =  {firstName,lastName};
  return (
    <div className="App">
      {/* <Hello name="pain" {...pr}/> */}
      <div id="main">
         <h2>
            SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO
          </h2> 
        <div id="content">
          <ul>
            {/* the li */}
            <li>
              <img src={require('./images/tongthong.jpg')}></img> 
              <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
              <div id="author">by Dang Hanh</div>
              <div>Nhà Trắng công bố các bức ảnh cho thấy Trump ngồi làm việc trong 
              Trung tâm Quân y Quốc gia Walter Reed, nơi ông đang điều trị Covid-19</div>
              <button>READ MORE</button>
            </li>
            {/* the li */}
            <li>
              <img src={require('./images/tongthong.jpg')}></img> 
              <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
              <div id="author">by Dang Hanh</div>
              <div>Nhà Trắng công bố các bức ảnh cho thấy Trump ngồi làm việc trong 
              Trung tâm Quân y Quốc gia Walter Reed, nơi ông đang điều trị Covid-19</div>
              <button>READ MORE</button>
            </li>
            {/* the li */}
            <li>
              <img src={require('./images/tongthong.jpg')}></img> 
              <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
              <div id="author">by Dang Hanh</div>
              <div>Nhà Trắng công bố các bức ảnh cho thấy Trump ngồi làm việc trong 
              Trung tâm Quân y Quốc gia Walter Reed, nơi ông đang điều trị Covid-19</div>
              <button>READ MORE</button>
            </li>
          </ul>
        </div>
        <div id="sidebar">
          <div id="signupform">
            <h2>
              <p>ĐĂNG KÝ NHẬN BÀI</p>
              <p>VIẾT MỚI</p>
            </h2>
            <p id="reivew">
              Công nghệ đang thay đổi nhanh chóng, hãy cùng vươn xa thế giới với những bài viết chất lượng
              từ Fullstack Station bạn nhé.
            </p>
            <div>
              <input type="text" id="fname" name="fname" placeholder="TÊN CỦA BẠN"/><br />
              <input type="text" id="fname" name="fname" placeholder="EMAIL CỦA BẠN"/><br />
            </div>
            <input type="checkbox"></input>
            I correct to my submitted data being collected in this form*<br />
            <button>Đăng Ký</button><br />
            Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không spam vì mình cũng rất ghét:]
          </div>
          <div id="newposts">
            <h3>BÀI VIẾT MỚI</h3>
            <div id="posts">
            <ul>
              <li>
                <img src={require('./images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
              <li>
                <img src={require('./images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
              <li>
                <img src={require('./images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
              <li>
                <img src={require('./images/tongthong.jpg')}></img> 
                <h2>Nhà Trắng đăng ảnh Trump làm việc trong bệnh viện</h2>
                  <div id="tacgia">by dang hanh</div>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Letter(props){
//   let style = {
//     float: "left",
//     backgroundImage: "url(" + "naruto.jpeg" + ")",
//   }

//   // let style={{ backgroundImage: `url(${require("./naruto.jpeg")})` }}
//   return <div style={style}>{props.text}</div>
// }

export default App;


