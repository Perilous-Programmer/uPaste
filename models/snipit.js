import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class Snipit extends Model {}

Snipit.init({
  // Model attributes are defined here
  snipitTitle: {
    type: DataTypes.STRING
  },
  snipitBody: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Snipit' // We need to choose the model name
});

// the defined model is the class itself
console.log(Snipit === sequelize.models.Snipit); // true
Snipit.sync({ alter: true });

export default Snipit;