import type { SortOption } from '../types/githubRepositoriesUser';
import { ITEMS_PER_PAGE_OPTIONS } from '../hooks/useGithubRepositoriesUser';

interface RepositoriesSortProps {
  itemsPerPage: number;
  sortOption: SortOption;
  onItemsPerPageChange: (items: number) => void;
  onSortOptionChange: (option: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'stargazers_count-desc', label: 'Estrelas (maior para menor)' },
  { value: 'stargazers_count-asc', label: 'Estrelas (menor para maior)' },
  { value: 'full_name-asc', label: 'Nome (A-Z)' },
  { value: 'full_name-desc', label: 'Nome (Z-A)' },
  { value: 'created_at-desc', label: 'Data de criação (mais recentes)' },
  { value: 'created_at-asc', label: 'Data de criação (mais antigos)' },
  { value: 'language-asc', label: 'Linguagem (A-Z)' },
  { value: 'language-desc', label: 'Linguagem (Z-A)' },
];

export default function RepositoriesSort({
  itemsPerPage,
  sortOption,
  onItemsPerPageChange,
  onSortOptionChange,
}: RepositoriesSortProps) {
  return (
    <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-4 p-3 bg-body-tertiary rounded">
      <div className="d-flex align-items-center gap-2">
        <label
          htmlFor="itemsPerPage"
          className="form-label mb-0 small fw-medium"
        >
          Itens por página:
        </label>
        <select
          id="itemsPerPage"
          className="form-select form-select-sm"
          style={{ width: 'auto' }}
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {ITEMS_PER_PAGE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex align-items-center gap-2">
        <label htmlFor="sortBy" className="form-label mb-0 small fw-medium">
          Ordenar por:
        </label>
        <select
          id="sortBy"
          className="form-select form-select-sm"
          style={{ width: 'auto' }}
          value={sortOption}
          onChange={(e) => onSortOptionChange(e.target.value as SortOption)}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
