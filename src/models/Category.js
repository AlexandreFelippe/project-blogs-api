const Categories = (sequelize, DataTypes) => {
const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'categories',
});

Category.associate = (models) => {
  models.Category.belongsToMany(models.BlogPost, {
    through: 'PostCategory',
    foreignKey: 'post_id',
    otherKey: 'category_id',
    as: 'categories',
  });
}

return Category;

};

module.exports = Categories;
