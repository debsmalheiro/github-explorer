export interface ValidationResult {
  isValid: boolean;
  message: string;
}

const USERNAME_MAX_LENGTH = 39;

export function validateUsername(username: string): ValidationResult {
  if (!username.trim()) {
    return { isValid: false, message: 'O nome de usuário é obrigatório' };
  }

  if (username.length > USERNAME_MAX_LENGTH) {
    return {
      isValid: false,
      message: `Máximo de ${USERNAME_MAX_LENGTH} caracteres`,
    };
  }

  if (username.startsWith('-') || username.endsWith('-')) {
    return {
      isValid: false,
      message: 'Não pode começar ou terminar com hífen',
    };
  }

  if (username.includes('--')) {
    return { isValid: false, message: 'Não pode ter hífens consecutivos' };
  }

  const validPattern = /^[a-zA-Z0-9-]+$/;
  if (!validPattern.test(username)) {
    return {
      isValid: false,
      message: 'Apenas letras, números e hífens são permitidos',
    };
  }

  return { isValid: true, message: 'Nome de usuário válido' };
}
