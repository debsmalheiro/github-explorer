export default function RepositorySkeleton() {
  return (
    <div className="card shadow-sm border-0 h-auto">
      <div className="card-body p-4">
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-start justify-content-between gap-2">
            <div
              className="skeleton skeleton-title"
              style={{ width: '180px' }}
            />
          </div>

          <div className="skeleton skeleton-text" style={{ width: '90%' }} />
          <div className="skeleton skeleton-text-short" />

          <div className="d-flex align-items-center gap-4 mt-2">
            <div className="skeleton skeleton-badge" />
            <div className="skeleton skeleton-badge" />
            <div className="skeleton skeleton-badge" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RepositoryListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="d-flex flex-column gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <RepositorySkeleton key={index} />
      ))}
    </div>
  );
}
