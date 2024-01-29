module.exports = (sequelize, DataTypes)=>{
    const Route = sequelize.define("Route",{
        routeId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        startPoint:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
  
        endPoint:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        distance:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },
        time:{
            type:DataTypes.TIME,
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
        seats:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },


    })
    return Route;
}