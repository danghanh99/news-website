import React from 'react';
import '../App.css'
class BLock extends React.Component {
  render(){
    console.log(this)
    return( 
        <div>
            <li className="plain-item clearfix">
              <div id="img-left" className="col-md-6">
                  {/* <img src={require('../naruto.jpeg')} width="100" height="50"></img> */}
              </div>
              <div className="col-md-6">
                  le dang hanh
              </div>
            </li>
        </div>
    )
  }
}

export default BLock;