import React, {useState} from 'react';
import Modal from 'react-modal';
import WFMSoftLockFormHOC from '../Redux/HOC/WFMSoftLockFormHOC';

const WFMHome=({empList}:any)=>{
    const [modalIsOpen,setModalIsOpen] = useState(false);

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#F0AA89',
      width                 : '50%',
    }
};
const [empId,setEmpId] = useState(0);
const [manager,setManager] = useState("");
const setModalIsOpenToTrue =(empid : any, manager : any)=>{
    setModalIsOpen(true);
    console.log(empid);
    setEmpId(empid);
    setManager(manager);
}
const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
}

    return (
        <div>
 
    <h1>WFM Home</h1>
    <Modal isOpen={modalIsOpen} style={customStyles} >
            <div >
                <span className="floatright"><button className="btn btn-primary" onClick={setModalIsOpenToFalse}>x</button></span>
                <WFMSoftLockFormHOC empId = {empId} manager = {manager}></WFMSoftLockFormHOC>
            </div>
        </Modal>
    <table className="table">
        <thead>
            <tr>
            <th>Employee Id</th>
            <th>Requestee</th>
            <th>RequestDate</th>
            <th>Employees Manager</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
                empList.map((x:any)=>{
                return(
                    <tr key={x.employee_id}>
                        <td>{x.employee_id}</td>
                        <td>{x.manager}</td>
                        <td>{x.softlock.reqdate}</td>
                        <td>{x.manager}</td>
                        <td><span onClick={() => {setModalIsOpenToTrue(x.employee_id,x.manager)}}><button className="btn btn-primary"> ViewDetails</button></span></td>
                    </tr>
                )
                })
            }
        </tbody>
    </table>
</div>
    )
}

export default WFMHome