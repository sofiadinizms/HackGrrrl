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
  },
  
  title: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  subTitle: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  title2: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  subTitle2: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  brandRelated: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  price: {
    type: Types.Text,
    required: true,
    initial: true
  },
  link: {
    type: Types.Text,
    initial: true
  },
  brandRelated_2: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  price_2: {
    type: Types.Text,
    required: true,
    initial: true
  },
  link_2: {
    type: Types.Text,
    initial: true
  },
  brandRelated_3: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  price_3: {
    type: Types.Text,
    required: true,
    initial: true
  },
  link_3: {
    type: Types.Text,
    initial: true
  },
  images: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true
  }
});

Products.register();