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
  name2: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true
  },
  price1: {
    type: Types.Text,
    required: true,
    initial: true
  },
  price2: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie1: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie2: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie4: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie5: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie6: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie7: {
    type: Types.Text,
    required: true,
    initial: true
  },
  propertie8: {
    type: Types.Text,
    required: true,
    initial: true
  },
  brandRelated: {
    type: Types.Text,
    required: true,
    initial: true
  }
});

Products.register();