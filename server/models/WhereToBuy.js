const keystone = require('keystone');

const { Types } = keystone.Field;

const WhereToBuy = new keystone.List('WhereToBuy');

WhereToBuy.add({
  brandRelated: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  link: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  },
  betterPrice: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  }
});

WhereToBuy.register();