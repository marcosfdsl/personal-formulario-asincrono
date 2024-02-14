const express = require('express');
const app = express();
const path = require('path');

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar la solicitud GET en la ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la solicitud AJAX
app.get('/saludo', (req, res) => {
    const name = req.query.name;
    const message = `¡Hola, ${name}!`;
    res.send(message);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
