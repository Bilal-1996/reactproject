import React, {useState} from 'react';
import Modal from 'react-modal';
import SoftLockFormHOC from '../Redux/HOC/SoftLockFormHOC';
import './Home.css';
const ManagerHome=({empList}:any)=>{
    
const [modalIsOpen,setModalIsOpen] = useState(false);

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#F0AA89'      
    }
};
const [empId,setEmpId] = useState(0);
const setModalIsOpenToTrue =(empid : any)=>{
    setModalIsOpen(true);
    console.log(empid);
    setEmpId(empid);
}
const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
    setEmpId(0);
}

return (
<div>
 
    <h1>Manager Home</h1>
    
        <Modal isOpen={modalIsOpen} style={customStyles} >
            <div >
                <span className="floatright"><button className="btn btn-primary" onClick={setModalIsOpenToFalse}>x</button></span>
                <SoftLockFormHOC empId = {empId}></SoftLockFormHOC>
            </div>
        </Modal>
    
    
    
    <table className="table">
        <thead>
            <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Manager</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
                empList.map((x:any)=>{
                return(
                    <tr key={x.employee_id}>
                        <td>{x.employee_id}</td>
                        <td>{x.name}</td>
                        <td>{
                        x.skillmaps.map((y:any) => {
                            return (
                                <span> {y.skill.name},</span>
                            )
                        })
                        }</td>
                        <td>{x.experience}</td>
                        <td>{x.manager}</td>
                        <td><span onClick={() => {setModalIsOpenToTrue(x.employee_id)}}><button className="btn btn-primary"> RequestLock</button></span></td>
                    </tr>
                )
                })
            }
        </tbody>
    </table>
</div>
       

)}

export default ManagerHome