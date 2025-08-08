export const getInitials = (username: string) => {
  return username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

// I am manually maintaining the pagination numbers. TODO: Should refactor this somehow.
export function getPaginationNumbers(totalPages: number, currentPage: number) {
  const pages: (number | "ellipsis")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis");
    } else {
      pages.push(2);
    }

    // since i will have either ellipsis or 2, i am gonna start with 3 and current -1 -> which should probably give me 6 if current page is 7
    const startPage = Math.max(3, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // i will display the next three numbers with this loop. if current is 6, i will show 5,6,7
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== 2 && i !== totalPages) pages.push(i);
    }

    // if i came near the end, i dont need ellipsis
    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    // add the last element
    pages.push(totalPages);
  }

  return pages;
}
