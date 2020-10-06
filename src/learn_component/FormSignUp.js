import React from 'react';
import '../App.css'
class FormSignUp extends React.Component {
  render(){
    return( 
        <div>
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
        </div>
    )
  }
}

export default FormSignUp;