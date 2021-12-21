import {Constants} from '.';

const params = (body = {}) =>
  Object.keys(body)
    .map(_ => `${_}=${body[_]}`)
    .join('&');

const _fetch = ({body = {}, method = 'GET', path = ''}) =>
  fetch(
    `${Constants.BASE_URL}${path}?${params({
      ...body,
      appid: Constants.OPEN_WEATHER_API,
    })}`,
    {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

export const API = {
  get: props =>
    new Promise(async (resolve, reject) => {
      try {
        var response = await _fetch({...props});
        var data = await response.json();
        if (response.status >= 300) return reject(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
};
