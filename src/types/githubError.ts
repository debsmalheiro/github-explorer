import type { AxiosError } from 'axios';

export type GithubErrorType = 'not_found' | 'network';

export interface GithubError {
  status: number;
  message: string;
  type: GithubErrorType;
}

export function createGithubError(error: unknown): GithubError {
  const axiosError = error as AxiosError;

  if (axiosError?.response) {
    return {
      status: axiosError.response.status,
      message: 'Usuário não encontrado.',
      type: 'not_found',
    };
  }

  return {
    status: 0,
    message: axiosError?.message || 'Erro de conexão.',
    type: 'network',
  };
}
