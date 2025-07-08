import React from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  setSearch: (value: string) => void;
  users: User[];
};

import styles from "./UserSearch.module.css";
import { usePredictiveSearch } from "../hooks/usePredictiveSearch";

const UserSearch: React.FC<Props> = ({ setSearch, users }) => {
  const navigate = useNavigate();
  const {
    input: suggestInput,
    setInput: setSuggestInput,
    showSuggestions,
    setShowSuggestions,
    suggestions,
  } = usePredictiveSearch(users, 1);

  const handleSelect = (user: User) => {
    setShowSuggestions(false);
    setSuggestInput("");
    setSearch(user.name);
    navigate(`/users/${user.id}`);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        className={styles.input}
        placeholder="Buscar usuario por nombre..."
        value={suggestInput}
        onChange={(e) => {
          setSuggestInput(e.target.value);
          setShowSuggestions(true);
        }}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onFocus={() => suggestInput && setShowSuggestions(true)}
        autoComplete="off"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map((user) => (
            <li
              key={user.id}
              className={styles.suggestion}
              onMouseDown={() => handleSelect(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
