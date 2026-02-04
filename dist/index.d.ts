import { OrbitalValidationResult } from './error-codes.js';
export { ERROR_CATEGORIES, ErrorCategory, LLMErrorContext, ORBITAL_ERROR_CODES, OrbitalErrorCode, OrbitalValidationError, OrbitalValidationWarning, ValidationError, getErrorCategory } from './error-codes.js';

/**
 * Orbital Validation Module
 *
 * Exports error codes and types for validation.
 * The actual validation is done by the Rust CLI (orbital validate).
 *
 * Source of truth: orbital-rust/crates/orbital-compiler/src/phases/validation/error.rs
 */

/**
 * Validate a full orbital unit.
 * @deprecated Use `orbital validate` CLI instead. This stub always returns valid.
 */
declare function validateFullOrbitalUnit(_orbital: unknown): OrbitalValidationResult;
/**
 * Validate an orbital schema.
 * @deprecated Use `orbital validate` CLI instead. This stub always returns valid.
 */
declare function validateOrbitalSchema(_schema: unknown): OrbitalValidationResult;

export { OrbitalValidationResult, validateFullOrbitalUnit, validateOrbitalSchema };
