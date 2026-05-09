import { useState } from 'react';
import { useGithubUser } from '../hooks/useGithubUser';
import UserCard from '../components/UserCard';
import ErrorCard from '../components/ErrorCard';

function Home() {
  const [username, setUsername] = useState('');
  const { data, loading, error, fetchUser } = useGithubUser();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (username.trim()) {
      await fetchUser(username.trim());
    }
  };

  return (
    <div className="my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control github-input"
                placeholder="Digite o nome do usuário..."
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <button
                type="submit"
                className="btn btn-dark github-button px-4"
                disabled={loading}
              >
                Buscar
              </button>
            </div>
          </form>

          {error && <ErrorCard error={error} />}

          {data && <UserCard user={data} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
