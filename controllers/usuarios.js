// controllers/usuarios.js
const connection = require("../models/database");

// Obtener todos los usuarios
const usuariosGet = (req, res) => {
  const query = "SELECT * FROM usuarios";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error retrieving users", details: err });
    }
    res.json(results);
  });
};

// Obtener un usuario por ID
const usuarioGetById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM usuarios WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error retrieving user", details: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(results[0]);
  });
};

// Crear un nuevo usuario
const usuarioCreate = (req, res) => {
  const { nombre, email, pass } = req.body;
  const query = "INSERT INTO usuarios (nombre, email, pass) VALUES (?, ?, ?)";
  connection.query(query, [nombre, email, pass], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error creating user", details: err });
    }
    res.status(201).json({ message: "User created", userId: results.insertId });
  });
};

// Actualizar un usuario por ID
const usuarioUpdate = (req, res) => {
  const { id } = req.params;
  const { nombre, email, pass } = req.body;
  const query = "UPDATE usuarios SET nombre = ?, email = ?, pass = ? WHERE id = ?";
  connection.query(query, [nombre, email, pass, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error updating user", details: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated" });
  });
};

// Eliminar un usuario por ID
const usuarioDelete = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM usuarios WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting user", details: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted" });
  });
};

module.exports = {
  usuariosGet,
  usuarioGetById,
  usuarioCreate,
  usuarioUpdate,
  usuarioDelete,
};
