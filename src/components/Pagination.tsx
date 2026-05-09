interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Navegação de páginas">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Anterior"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <li
              key={index}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ) : (
            <li key={index} className="page-item disabled">
              <span className="page-link">{page}</span>
            </li>
          )
        )}

        <li
          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Próximo"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
      {totalItems > 0 && (
        <div className="text-center text-secondary small mt-2">
          Total de {totalItems} repositório{totalItems !== 1 ? 's' : ''}
        </div>
      )}
    </nav>
  );
}
