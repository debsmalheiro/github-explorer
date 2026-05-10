import { useEffect, useTransition, useActionState, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchUserAction } from '../actions/searchUser';
import UserCard from '../components/UserCard';
import { SearchForm } from '../components/SearchForm';

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
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="h2 fw-bold mb-4">Buscar usuário do GitHub</h1>

          <SearchForm
            username={username}
            onUsernameChange={setUsername}
            formAction={formAction}
            isFormPending={isFormPending}
          />

          {formState.error && (
            <div
              className="alert alert-warning d-flex align-items-center"
              role="alert"
            >
              <i className="bi bi-person-x fs-4 me-3" />
              <div className="flex-grow-1">
                <h5 className="alert-heading mb-1">Usuário não encontrado</h5>
                <p className="mb-0">{formState.error}</p>
              </div>
            </div>
          )}

          {formState.user && <UserCard user={formState.user} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
