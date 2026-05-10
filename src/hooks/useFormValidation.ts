import { useState, useMemo } from 'react';
import type { ValidationResult } from '../utils/validation';

export function useFormValidation(
  validateFn: (value: string) => ValidationResult
) {
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState('');

  const validation = useMemo(() => validateFn(value), [value, validateFn]);

  const showFeedback = touched || value.length > 0;

  return {
    value,
    setValue,
    touched,
    setTouched,
    validation,
    showFeedback,
  };
}
