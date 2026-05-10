export default function RepositoryDetailsSkeleton() {
  return (
    <div className="my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div
            className="skeleton skeleton-text"
            style={{ width: '120px', height: '20px', marginBottom: '12px' }}
          />

          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div style={{ flex: 1 }}>
                  <div
                    className="skeleton skeleton-title"
                    style={{ width: '250px', marginBottom: '8px' }}
                  />
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '80%' }}
                  />
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <div
                  className="skeleton skeleton-badge"
                  style={{ width: '70px' }}
                />
                <div
                  className="skeleton skeleton-badge"
                  style={{ width: '60px' }}
                />
                <div
                  className="skeleton skeleton-badge"
                  style={{ width: '60px' }}
                />
                <div
                  className="skeleton skeleton-badge"
                  style={{ width: '60px' }}
                />
                <div
                  className="skeleton skeleton-badge"
                  style={{ width: '80px' }}
                />
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '80px', marginBottom: '4px' }}
                  />
                  <div
                    className="skeleton skeleton-text-short"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="col-sm-6">
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '100px', marginBottom: '4px' }}
                  />
                  <div
                    className="skeleton skeleton-text-short"
                    style={{ width: '100px' }}
                  />
                </div>
                <div className="col-sm-6">
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '90px', marginBottom: '4px' }}
                  />
                  <div
                    className="skeleton skeleton-badge"
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="col-sm-6">
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '70px', marginBottom: '4px' }}
                  />
                  <div
                    className="skeleton skeleton-text-short"
                    style={{ width: '50px' }}
                  />
                </div>
                <div className="col-sm-6">
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '50px', marginBottom: '4px' }}
                  />
                  <div
                    className="skeleton skeleton-text-short"
                    style={{ width: '60px' }}
                  />
                </div>
                <div className="col-sm-6">
                  <div
                    className="skeleton skeleton-text"
                    style={{ width: '40px', marginBottom: '4px' }}
                  />
                  <div
                    className="skeleton skeleton-text-short"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div
                  className="skeleton skeleton-text"
                  style={{ width: '50px', marginBottom: '8px' }}
                />
                <div className="d-flex flex-wrap gap-2">
                  <div
                    className="skeleton skeleton-badge"
                    style={{ width: '70px' }}
                  />
                  <div
                    className="skeleton skeleton-badge"
                    style={{ width: '90px' }}
                  />
                  <div
                    className="skeleton skeleton-badge"
                    style={{ width: '60px' }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div
                  className="skeleton skeleton-button"
                  style={{ width: '140px', height: '38px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
