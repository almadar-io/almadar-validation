import { describe, it, expect } from 'vitest';
import {
    ORBITAL_ERROR_CODES,
    ERROR_CATEGORIES,
    getErrorCategory,
    validateFullOrbitalUnit,
    validateOrbitalSchema,
} from '../index';

// ============================================================================
// Error Codes
// ============================================================================

describe('ORBITAL_ERROR_CODES', () => {
    it('is a non-empty object', () => {
        expect(Object.keys(ORBITAL_ERROR_CODES).length).toBeGreaterThan(0);
    });

    it('has consistent key-value pairs (key equals value for error codes)', () => {
        // Error codes use the pattern ORB_*
        const errorKeys = Object.keys(ORBITAL_ERROR_CODES).filter(k => k.startsWith('ORB_'));
        expect(errorKeys.length).toBeGreaterThan(0);
        for (const key of errorKeys) {
            expect((ORBITAL_ERROR_CODES as Record<string, string>)[key]).toBe(key);
        }
    });

    it('includes error codes for all major categories', () => {
        // Entity errors
        expect(ORBITAL_ERROR_CODES.ORB_E_MISSING_NAME).toBe('ORB_E_MISSING_NAME');
        // Trait errors — verify at least one ORB_T_ code exists
        const traitKeys = Object.keys(ORBITAL_ERROR_CODES).filter(k => k.startsWith('ORB_T_'));
        expect(traitKeys.length).toBeGreaterThan(0);
        // Page errors
        expect(ORBITAL_ERROR_CODES.ORB_P_MISSING_NAME).toBe('ORB_P_MISSING_NAME');
    });
});

// ============================================================================
// Error Categories
// ============================================================================

describe('ERROR_CATEGORIES', () => {
    it('contains expected categories', () => {
        const expected = ['entity', 'trait', 'page', 'effect', 'binding', 'cross'];
        for (const cat of expected) {
            expect(ERROR_CATEGORIES).toContain(cat);
        }
    });

    it('has no duplicates', () => {
        const unique = new Set(ERROR_CATEGORIES);
        expect(unique.size).toBe(ERROR_CATEGORIES.length);
    });
});

// ============================================================================
// getErrorCategory
// ============================================================================

describe('getErrorCategory', () => {
    it('maps entity error codes to entity category', () => {
        expect(getErrorCategory('ORB_E_MISSING_NAME')).toBe('entity');
        expect(getErrorCategory('ORB_E_NO_FIELDS')).toBe('entity');
    });

    it('maps trait error codes to trait category', () => {
        expect(getErrorCategory('ORB_T_MISSING_NAME')).toBe('trait');
    });

    it('maps page error codes to page category', () => {
        expect(getErrorCategory('ORB_P_MISSING_NAME')).toBe('page');
    });

    it('maps cross-orbital error codes to cross category', () => {
        expect(getErrorCategory('ORB_X_ORPHAN_LISTENER')).toBe('cross');
    });

    it('maps binding error codes to binding category', () => {
        expect(getErrorCategory('ORB_BINDING_INVALID_FORMAT')).toBe('binding');
    });
});

// ============================================================================
// Stub validation functions
// ============================================================================

describe('Stub validation functions', () => {
    it('validateFullOrbitalUnit always returns valid', () => {
        const result = validateFullOrbitalUnit({});
        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
        expect(result.warnings).toEqual([]);
    });

    it('validateOrbitalSchema always returns valid', () => {
        const result = validateOrbitalSchema({});
        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
        expect(result.warnings).toEqual([]);
    });
});
