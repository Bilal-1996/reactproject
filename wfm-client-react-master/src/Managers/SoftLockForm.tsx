import { useState } from "react"
import './SoftLockForm.css';

const SoftLockForm=({empid,requestSoftLockByManager}: any,)=>{
    const [requestmsg,setRequestmsg]=useState("")
    return(
        <div>
            <h4>Soft lock Request Confirmation</h4>
            <p>Please confirm the lock request for {empid}</p>
            <p>Request message(message must be atleast 10 char long)</p>
            <textarea id="requestmsg" value={requestmsg} onChange={(x:any)=>setRequestmsg(x.target.value)}>
            </textarea>
            <br/>
            <span className="floatright">
                <button onClick={() => requestSoftLockByManager(requestmsg)} className="btn btn-primary">RequestLock</button>
            </span>
        </div>
    )
}

export default SoftLockForm