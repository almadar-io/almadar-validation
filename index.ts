/**
 * Orbital Validation Module
 *
 * Exports error codes and types for validation.
 * The actual validation is done by the Rust CLI (orbital validate).
 *
 * Source of truth: orbital-rust/crates/orbital-compiler/src/phases/validation/error.rs
 */

export * from './error-codes.js';

import type { OrbitalValidationResult } from './error-codes.js';

// ============================================================================
// Stub Functions
// These provide API compatibility while actual validation is in Rust CLI.
// Server should use `orbital validate` CLI instead.
// ============================================================================

/**
 * Validate a full orbital unit.
 * @deprecated Use `orbital validate` CLI instead. This stub always returns valid.
 */
export function validateFullOrbitalUnit(_orbital: unknown): OrbitalValidationResult {
  return { valid: true, errors: [], warnings: [] };
}

/**
 * Validate an orbital schema.
 * @deprecated Use `orbital validate` CLI instead. This stub always returns valid.
 */
export function validateOrbitalSchema(_schema: unknown): OrbitalValidationResult {
  return { valid: true, errors: [], warnings: [] };
}
