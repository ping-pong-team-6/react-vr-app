export const ENDPOINT = 'http://localhost:42666/api/v1/go-links';

export const getLinks = () => {
	return fetch(ENDPOINT).then(res => res.json());
}
