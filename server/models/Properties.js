const keystone = require('keystone');

const { Types } = keystone.Field;

const Proprieties = new keystone.List('Proprieties');

Proprieties.add({
  productsProperties: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  }
});

Proprieties.register();