const models = require('../models');

module.exports = () => {
  return models.sequelize.sync({force: true});
}