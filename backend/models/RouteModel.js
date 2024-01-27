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

    })
    return Route;
}