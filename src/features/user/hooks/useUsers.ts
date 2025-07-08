import { useEffect, useState } from "react";
import { fetchUsers } from "../services/userService";
import type { User } from "../services/userService";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: User[] = await fetchUsers();
        let filtered = data.filter((u: User) =>
          u.name.toLowerCase().includes(search.toLowerCase())
        );
        const perPage = 5;
        setTotalPages(Math.ceil(filtered.length / perPage));
        const paginated = filtered.slice((page - 1) * perPage, page * perPage);
        setUsers(paginated);
      } catch (err) {
        console.error("Error al obtener usuarios:", err);
        const errorMsg = err instanceof Error ? err.message : "No se pudo cargar usuarios";
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [search, page]);

  return {
    users,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages
  };
}
