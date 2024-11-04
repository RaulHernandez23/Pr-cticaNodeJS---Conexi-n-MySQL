const { Router } = require("express");
const {
  usuariosGet,
  usuarioGetById,
  usuarioCreate,
  usuarioUpdate,
  usuarioDelete,
} = require("../controllers/usuarios");

const router = Router();

// Rutas y métodos CRUD
router.get("/", usuariosGet);               // Obtener todos los usuarios
router.get("/:id", usuarioGetById);         // Obtener un usuario por ID
router.post("/", usuarioCreate);            // Crear un nuevo usuario
router.put("/:id", usuarioUpdate);          // Actualizar un usuario por ID
router.delete("/:id", usuarioDelete);       // Eliminar un usuario por ID

module.exports = router;
