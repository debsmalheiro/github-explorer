export function getInputValidationClassName(
  baseClassName: string,
  isValid: boolean | null,
  showFeedback: boolean
): string {
  const classes = [baseClassName];

  if (showFeedback && isValid === true) {
    classes.push('is-valid');
  }
  if (showFeedback && isValid === false) {
    classes.push('is-invalid');
  }

  return classes.filter(Boolean).join(' ');
}
