import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGithubUser } from '../hooks/useGithubUser';
import UserProfile from '../components/UserProfile';
import RepositoriesList from '../components/RepositoriesList';
import ErrorCard from '../components/ErrorCard';
import ProfileSkeleton from '../components/ProfileSkeleton';
import { RepositoryListSkeleton } from '../components/RepositorySkeleton';

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
      <>
        <ProfileSkeleton />
        <div className="mt-4">
          <RepositoryListSkeleton count={5} />
        </div>
      </>
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
      <RepositoriesList user={data.login} />
    </>
  );
}

export default Profile;
