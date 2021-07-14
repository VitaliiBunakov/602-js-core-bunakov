module.exports = (sequalize, DataTypes) =>{
    const User = sequalize.define('User',{
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_pass:{
            type: DataTypes.STRING,
        },
        adm_lvl:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        aval_devices:{
            type: DataTypes.STRING
        }

    },
        {
            tableName: 'users',
            timestamps: false
        })


    return User;
}