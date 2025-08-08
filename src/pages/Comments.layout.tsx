import { SortAndSearchBar, CommentsTable, Pagination } from "../components";
import { AsyncUIWrapper } from "../utils";
import { useComments } from "../hooks";
import { useCommentFilterStore } from "../store/commentFilterStore";

export const CommentsLayout = () => {
  const {
    data,
    isLoading,
    error,
    isError,
    currentPage,
    pageSize,
    setPage,
    setPageSize,
    totalCount,
  } = useComments();

  const { searchQuery, setSearchQuery, sortDirection, toggleSort, sortColumn } =
    useCommentFilterStore();

  return (
    <>
      <SortAndSearchBar
        onSearchChange={setSearchQuery}
        onSortToggle={toggleSort}
        searchValue={searchQuery}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
      <AsyncUIWrapper isLoading={isLoading} isError={isError} error={error}>
        <CommentsTable data={data ?? []} />
        <Pagination
          currentPage={currentPage}
          total={totalCount}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </AsyncUIWrapper>
    </>
  );
};
