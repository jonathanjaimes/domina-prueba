import { useEffect, useState, useMemo } from "react";
import { fetchUsers } from "../services/userService";
import type { User } from "../services/userService";

export function useUsers() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: User[] = await fetchUsers();
        setAllUsers(data);
      } catch (err) {
        console.error("Error al obtener usuarios:", err);
        const errorMsg = err instanceof Error ? err.message : "No se pudo cargar usuarios";
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const perPage = 5;

  const filteredUsers = useMemo(() => {
    return allUsers.filter((u: User) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [allUsers, search]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredUsers.length / perPage) || 1);
    if (page > Math.ceil(filteredUsers.length / perPage) && filteredUsers.length > 0) {
      setPage(1);
    }
  }, [filteredUsers]);

  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice((page - 1) * perPage, page * perPage);
  }, [filteredUsers, page]);

  return {
    users: paginatedUsers,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages
  };
}
