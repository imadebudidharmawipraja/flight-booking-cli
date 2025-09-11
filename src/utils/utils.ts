
/**
 * Validates that a string can be parsed as a number
 */
export function parseNumber(value: string, maxNumber?: number): {
  valid: boolean;
  amount?: number;
  error?: string;
} {
  const amount = parseFloat(value);

  if (maxNumber && amount > maxNumber) {
    return {
      valid: false,
      error: 'value is exceeding the limit given',
    };
  }

  if (isNaN(amount)) {
    return { valid: false, error: 'Invalid value. Please enter a number.' };
  }

  if (amount <= 0) {
    return { valid: false, error: 'value must be positive.' };
  }

  return { valid: true, amount };
}

export function arrayToString<T>(array: T[], key: keyof T): string {
  if (!array || !Array.isArray(array)) {
    return '';
  }

  return array.map(item => {
    const value = item[key];
    // Ensure the value is a string or can be safely converted to one.
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return value.toString();
    }
    return '';
  }).join(', ');
}