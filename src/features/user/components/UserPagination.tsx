import React from "react";

type Props = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

import styles from "./UserPagination.module.css";
import { useIsMobile } from "../hooks/useIsMobile";

const UserPagination: React.FC<Props> = ({ page, setPage, totalPages }) => {
  const isMobile = useIsMobile();

  if (totalPages <= 1) return null;

  if (isMobile) {
    return (
      <div className={styles.pagination}>
        <select
          className={styles.pageSelect}
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              Página {num}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Anterior
      </button>
      <div className={styles.pagesContainer}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={
              num === page
                ? `${styles.pageButton} ${styles.active}`
                : styles.pageButton
            }
            onClick={() => setPage(num)}
            disabled={num === page}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default UserPagination;
