import React from 'react';
import '../App.css'
import Block from './Block'
class Content extends React.Component {
  render(){
    return( 
      <div>
        <h2>
            SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO
          </h2> 
        <div id="content">
          <ul>
            <Block></Block>
            <Block></Block>
            <Block></Block>
            <Block></Block>
            <Block></Block>
          </ul>
        </div>
      </div>
    )
  }
}

export default Content;

