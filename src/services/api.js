export const API_URL =
  'https://646f399009ff19b12086d0d8.mockapi.io/items/dashboard';

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Could not load products (${response.status})`);
  }
  const data = await response.json();
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    price: Number(item.price),
    image: item.image,
    description: item.description,
  }));
};
