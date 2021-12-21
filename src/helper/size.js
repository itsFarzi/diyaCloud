import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const _width = 375; // Mockup device width
const _height = 812; // Mockup device height

export const Size = {
  hs: (size = 0) => Math.ceil((width / _width) * size),
  vs: (size = 0) => Math.ceil((height / _height) * size),
  mv: (size = 0, factor = 1) =>
    Math.ceil(size + (Size.hs(size) - size) * factor),
  vmv: (size = 0, factor = 1) =>
    Math.ceil(size + (Size.vs(size) - size) * factor),
  wv: (val = 100) => (width / 100) * val,
  hv: (val = 100) => (height / 100) * val,
};
