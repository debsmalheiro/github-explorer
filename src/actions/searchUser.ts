import { validateUsername } from '../utils/validation';
import { githubService } from '../services/githubService';
import type { GithubUser } from '../types/githubUser';

export interface SearchUserState {
  error: string | null;
  user: GithubUser | null;
}

export async function searchUserAction(
  prevState: SearchUserState,
  formData: FormData
): Promise<SearchUserState> {
  const username = formData.get('username') as string;

  const validation = validateUsername(username);
  if (!validation.isValid) {
    return { ...prevState, error: validation.message, user: null };
  }

  try {
    const user = await githubService.getUser(username);
    return { error: null, user };
  } catch {
    return { ...prevState, error: 'Usuário não encontrado', user: null };
  }
}
