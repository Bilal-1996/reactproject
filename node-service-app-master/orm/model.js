const Sequelize = require('sequelize');
var sequelize=require('./connection');

var user=sequelize.define('users',{
    username:{
      type: Sequelize.STRING,
      primaryKey:true
    },
    password:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    role:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    email:{
      type: Sequelize.TEXT,
      allowNull:false
    }
},{
      //don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false
}

  );


  var employee=sequelize.define('employee',{
    employee_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    manager:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    wfm_manager: {
      type: Sequelize.TEXT,
      allowNull:false
    },
    experience:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
},{
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

var skills=sequelize.define('skills',{
  skillid:{
      type: Sequelize.DECIMAL,
      primaryKey:true
  },
  name:{
      type: Sequelize.TEXT,
      allowNull:false
  }
},
{
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

var skillmap=sequelize.define('skillmap',{
  employee_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
  },
  skillid:{
      type: Sequelize.DECIMAL,
      primaryKey:true
  },
},
{
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

var softlock=sequelize.define('softlock',{
  employee_id:{
      type: Sequelize.INTEGER,
      allowNull:false
  },
  manager:{
      type: Sequelize.TEXT,
      allowNull:false
  },
  reqdate:{
    type: Sequelize.DATE,
    allowNull:false
  },
  status:{
    type: Sequelize.TEXT,
    allowNull:false
  },
  lastupdated:{
    type: Sequelize.DATE,
    allowNull:false
  },
  lockid:{
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  requestmessage:{
    type: Sequelize.TEXT,
    allowNull:true
  },
  wfmremark:{
    type: Sequelize.TEXT,
    allowNull:true
  },
  managerstatus:{
    type: Sequelize.TEXT,
    allowNull:true,
    default: 'awaiting_confirmation'
  },
  mgrstatuscomment:{
    type: Sequelize.TEXT,
    allowNull:true
  },
  mgrlastupdate:{
    type: Sequelize.DATE,
    allowNull:true
  },
},
{
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

skills.hasMany(skillmap, {foreignKey: 'skillid'})
skillmap.belongsTo(skills, {foreignKey: 'skillid'})

employee.hasMany(skillmap, {foreignKey: 'employee_id'})
skillmap.belongsTo(employee, {foreignKey: 'employee_id'})

employee.belongsToMany(skills, { through: 'skillmap'});


user.hasMany(softlock, {foreignKey: 'manager'})
softlock.belongsTo(user, {foreignKey: 'manager'})

employee.hasOne(softlock, {foreignKey: 'employee_id'})
softlock.belongsTo(employee, {foreignKey: 'employee_id'})

employee.sync({force: false}).then(() => {
    
  console.log("employee table Synched!!!");
});

skillmap.sync({force: false}).then(() => {
    
  console.log("skillmap table Synched!!!");
}, function(err){
  console.log("test");
  // catch error here
  console.log(err);

});

skills.sync({force: false}).then(() => {
    
  console.log("skills table Synched!!!");
});

user.sync({force: false}).then(() => {
    
  console.log("User table Synched!!!");
});

softlock.sync({force: false}).then(() => {
    
  console.log("softlock table Synched!!!");
});




  module.exports={user:user, employee : employee, skills : skills, skillmap : skillmap, softlock : softlock};
