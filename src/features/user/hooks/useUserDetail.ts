import { useEffect, useState } from "react";
import { fetchUserById } from "../services/userService";
import type { User } from "../services/userService";

export function useUserDetail(id?: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const getUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (err) {
        console.error("Error al obtener usuario:", err);
        const errorMsg = err instanceof Error ? err.message : "No se pudo cargar el usuario";
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  return { user, loading, error };
}
