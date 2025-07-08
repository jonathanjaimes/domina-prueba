import { useParams, useNavigate } from "react-router-dom";
import styles from "./UserDetail.module.css";
import { useUserDetail } from "../features/user/hooks/useUserDetail";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading, error } = useUserDetail(id);

  if (loading)
    return (
      <div className={styles.container}>
        Cargando usuario...
        <button
          className={`${styles.backBtn} ${styles.spaced}`}
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    );
  if (error || !user || !user.id || !user.name)
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          {error || "No encontrado"}
        </div>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    );
  const fields = [
    { label: "Nombre", value: user.name },
    { label: "Email", value: user.email },
    { label: "Usuario", value: user.username },
    { label: "Teléfono", value: user.phone },
    { label: "Sitio web", value: user.website },
    { label: "Empresa", value: user.company?.name },
    {
      label: "Dirección",
      value: `${user.address?.street}, ${user.address?.city}`,
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detalle del Usuario</h2>
      <div className={styles.info}>
        {fields.map((f, i) => (
          <div key={i}>
            <span className={styles.label}>{f.label}:</span>
            <span className={styles.value}>{f.value}</span>
          </div>
        ))}
      </div>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default UserDetail;
