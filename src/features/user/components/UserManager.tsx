import styles from "./UserManager.module.css";
import UserSearch from "./UserSearch";
import UserList from "./UserList";
import UserPagination from "./UserPagination";
import { useUsers } from "../hooks/useUsers";

const UserManager = () => {
  const { users, loading, error, setSearch, page, setPage, totalPages } =
    useUsers();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gestión de Usuarios</h2>
      <UserSearch setSearch={setSearch} users={users} />
      <UserList users={users} loading={loading} error={error} />
      <UserPagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default UserManager;
