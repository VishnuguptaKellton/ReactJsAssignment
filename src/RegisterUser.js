import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import style from './App.css';
import PhoneInput from 'react-phone-number-input'
import countryListAllIsoData from './CountyCode'
import { Modal } from 'react-bootstrap';
import CButton from './components/CButton';
import CInput from './components/CInput';
import HeaderPanel from './components/HeaderPanel';

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
        <HeaderPanel
        title={'User Register'}
        />
        <div className="field">

        <CInput
          placeholder={'First Name'}
          className={'input_style'}
          value={this.state.FirstName}
          Onevent={(value)=>this.handleFirstName(value)}
      />

            {this.state.errorFirstName&&
               <h5 className="error">{`* ${this.state.firstNameErrorMessage}`} </h5> 
            }
           
          </div>
      
          <div className="field">
          
            <CInput
              placeholder={'Last name'}
              className={'input_style2'}
              value={this.state.LastName}
              Onevent={(value)=>this.handleLastName(value)}
            />
             {this.state.errorLastName&&
               <h5 className="error">{`* ${this.state.lastNameErrorMessage}`} </h5> 
            }
          </div>
        

      

          <div className="field" style={{ marginTop:45,}}>

          <select style={{width:'20%', height:37}} value={this.state.country} onChange={data=>this.selectCountry(data)}>
              {
                countryListAllIsoData.map((item) =>{
                      return(<option value={item.number}>{`${item.name} (+  ${item.number})`}</option>)
                })
                
                }
                
              </select>

              <CInput
              placeholder={'Phone Number'}
              className={'input_style3'}
              value={this.state.PhoneNumber}
              Onevent={(value)=>this.handlePhoneNumber(value)}
            />

          
             {this.state.errorPhoneNumber&&
               <h5 className="error">{`* ${this.state.phoneNumberErrorMessage}`} </h5> 
            }
          </div>

        <CButton 
          name={'SUBMIT'}
          onSubmit={()=>this.onSubmit()}
        />

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
