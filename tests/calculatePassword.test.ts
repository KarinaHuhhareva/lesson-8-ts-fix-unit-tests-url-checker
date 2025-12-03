import { calculatePasswordStrength } from '../src/PasswordStrength';

describe('calculatePasswordStrength', () => {

    test('should return "Very Weak" for password with strength 0-2', () => {
        expect(calculatePasswordStrength("a")).toBe("Very Weak");
        expect(calculatePasswordStrength("abcdefg")).toBe("Very Weak");
        expect(calculatePasswordStrength("abcdefg1")).toBe("Weak");
    });

    test('should return "Weak" for password with strength = 3', () => {
        expect(calculatePasswordStrength("abcd1234")).toBe("Weak");
    });

    test('should return "Moderate" for password with strength =4', () => {
        expect(calculatePasswordStrength("Abcd1234")).toBe("Moderate");
    });

    test('should return "Strong" for password with strength >=5', () => {
        expect(calculatePasswordStrength("Abcd1234!!XX")).toBe("Strong");
    });

    test('should classify long but simple password correctly', () => {
        expect(calculatePasswordStrength("aaaaaaaaaaaa")).toBe("Weak");
    });

    test('should handle passwords with only special characters', () => {
        expect(calculatePasswordStrength("!!!!!!!!")).toBe("Very Weak");
    });

    test('should handle a fully mixed password but short (length < 8', () => {
        expect(calculatePasswordStrength("Abc2!")).toBe("Moderate");
    });

});
