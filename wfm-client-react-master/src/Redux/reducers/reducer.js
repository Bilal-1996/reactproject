export const loginReducer=(state={username:"NA",token:"NA",usertype:"NA",message:""},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGIN_FAILURE":
            console.log(action)
            return {...state,message:"Login Credentials incorrect"};
        case "MANAGERHOME_ACTION":
            console.log(action)
            return {...action.data,message:"Manager data"};
        case "MANAGERSOFT_ACTION":
            console.log(action)
            return {...action.data,message:"Manager soft data"};
        case "WFMHOME_ACTION":
            console.log(action)
            return {...action.data,message:"Manager data"};
        case "WFMSOFT_ACTION":
            console.log(action)
            return {...action.data,message:"Manager data"};
        default:
            return state
    }
}