import { useState } from "react"
const WFMSoftLockForm=({obj,requestSoftLockByWFM}:any)=>{
    const [status,setStatus]=useState("")
    return(
        <div>
            <h4>Soft lock Request Confirmation</h4>
            <p>Status Update for Request lock</p>
            <p>Employee Id : {obj.empId}</p>
            <p>Requestee : {obj.manager}</p>
            <p>Employee Manager : {obj.manager}</p>
            
            <p>Status : 
                <select id="status" value={status} onChange={(x:any)=>setStatus(x.target.value)}>
                    <option></option>
                    <option>approve</option>
                    <option>reject</option>
                </select>
            </p>
            <br/>
            <span className="floatright">
                <button onClick={() => requestSoftLockByWFM(status)} className="btn btn-primary">Update Request</button>
            </span>
        </div>
    )
}

export default WFMSoftLockForm