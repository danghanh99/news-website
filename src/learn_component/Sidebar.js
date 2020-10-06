import React from 'react';
import '../App.css'
import NewPost from './NewPost'
import FormSignUp from './FormSignUp'
class Sidebar extends React.Component {
  render(){
    console.log(this)
    return( 
        <div>
          <div id="sidebar">
            <FormSignUp></FormSignUp>
            <NewPost></NewPost>
        </div>
        </div>
    )
  }
}

export default Sidebar;