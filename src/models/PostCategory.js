module.exports = (sequelize, DataTypes) => {
const PostCategory = sequelize.define('PostCategory', {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  references: {
    model: 'blog_posts',
    key: 'id',
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
},
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  references: {
    model: 'categories',
    key: 'id',
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'posts_categories',
});

PostCategory.associate = (models) => {
models.BlogPost.belongsToMany(models.Category, {
  as: 'categories',
  through: PostCategory,
  foreignKey: 'postId',
  otherKey: 'categoryId',
});
models.Category.belongsToMany(models.BlogPost, {
  as: 'blogPosts',
  through: PostCategory,
  foreignKey: 'categoryId',
  otherKey: 'postId',
});
}
return PostCategory;
}