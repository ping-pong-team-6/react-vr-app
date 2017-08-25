export const ENDPOINT = 'http://localhost:42666/api/v1/go-links';

export const getLinks = () => {
  return fetch(ENDPOINT).then(res => res.json());
}

export const postGoLink = ({name, url}) => {
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({name, url}),
  })
    .then(response => response.json());
}

export const deleteGoLink = ({name}) => {
  return fetch(`${ENDPOINT}/${name}`, {
    method: 'DELETE',
  })
    .then(response => response.json());
}
