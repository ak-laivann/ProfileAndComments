import { useCommentFilterStore } from "../store/commentFilterStore";
import { useFetchData } from "./useFetchHook";
import { useMemo } from "react";
import { Comment } from "../props";

export const useComments = () => {
  const { searchQuery, sortColumn, sortDirection, currentPage, setPage } =
    useCommentFilterStore();

  const pageSize = useCommentFilterStore((state) => state.pageSize);
  const setPageSize = useCommentFilterStore((state) => state.setPageSize);

  const { data, isLoading, error, isError } = useFetchData<Comment[]>(
    "comments",
    "https://jsonplaceholder.typicode.com/comments"
  );

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((item) =>
      [item.name, item.email, item.body].some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const sorted = useMemo(() => {
    if (!filtered) return [];
    if (!sortColumn || sortDirection === "none") return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      } else {
        return sortDirection === "asc"
          ? (aVal as number) - (bVal as number)
          : (bVal as number) - (aVal as number);
      }
    });
  }, [filtered, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    if (!sorted) return [];
    const start = (currentPage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, currentPage, pageSize]);

  const totalCount = sorted.length;

  return {
    data: paginatedData,
    isLoading,
    error,
    isError,
    currentPage,
    pageSize,
    setPage,
    setPageSize,
    totalCount,
  };
};
