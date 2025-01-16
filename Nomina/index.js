const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./data.db');

// Servir archivos estáticos desde el directorio raíz y la carpeta css
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.json());

// Ruta para crear tablas, por si aún no las creaste (workers, accrued, deductions...)
// db.run(...);

// Ruta para servir el HTML de trabajadores (opcional, si no quieres redirigir manualmente)
app.get('/trabajadores', (req, res) => {
  res.sendFile(path.join(__dirname, 'trabajadores.html'));
});

// Ruta para insertar un nuevo trabajador
app.post('/api/workers', (req, res) => {
  const { name, email, phone, numberAccount, documentNumber } = req.body;
  const sql = `
    INSERT INTO workers (name, email, phone, numberAccount, document_number)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, [name, email, phone, numberAccount, documentNumber], function(err) {
    if (err) {
      console.error('Error al insertar trabajador:', err.message);
      return res.json({ success: false, error: err.message });
    }
    res.json({ success: true, id: this.lastID });
  });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
