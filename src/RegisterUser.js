import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import style from './App.css';
import PhoneInput from 'react-phone-number-input'
import countryListAllIsoData from './CountyCode'
import { Modal } from 'react-bootstrap';

export default class RegisterUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      FirstName:'',
      LastName:'',
      PhoneNumber:'',
      country:'',
      errorFirstName:false,
      firstNameErrorMessage:'',
      errorLastName:false,
      lastNameErrorMessage:'',
      errorPhoneNumber:false,
      phoneNumberErrorMessage:'',
      show:false,

    }
  }

  handleFirstName(data){
    this.setState({FirstName:data.target.value})
  }


  handleLastName(data){
    this.setState({LastName:data.target.value})
  }
  handlePhoneNumber(data){
    this.setState({PhoneNumber:data.target.value})
  }

  selectCountry(data){
    this.setState({country:data.target.value})

  }


  onSubmit(){
   
    if(this.state.FirstName==""){
        this.setState({errorFirstName:true,firstNameErrorMessage:'FirstName is required'})
      return;
    }else if(this.state.FirstName.length<5){
      this.setState({errorFirstName:true,firstNameErrorMessage:' Enter Minimum 5 characters'})
    return;
    }else{
      this.setState({errorFirstName:false,firstNameErrorMessage:''})

    }

    if(this.state.LastName==""){
      this.setState({errorLastName:true,lastNameErrorMessage:'LastName is required'})
        return;
      }else if(this.state.LastName.length<5){
        this.setState({errorLastName:true,lastNameErrorMessage:' Enter Minimum 5 characters'})
      return;
      }else{
        this.setState({errorLastName:false,lastNameErrorMessage:''})

      }
  

     if(this.state.PhoneNumber==""){
        this.setState({errorPhoneNumber:true,phoneNumberErrorMessage:'Please Enter phone number'})
          return;
        }else if(Number.isNaN(this.state.PhoneNumber)){
          this.setState({errorPhoneNumber:true,phoneNumberErrorMessage:'Please enter a valid mobile number'})
          return;
        }else if(this.state.PhoneNumber.length<7 ||this.state.PhoneNumber.length>15){
          this.setState({errorPhoneNumber:true,phoneNumberErrorMessage:'Please enter a valid mobile number'})
        return;
        }else{
          this.setState({errorPhoneNumber:false,phoneNumberErrorMessage:''})

        }
        this.setState({show:true})


  }

  handleClose(){
    this.setState({show:false})

  }
 

  render() {
   
    return (<div className="addmargin">
      <div className="col-md-3">
    
      </div>
      <div className="col-md-6"  style={{
      }}>
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{'User Register'}</Panel.Title>
        </Panel.Heading>

        <div className="field">
            <input
            style={{
              width: "90%",
              marginTop:10,
              paddingLeft: "8px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
             placeholder={'First Name'}
              type="text"
              value={this.state.FirstName}
              onChange={data=>this.handleFirstName(data)}
            />
            {this.state.errorFirstName&&
               <h5 className="error">{`* ${this.state.firstNameErrorMessage}`} </h5> 
            }
           
          </div>
      
          <div className="field">
            <input
            style={{
              width: "90%",
              marginTop:20,
            
              paddingLeft: "8px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
             placeholder={'Last name'}
              type="text"
              value={this.state.LastName}
              onChange={data=>this.handleLastName(data)}
            />
             {this.state.errorLastName&&
               <h5 className="error">{`* ${this.state.lastNameErrorMessage}`} </h5> 
            }
          </div>
        

      

          <div className="field" style={{ marginTop:20,}}>

          <select style={{width:'20%', height:37}} value={this.state.country} onChange={data=>this.selectCountry(data)}>
              {
                countryListAllIsoData.map((item) =>{
                      return(<option value={item.number}>{`${item.name} (+  ${item.number})`}</option>)
                })
                
                }
                
              </select>

            <input
            style={{
              width: "70%",
              marginTop:15,
            marginLeft:10,
              paddingLeft: "8px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
             placeholder={'Phone Number'}
              type="text"
              value={this.state.PhoneNumber }
              onChange={data=>this.handlePhoneNumber(data)}
            />
             {this.state.errorPhoneNumber&&
               <h5 className="error">{`* ${this.state.phoneNumberErrorMessage}`} </h5> 
            }
          </div>

       

          <button 
            style={{
              width:'90%',
              marginBottom:30,
              height:40,
              backgroundColor:'green',
              color:'white',
              marginTop:30,

            }}
          onClick={()=>this.onSubmit()}>SUBMIT</button>

      </Panel>


      <Modal show={this.state.show} onHide={()=>this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Account Created</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congrates!, Your account has been created</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.handleClose()}>
            OK
          </Button>
      
        </Modal.Footer>
      </Modal>
            
      </div>
    </div>)
  }

}
