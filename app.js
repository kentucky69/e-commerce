 const express = require('express');
const app = express();
const port = 3000;

// Configuration
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Accueil - Coléus Passion'
    });
});

app.get('/boutique', (req, res) => {
    res.render('boutique', {
        title: 'Notre Boutique - Coléus Passion'
    });
});

app.get('/guide-entretien', (req, res) => {
    res.render('guide-entretien', {
        title: 'Guide d\'Entretien - Coléus Passion'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Coléus Passion'
    });
});

app.listen(port, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}`);
});
