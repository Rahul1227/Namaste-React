import React from 'react';
class UserClass extends React.Component{

    //receiving the props from the parent class
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='user'>
                <h3>Name: {this.props.name}</h3>
                <h3>Location: NPJ</h3>
                <h4>Contact: rahulydv1227@gmail.com</h4>
            </div>
        )
    }
}


export default UserClass