import { useEffect, useTransition, useActionState, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchUserAction } from '../actions/searchUser';
import UserCard from '../components/UserCard';
import UserCardSkeleton from '../components/UserCardSkeleton';
import { SearchForm } from '../components/SearchForm';
import { Icon } from '../components/Icon';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, startTransition] = useTransition();

  const [formState, formAction, isFormPending] = useActionState(
    searchUserAction,
    {
      error: null,
      user: null,
    }
  );

  const [username, setUsername] = useState(() => searchParams.get('q') || '');

  useEffect(() => {
    if (formState.user) {
      const userLogin = formState.user.login;
      startTransition(() => setSearchParams({ q: userLogin }));
    }
  }, [formState.user, startTransition, setSearchParams]);

  return (
    <div className="my-4">
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">Buscar usuário do GitHub</h1>
          <p className="home-subtitle">
            Encontre perfis, repositórios e muito mais
          </p>
        </header>

        <SearchForm
          username={username}
          onUsernameChange={setUsername}
          formAction={formAction}
          isFormPending={isFormPending}
        />

        {formState.error && (
          <div className="error-alert" role="alert">
            <Icon name="person-x" className="error-alert-icon" />
            <div className="error-alert-content">
              <h3 className="error-alert-title">Usuário não encontrado</h3>
              <p className="error-alert-message">{formState.error}</p>
            </div>
          </div>
        )}

        {isFormPending && <UserCardSkeleton />}
        {!isFormPending && formState.user && <UserCard user={formState.user} />}
      </div>
    </div>
  );
}

export default Home;
