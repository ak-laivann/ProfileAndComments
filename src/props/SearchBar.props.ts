export interface SearchBarProps {
  sortColumn: string | null;
  sortDirection: "none" | "asc" | "desc";
  onSortToggle: (columnKey: SortColumn) => void;
  searchValue: string;
  onSearchChange: (val: string) => void;
}

export type SortColumn = "postId" | "name" | "email" | null;
export type SortDirection = "none" | "asc" | "desc";
