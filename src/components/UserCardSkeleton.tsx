export default function UserCardSkeleton() {
  return (
    <div className="user-card">
      <div className="user-card-inner">
        <div className="user-card-content">
          <div className="skeleton skeleton-avatar" />
          <div className="user-card-info">
            <div className="skeleton skeleton-title" />
            <div className="user-card-stats">
              <div className="skeleton skeleton-badge" />
              <div className="skeleton skeleton-badge" />
              <div className="skeleton skeleton-badge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
