import React from 'react';
import './App.css'
class Hello extends React.Component {
  render(){
    console.log(this)
    return( 
      <h1 className="letter">
        hi {this.props.name}
        <ShowName {...this.props}/>
      </h1>
      )
  }
}

function ShowName(props){
    return <>Name is{props.firstName} {props.lastName} </>
  }

export default Hello;