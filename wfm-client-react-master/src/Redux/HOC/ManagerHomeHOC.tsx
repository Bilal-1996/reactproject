import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerHome from '../../Managers/Home';

export default connect(
    (data:any)=>{
        console.log(data)
        return {
        empList: (data.loginData.data)? data.loginData.data : [],
        
    }
  },(dispatch)=>{
      return bindActionCreators({getEmployeeListByManager: ()=>{
        return {type:"READ_MANAGER_HOME"}

      }},dispatch)
  },
  )(ManagerHome)