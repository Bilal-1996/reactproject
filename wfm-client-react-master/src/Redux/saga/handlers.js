import axios from 'axios'
import {call,put} from 'redux-saga/effects'

function getManagerHome(url){
  return axios.get(url)
}

function getWFMHome(url){
   return axios.get(url)
 }




export function* loginHandler(action){
    try{
      
 let  result = yield call(axios.post,"http://localhost:8000/users/signin",action.data)
 console.log(result.data)
 localStorage.setItem("username",result.data.username)
 localStorage.setItem("usertype",result.data.usertype)
 localStorage.setItem("token",result.data.token)

 yield put({type:"LOGIN_SUCCESS",data: 
  {
     username:result.data.username,
     usertype:result.data.usertype,
     token: result.data.token
  }})
    } 
  catch(e){
      yield put({type:"LOGIN_FAILURE"})
  }
 
}

export function* managerHomeHandler(){
    
  try{
      const result = yield call(getManagerHome,"http://localhost:8000/api/employeebymanager?loggeduser="+localStorage.getItem("username"))
      //const result = yield call(getManagerHome, "http://localhost:8000/api/employeebymanager?loggeduser="+localStorage.getItem("username"),{ method: 'POST', url: "http://localhost:8000/api/employeebymanager?loggeduser="+localStorage.getItem("username"), body: {"test": "test data"} })
       yield put({
       type:"MANAGERHOME_ACTION",
       data:{data: result.data}
       })
    }
    catch(e){
     yield put({})
    } 
 }

 export function* wfmHomeHandler(){
    
   try{
       const result = yield call(getWFMHome,"http://localhost:8000/api/employeebywfm?loggeduser="+localStorage.getItem("username"))
       //const result = yield call(getManagerHome, "http://localhost:8000/api/employeebymanager?loggeduser="+localStorage.getItem("username"),{ method: 'POST', url: "http://localhost:8000/api/employeebymanager?loggeduser="+localStorage.getItem("username"), body: {"test": "test data"} })
        yield put({
        type:"WFMHOME_ACTION",
        data:{data: result.data}
        })
     }
     catch(e){
      yield put({})
     } 
  }

 export function* softReqByManagerHandler(action){
    
  try{
      console.log(action.data);
      const result = yield call(axios.post,"http://localhost:8000/api/softreqbymanager",action.data)
       yield put({
       type:"MANAGERSOFT_ACTION",
       data:{data: result.data}
       })
    }
    catch(e){
     yield put({})
    } 
 }

 export function* softReqByWFMHandler(action){
    
   try{
       console.log(action.data);
       const result = yield call(axios.post,"http://localhost:8000/api/softreqbywfm",action.data)
        yield put({
        type:"WFMSOFT_ACTION",
        data:{data: result.data}
        })
     }
     catch(e){
      yield put({})
     } 
  }