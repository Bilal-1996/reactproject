import React, {useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SoftLockForm from '../../Managers/SoftLockForm';

var employeeId = 0;

export default connect(
    (data: any, formdata:any)=>{
        console.log('test new')
        console.log(formdata.empId)
        console.log(formdata.modelclose)
        employeeId = formdata.empId;
        return {
        empid: employeeId
    }
  },(dispatch)=>{
      return bindActionCreators({requestSoftLockByManager: (requestmsg)=>{
          console.log("test soft")
          console.log(employeeId)
          console.log(requestmsg)
          var data = {"employeeId": employeeId,"managername": localStorage.getItem("username"), "reqmessage": requestmsg }
        return {type:"SOFTREQUEST_MANAGER", data: data}
      },
      
    },dispatch)
  },
  )(SoftLockForm)