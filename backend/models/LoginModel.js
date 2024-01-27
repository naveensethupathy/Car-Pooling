module.exports = (sequelize, DataTypes)=>{
    const Login = sequelize.define("Login",{
        email:{
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
        usertype:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
            },
        },

    })
    return Login;
}