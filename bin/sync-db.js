const models = require('../models');

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  };
  return models.sequelize.sync(options);
}