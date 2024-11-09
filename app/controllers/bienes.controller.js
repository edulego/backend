const db = require("../models");
const Bienes = db.bienes;
const Op = db.Sequelize.Op;

// Crea y guarda un nuevo Bien
exports.create = (req, res) => {
    // Validar el request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Crea un bien
    const bien = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Guarda un Bien en la base de datos
    Bienes.create(bien)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error ha ocurrido creando el Bien."
        });
      });
  };

// Devuelve todos los Bienes de la base de datos.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Bienes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error ha ocurrido devolviendo los Bienes."
        });
      });
  };

// Encontrar un Bien con el id definido
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Bienes.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar Bien con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retribuyendo un Bien con id=" + id
        });
      });
  };

// Actualiza un Bien con el id del request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Bienes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bien ha sido actualizado."
          });
        } else {
          res.send({
            message: `No se puede actualizar bien con id=${id}. Talvés Bien no fue encontrado en el request o en el req.body está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error mientras actualizaba el Bien con id=" + id
        });
      });
  };

// Borrando el Bien con un específico id en el request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Bienes.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bien ha sido borrado satisfactoriamente!"
          });
        } else {
          res.send({
            message: `No se puede borrar Bien con id=${id}. Talvéz el Bien no fue encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo borrar Bien con id=" + id
        });
      });
  };

// Borrando todos los Bienes de la DB.
exports.deleteAll = (req, res) => {
    Bienes.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Bienes fueron borrados exitosamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error fue producido mientras borraba todos los bienes."
        });
      });
  };

// Encontrar todos los bienes publicados
exports.findAllPublished = (req, res) => {
    Bienes.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error ha ocurrido mientras devolvía el Bienes."
        });
      });
  };