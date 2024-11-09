module.exports = (sequelize, Sequelize) => {
    const Bienes = sequelize.define("bienes", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Bienes;
  };