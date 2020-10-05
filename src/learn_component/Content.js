import React from 'react';
import '../App.css'
import Block from './Block'
class Content extends React.Component {
  render(){
    return( 
      <div>
        <div className="content-title">
            <h2>SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO </h2>
        </div>
        <div id="post" >
            <ul>
                <Block>Block</Block>
                <Block>Block</Block>
                <Block>Block</Block>
                <Block>Block</Block>
                <Block>Block</Block>
                <Block>Block</Block>
                <Block>Block</Block>
            </ul>
        </div>
      </div>
    )
  }
}

export default Content;

