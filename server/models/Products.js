const keystone = require('keystone');

const { Types } = keystone.Field;

const Products = new keystone.List('Products');

Products.add({
  name: {
    type: Types.Text,
    required: false,
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
    required: false,
    initial: true
  },
  propertie2: {
    type: Types.Text,
    required: false,
    initial: true
  },
  propertie4: {
    type: Types.Text,
    required: false,
    initial: true
  },
  propertie5: {
    type: Types.Text,
    required: false,
    initial: true
  },
  propertie6: {
    type: Types.Text,
    required: false,
    initial: true
  },
  propertie7: {
    type: Types.Text,
    required: false,
    initial: true
  },
  propertie8: {
    type: Types.Text,
    required: false,
    initial: true
  },
  title: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  subTitle: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated1: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated2: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated3: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  title2: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  subTitle2: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated4: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated5: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated6: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  brandRelated7: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  price: {
    type: Types.Text,
    required: false,
    initial: true
  },
  link: {
    type: Types.Text,
    initial: true
  },
  brandRelated_2: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  price_2: {
    type: Types.Text,
    required: false,
    initial: true
  },
  link_2: {
    type: Types.Text,
    initial: true
  },
  brandRelated_3: {
    type: Types.Text,
    required: false,
    initial: true,
  },
  price_3: {
    type: Types.Text,
    required: false,
    initial: true
  },
  link_3: {
    type: Types.Text,
    initial: true
  },
  image2: {
    type: Types.CloudinaryImages,
    require: false,
    initial: true
  }
});

Products.register();