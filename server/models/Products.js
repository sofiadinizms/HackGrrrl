const keystone = require('keystone');

const { Types } = keystone.Field;

const Products = new keystone.List('Products');

Products.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
    index: true
  },
  price: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  },
  brandRelated: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  }
});

Products.register();