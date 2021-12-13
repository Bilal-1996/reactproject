var express = require("express")
const { skillmap } = require("../orm/model");
var model = require('../orm/model')
var route=express.Router();

  route.get("/employeebymanager", async function(request,response){
    try{
      const user = await model.employee.findAll({
        where: {manager: request.query.loggeduser, lockstatus: 'not_requested'},
        attributes: ['employee_id', 'name', 'manager', 'experience'],
        include: [
          {model: model.skillmap, attributes:['skillid'], 
          include: [
          {
          model: model.skills, attributes:['skillid','name']
          }
        ]}]
      });
      response.json(user)
   }
   catch(e)
   {
      console.log(e)
      response.status(500)
   }
   
   })

  route.get("/employeebywfm", async function(request,response){
  try{
    const user = await model.employee.findAll({
      where: {wfm_manager: request.query.loggeduser, lockstatus: 'request_waiting'},
      attributes: ['employee_id', 'name', 'manager'],
      include: [{model: model.softlock, attributes: ['employee_id','reqdate']}]
    });
    response.json(user)
  }
  catch(e)
  {
    console.log(e)
          response.status(500)
  }
  
  })
 
  route.post("/softreqbymanager", async function(request,response){
    const {employeeId,managername,reqmessage}=request.body 
    try{
      let date_ob = new Date();
      let date = date_ob.getDate();
      let month = date_ob.getMonth() + 1;
      let year = date_ob.getFullYear();
      let currentdate = year + "-" + month + "-" + date
      const user = await model.softlock.create({
        employee_id: employeeId,
        manager: managername,
        reqdate: currentdate,
        status: 'waiting',
        lastupdated: currentdate,
        requestmessage: reqmessage,
      });

      const emp = await model.employee.findAll({where : {employee_id: employeeId}})
      if(emp)
      {
        const empupdated = await emp.set({
              lockstatus: 'request_waiting'
          })
        response.json(empupdated)
      }
      else 
      {
        response.status("record not found")
      }
      
    }
    catch(e)
    {
      console.log(e)
            response.status(500)
    }
    
    })

    route.post("/softreqbywfm", async function(request,response){
      const {employeeId,status}=request.body 
      console.log("test data");
      console.log(request.body);
      try{
        let date_ob = new Date();
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let currentdate = year + "-" + month + "-" + date
        console.log(employeeId);
        const softlock = await model.softlock.findAll({where : {employee_id: employeeId}})
        if(softlock)
        {
            await model.softlock.findAll({where : {employee_id: employeeId}}).update({
                status: status,
                lastupdated:currentdate,
                managerstatus: status,
                mgrlastupdate: currentdate
            })
          
        }
        else 
        {
          response.status("record not found")
        }      
  
        const emp = await model.employee.findAll({where : {employee_id: employeeId}})
        if(emp)
        {
          const empupdated = await emp.set({
                lockstatus: 'locked'
            })
          response.json(empupdated)
        }
        else 
        {
          response.status("record not found")
        }
        
      }
      catch(e)
      {
        console.log(e)
              response.status(500)
      }
      
      })

 module.exports=  route


