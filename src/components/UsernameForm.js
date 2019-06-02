import React, { Component } from 'react'

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }

 onSubmit(e) {
   e.preventDefault()
   this.props.onSubmit(this.state.username)
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {

    return (
      <div style={{width:'100%', height:'100vh'}}>
      <h1 className=""style={{ color: '#659999',fontFamily: 'Baloo Bhai',font:'cursive', fontSize:'70px' }}>SAFEHAVEN</h1>
      <h5 className="float-right" style={{ color: '#f4791f',fontFamily: 'Baloo Bhai', fontSize:'25px'}}>A Safe Space to Discuss Agriculture</h5>
      <div style={{height:'10%'}}> 
      <img 
      style={{width:'100%'}}
      src="https://images.unsplash.com/photo-1535048637252-3a8c40fa2172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1790&q=80" 
      alt="Farm trucks on open field"
      /> 
      </div>
        <div className="container border border-success" 
      style={{ backgroundColor: '#f4791f', width: '700', marginTop:'20em' }}>
      <div className="m-2 d-flex justify-content-center">
          <div className="">
          <h2 style={{color:'#659999',fontFamily: 'Baloo Bhai',fontSize:'50px'}}
          className="d-flex justify-content-center">LOGIN</h2>

          <form className="form-group border border-success rounded  p-2 font-weight-bold mb-5 "
           style={{ backgroundColor: '#659999' }}
          onSubmit={this.onSubmit}>
            <input
              style={{justifyContent:'center',
              background: 'none',
              fontFamily: 'Baloo Bhai',
              color:'inherit',
              outline: 'none',
              border: 'none',}}
              type="text"
              placeholder="Enter Username"
              onChange={this.onChange}
            />
            <button style={{backgroundColor: '#f4791f'}} className="btn btn-warning m-1 ">Join The Convo</button>
           
          </form>
        </div>
      </div>
      </div>


      </div>
      
    )
  }
}

 export default UsernameForm