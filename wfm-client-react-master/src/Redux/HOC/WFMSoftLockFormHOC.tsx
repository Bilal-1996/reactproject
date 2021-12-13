import React, {useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SoftLockForm from '../../WFM/WFMSoftLockForm';
var employeeId= 0;
export default connect(
    (data: any, formdata:any)=>{
        console.log('test new')
        console.log(formdata)
        console.log(formdata.manager)
        employeeId = formdata.empId
        
        return {
        obj: formdata
    }
  },(dispatch)=>{
      return bindActionCreators({requestSoftLockByWFM: (status)=>{
        console.log('new');  
        console.log(employeeId);
        var data = {"employeeId" : employeeId, "status":status}
        return {type:"SOFTREQUEST_WFM", data:data}
      },
      
    },dispatch)
  },
  )(SoftLockForm)