const express = require('express');
const path = require('path');
const app = express();

// Configuration des fichiers statiques
app.use(express.static('public'));

// Configuration des vues
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en marche sur le port ${PORT}`);
});

if (process.env.NODE_ENV === 'development') {
    const livereload = require('livereload');
    const connectLivereload = require('connect-livereload');
    
    const liveReloadServer = livereload.createServer();
    liveReloadServer.watch(path.join(__dirname, 'public'));
    
    app.use(connectLivereload());
} 