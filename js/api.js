const GET_DATA_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';

const getData = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });

export { getData };
