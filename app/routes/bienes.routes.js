module.exports = app => {
    const bienes = require("../controllers/bienes.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo bien
    router.post("/", bienes.create);
  
    // Devuelve todos los bieness
    router.get("/", bienes.findAll);
  
    // Devuelve todos los bienes publicados bieness
    router.get("/published", bienes.findAllPublished);
  
    // Devuelve un bien con id definido
    router.get("/:id", bienes.findOne);
  
    // Actualiza un bienes con id definido
    router.put("/:id", bienes.update);
  
    // BOrrar un bien con id definido
    router.delete("/:id", bienes.delete);
  
    // Borrar todos los bienes
    router.delete("/", bienes.deleteAll);
  
    app.use('/api/bienes', router);
  };