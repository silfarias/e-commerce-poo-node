import { DataTypes, Model } from 'sequelize';

class User extends Model {}


export function UserInit (database) {
    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize: database.sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: false
        }
    )  
}



