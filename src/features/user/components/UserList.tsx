import React from "react";

import styles from "./UserList.module.css";
import { useNavigate } from "react-router-dom";
type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const UserList: React.FC<Props> = ({ users, loading, error }) => {
  const navigate = useNavigate();
  if (loading) return <div className={styles.loading}>Cargando usuarios...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!users.length) return <div>No hay usuarios.</div>;
  return (
    <ul className={styles.list}>
      {users.map(user => (
        <li
          key={user.id}
          className={styles.item}
          onClick={() => navigate(`/users/${user.id}`)}
        >
          <span className={styles.name}>{user.name}</span>
          <span className={styles.email}>({user.email})</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
