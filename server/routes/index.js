const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Products = keystone.list('Products');
const Proprieties = keystone.list('Proprieties');
const WhereToBuy = keystone.list('WhereToBuy');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/products', (req, res) => {
    Products.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/productsProperties', (req, res) => {
    Proprieties.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/wheretobuy', (req, res) => {
    WhereToBuy.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};