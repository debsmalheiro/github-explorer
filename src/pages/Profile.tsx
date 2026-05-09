import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGithubUser } from '../hooks/useGithubUser';
import UserProfile from '../components/UserProfile';
import ErrorCard from '../components/ErrorCard';

function Profile() {
  const { username } = useParams<{ username: string }>();
  const { data, loading, error, fetchUser } = useGithubUser();

  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, [username]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <UserProfile user={data} />
    </>
  );
}

export default Profile;
