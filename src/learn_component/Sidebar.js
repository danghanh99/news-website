import React from 'react';
import '../App.css'
import NewPost from './NewPost'
import FormSignUp from './FormSignUp'
class Sidebar extends React.Component {
  render(){
    console.log(this)
    return( 
        <div className="sidebar">
          <h1>Sidebar</h1>
          <div className="form-sign-up">
            <FormSignUp></FormSignUp>
          </div>
          <div className="new-post">
            <NewPost></NewPost>
          </div>
        </div>
    )
  }
}

export default Sidebar;