import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGithubUser } from '../hooks/useGithubUser';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateUsername } from '../utils/validation';
import { getInputValidationClassName } from '../utils/form';
import UserCard from '../components/UserCard';
import ErrorCard from '../components/ErrorCard';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    value: username,
    setValue: setUsername,
    touched,
    setTouched,
    validation,
    showFeedback,
  } = useFormValidation(validateUsername);

  const { data, loading, error, fetchUser } = useGithubUser();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setUsername(query);
      fetchUser(query);
    }
  }, []);

  const inputClassName = getInputValidationClassName(
    'form-control github-input',
    validation.isValid,
    showFeedback
  );

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setTouched(true);

    if (validation.isValid) {
      const trimmed = username.trim();
      setSearchParams({ q: trimmed });
      await fetchUser(trimmed);
    }
  };

  const handleChange = (value: string) => {
    setUsername(value);
    if (touched) {
      setTouched(true);
    }
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username-input" className="form-label fw-medium">
                Busca por nome de usuário do GitHub
              </label>
              <div className="input-group input-group-lg">
                <input
                  id="username-input"
                  type="text"
                  className={inputClassName}
                  placeholder="Ex: facebook, google, vercel"
                  value={username}
                  onChange={({ target }) => handleChange(target.value)}
                  onBlur={handleBlur}
                  aria-invalid={!validation.isValid && username.length > 0}
                  aria-describedby="username-feedback"
                />
                <button
                  type="submit"
                  className="btn btn-dark github-button px-4"
                  disabled={loading || !validation.isValid}
                >
                  {loading ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <span>Buscando...</span>
                    </div>
                  ) : (
                    'Buscar'
                  )}
                </button>
              </div>
              {showFeedback && (
                <div
                  id="username-feedback"
                  className={`validation-feedback ${
                    validation.isValid ? 'valid' : 'invalid'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {validation.message}
                </div>
              )}
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
