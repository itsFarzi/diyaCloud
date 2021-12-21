import {Constants} from './constants';
import {Colors} from './colors';
import {Size} from './size';
import {API} from './api';

const capitalize = (str = '') =>
  str
    .split(' ')
    .map(_ => _.charAt(0).toUpperCase() + _.slice(1))
    .join(' ');

export {Size, API, Constants, capitalize, Colors};
