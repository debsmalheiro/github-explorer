export default function ProfileSkeleton() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-5">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          <div
            className="skeleton skeleton-avatar"
            style={{ width: '120px', height: '120px' }}
          />
          <div className="flex-grow-1 text-center text-md-start">
            <div
              className="skeleton skeleton-title"
              style={{ width: '200px', marginBottom: '12px' }}
            />
            <div
              className="skeleton skeleton-text"
              style={{ width: '150px', marginBottom: '20px' }}
            />

            <div
              className="skeleton skeleton-text"
              style={{ width: '100%', marginBottom: '4px' }}
            />
            <div
              className="skeleton skeleton-text-short"
              style={{ marginBottom: '20px' }}
            />

            <div className="d-flex justify-content-center justify-content-md-start gap-4 mb-3">
              <div
                className="skeleton skeleton-text"
                style={{ width: '100px' }}
              />
              <div
                className="skeleton skeleton-text"
                style={{ width: '100px' }}
              />
              <div
                className="skeleton skeleton-text"
                style={{ width: '110px' }}
              />
            </div>

            <div className="d-flex flex-column flex-md-row gap-3 mb-3">
              <div
                className="skeleton skeleton-text"
                style={{ width: '120px' }}
              />
              <div
                className="skeleton skeleton-text"
                style={{ width: '100px' }}
              />
              <div
                className="skeleton skeleton-text"
                style={{ width: '150px' }}
              />
            </div>

            <div
              className="skeleton skeleton-text"
              style={{ width: '140px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
