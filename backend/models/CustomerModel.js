module.exports = (sequelize, DataTypes)=>{
    const Customer = sequelize.define("Customer",{
        customerId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        customerName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
  
        emailId:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        mobileNumber:{
            type:DataTypes.BIGINT,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
 
        status:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },

    })
    return Customer;
}