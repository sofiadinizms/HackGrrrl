const keystone = require('keystone');

const { Types } = keystone.Field;

const WhereToBuy = new keystone.List('WhereToBuy');

WhereToBuy.add({
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

WhereToBuy.register();