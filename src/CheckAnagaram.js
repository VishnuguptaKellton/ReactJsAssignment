import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import style from './App.css';
import PhoneInput from 'react-phone-number-input'
import countryListAllIsoData from './CountyCode'
import { Modal } from 'react-bootstrap';

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
        <Panel.Heading>
          <Panel.Title componentClass="h3">{'Check Anagaram'}</Panel.Title>
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
             placeholder={'Enter String one '}
              type="text"
              value={this.state.str1}
              onChange={data=>this.handleStr1(data)}
            />
            {this.state.errorStr1&&
               <h5 className="error">{`* ${this.state.errorMessageStr1}`} </h5> 
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
             placeholder={'Enter Second String'}
              type="text"
              value={this.state.str2}
              onChange={data=>this.handleStr2(data)}
            />
             {this.state.errorStr2&&
               <h5 className="error">{`* ${this.state.errorMessageStr2}`} </h5> 
            }
          </div>
        
           <div>
           {this.state.checkMessage!==""&&
               <h5 className="success">{`${this.state.checkMessage}`} </h5> 
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
            
      </div>
    </div>)
  }

}
