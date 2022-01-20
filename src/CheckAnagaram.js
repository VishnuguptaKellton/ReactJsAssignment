import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import style from './App.css';
import PhoneInput from 'react-phone-number-input'
import countryListAllIsoData from './CountyCode'
import { Modal } from 'react-bootstrap';
import HeaderPanel from './components/HeaderPanel';
import CInput from './components/CInput';
import CButton from './components/CButton';

export default class CheckAnagaram extends Component {

  constructor(props) {
    super(props)
    this.state = {
      str1:'',
      str2:'',
      errorStr1:false,
      errorMessageStr1:'',
      errorStr2:false,
      errorMessageStr2:'',
      checkMessage:"",
      show:false,

    }
  }

  handleStr1(data){
    this.setState({str1:data.target.value})
  }


  handleStr2(data){
    this.setState({str2 :data.target.value})
  }
 

  onSubmit(){
   
    if(this.state.str1==""){
        this.setState({errorStr1:true,errorMessageStr1:'Please Enter String one '})
      return;
    }else{
      this.setState({errorStr1:false,errorMessageStr1:''})

    }

    if(this.state.str2==""){
      this.setState({errorStr2:true,errorMessageStr2:'Please Enter Second String'})
        return;
      }else{
        this.setState({errorStr2:false,errorStr2:''})
      }

   let check=  this.isAnagaram(this.state.str1,this.state.str2);
   if(check){
    this.setState({checkMessage:'String are Anagaram'})
   }else{
    this.setState({checkMessage:'String are not Anagaram'})
   }

  }

  handleClose(){
    this.setState({show:false})
  }
 

  isAnagaram(str1, str2){
    if(str1.length!== str2.length){
        return false;
    }
    var obj1 = {};
    var obj2 = {};
    for(var arg of str1){
        obj1[arg] =  (obj1[arg] || 0 ) + 1 ;
    }
    for(var arg of str2){
        obj2[arg] =  (obj2[arg] || 0 ) + 1 ;
    }

    for( var key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}



  render() {
   
    return (<div className="addmargin">
      <div className="col-md-3">
    
      </div>
      <div className="col-md-6"  style={{
      }}>
      <Panel bsStyle="info" className="centeralign">
        <HeaderPanel
        title={'Check Anagaram'}
        />

        <div className="field">

          <CInput
            placeholder={'Enter String one'}
            className={'input_style'}
            value={this.state.str1}
            Onevent={(value)=>this.handleStr1(value)}
        />
      
            {this.state.errorStr1&&
               <h5 className="error">{`* ${this.state.errorMessageStr1}`} </h5> 
            }
           
          </div>
      
          <div className="field">


          <CInput
            placeholder={'Enter Second String'}
            className={'input_style2'}
            value={this.state.str2}
            Onevent={(value)=>this.handleStr2(value)}
        />

  
             {this.state.errorStr2&&
               <h5 className="error">{`* ${this.state.errorMessageStr2}`} </h5> 
            }
          </div>
        
           <div style={{marginTop:50}}>
           {this.state.checkMessage!==""&&
               <h5 className="success">{`${this.state.checkMessage}`} </h5> 
            }
             </div>   
    

        <CButton 
          name={'SUBMIT'}
          onSubmit={()=>this.onSubmit()}
        />

      </Panel>
            
      </div>
    </div>)
  }

}
