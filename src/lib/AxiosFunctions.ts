import axios from 'axios';
// axios.

export async function getPost(url: string, params = {}) {
  const res = await axios.post(url, params);
  return res;
}

export async function getFetch(url: string, params = {}) {
  return await axios.get(url, params);
  // .then((response) => response)
  // .catch((error) => error);
}

export async function fetchPost(url: string, params = {}) {
  const formData = new FormData();

  const dataEntries = Object.entries(params);
  dataEntries.forEach((dataEntry: [string, any]) => {
    formData.append(dataEntry[0], dataEntry[1]);
  });

  const requestOptions = {
    method: 'POST',
    body: formData,
    // redirect: requestRedirect,
  };

  return await fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('error', error));
}
