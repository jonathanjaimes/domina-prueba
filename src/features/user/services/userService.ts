export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company?: { name: string };
  address?: { street: string; city: string };
}

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("Error al obtener usuario(s)");
  return await res.json();
}

export function fetchUsers() {
  return fetchApi<User[]>(BASE_URL);
}

export function fetchUserById(id: string | number) {
  return fetchApi<User>(`${BASE_URL}/${id}`);
}

