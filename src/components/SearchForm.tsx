import { validateUsername } from '../utils/validation';
import { getInputValidationClassName } from '../utils/form';

interface SearchFormProps {
  username: string;
  onUsernameChange: (value: string) => void;
  formAction: (formData: FormData) => void;
  isFormPending: boolean;
}

export function SearchForm({
  username,
  onUsernameChange,
  formAction,
  isFormPending,
}: SearchFormProps) {
  const validation = validateUsername(username);
  const inputClassName = getInputValidationClassName(
    'form-control github-input',
    validation.isValid,
    username.length > 0
  );

  return (
    <form action={formAction} className="mb-4">
      <div>
        <label htmlFor="username-input" className="form-label fw-medium">
          Busca por nome de usuário do GitHub
        </label>
        <div className="input-group input-group-lg">
          <input
            id="username-input"
            name="username"
            type="text"
            className={inputClassName}
            placeholder="Ex: facebook, google, vercel"
            value={username}
            onChange={({ target }) => onUsernameChange(target.value)}
            aria-invalid={!validation.isValid && username.length > 0}
            aria-describedby="username-feedback"
          />
          <button
            type="submit"
            className="btn btn-dark github-button px-4"
            disabled={isFormPending || !validation.isValid}
          >
            {isFormPending ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
        {username.length > 0 && (
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
  );
}
