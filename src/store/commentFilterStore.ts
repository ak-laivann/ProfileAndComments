import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SortColumn, SortDirection } from "../props";

interface CommentFilterStore {
  searchQuery: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  setSearchQuery: (query: string) => void;
  toggleSort: (column: SortColumn) => void;
  currentPage: number;
  setPage: (page: number) => void;
  clearSort: () => void;
  pageSize: number;
  setPageSize: (size: number) => void;
}

export const useCommentFilterStore = create<CommentFilterStore>()(
  persist(
    (set, get) => ({
      searchQuery: "",
      sortColumn: null,
      sortDirection: "none",
      currentPage: 1,
      setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
      pageSize: 10,
      setPageSize: (size) => set({ pageSize: size, currentPage: 1 }),

      toggleSort: (column) => {
        const { sortColumn, sortDirection } = get();
        if (sortColumn !== column) {
          set({ sortColumn: column, sortDirection: "asc", currentPage: 1 });
        } else {
          const next = getNextSortDirection(sortDirection);
          set({
            sortDirection: next,
            sortColumn: next === "none" ? null : column,
            currentPage: 1,
          });
        }
      },

      clearSort: () =>
        set({
          sortColumn: null,
          sortDirection: "none",
          searchQuery: "",
          currentPage: 1,
        }),

      setPage: (page) => set({ currentPage: page }),
    }),
    { name: "comment-filter-store" }
  )
);

function getNextSortDirection(current: SortDirection): SortDirection {
  switch (current) {
    case "none":
      return "asc";
    case "asc":
      return "desc";
    case "desc":
      return "none";
    default:
      return "none";
  }
}
