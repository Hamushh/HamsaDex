interface PaginationProps {
  page: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

function Pagination({
  page,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="pagination">
      <button onClick={onPrevious} disabled={!hasPrevious}>
        Previous
      </button>

      <span>Page {page}</span>

      <button onClick={onNext} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;