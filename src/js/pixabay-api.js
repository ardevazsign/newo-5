export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '16156572-4df0aaa1fcfeb8d4bcdef8758';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};