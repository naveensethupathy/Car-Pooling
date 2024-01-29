module.exports = (sequelize, DataTypes)=>{
    const Employee = sequelize.define("Employee",{
        username:{
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
        email:{
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
        vehicleModel:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true,
            },
            defaultValue: "0",
        },
        vehicleNumber:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true,
            },
            defaultValue: "0",
        },
        verified:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true,
            },
            defaultValue: "0",
        },
        active:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true,
            },
            defaultValue: "0",
        },
        role:{
            type:DataTypes.STRING,
        }

    })
    return Employee;
}