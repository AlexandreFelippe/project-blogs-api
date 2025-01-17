const Users = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'users',
});

User.associate = (models) => {
  User.hasMany(models.BlogPost,
    { foreignKey: 'user_id', as: 'blog_posts' });
}

return User;

}

module.exports = Users;