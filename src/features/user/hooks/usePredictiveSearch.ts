import { useState, useMemo } from "react";

export function usePredictiveSearch<T extends { name: string }>(items: T[], minLength = 1) {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    if (input.length < minLength) return [];
    return items.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  }, [input, items, minLength]);

  return {
    input,
    setInput,
    showSuggestions,
    setShowSuggestions,
    suggestions,
  };
}
