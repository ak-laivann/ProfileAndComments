import { create } from "zustand";
import { persist } from "zustand/middleware";

type SortColumn = "postId" | "name" | "email" | null;
type SortDirection = "none" | "asc" | "desc";

interface CommentFilterStore {
  searchQuery: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  setSearchQuery: (query: string) => void;
  toggleSort: (column: SortColumn) => void;
  clearSort: () => void;
}

export const useCommentFilterStore = create<CommentFilterStore>()(
  persist(
    (set, get) => ({
      searchQuery: "",
      sortColumn: null,
      sortDirection: "none",

      setSearchQuery: (query) => set({ searchQuery: query }),

      toggleSort: (column) => {
        const { sortColumn, sortDirection } = get();

        if (sortColumn !== column) {
          set({ sortColumn: column, sortDirection: "asc" });
        } else {
          const next = getNextSortDirection(sortDirection);
          set({
            sortDirection: next,
            sortColumn: next === "none" ? null : column,
          });
        }
      },

      clearSort: () => set({ sortColumn: null, sortDirection: "none" }),
    }),
    {
      name: "comment-filter-store",
    }
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
