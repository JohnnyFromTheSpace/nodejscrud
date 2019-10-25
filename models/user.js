'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,10]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,10]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    date_register: {
      type: DataTypes.STRING,
      defaultValue: sequelize.fn('NOW')
    },
    // photo: {
    //   type: DataTypes.STRING
    // }
  }, {
    tableName: 'user'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
