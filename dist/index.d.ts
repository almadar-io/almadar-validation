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
/**
 * Validate a full orbital unit.
 * @deprecated Use `orbital validate` CLI instead. This stub always returns valid.
 */
export declare function validateFullOrbitalUnit(_orbital: unknown): OrbitalValidationResult;
/**
 * Validate an orbital schema.
 * @deprecated Use `orbital validate` CLI instead. This stub always returns valid.
 */
export declare function validateOrbitalSchema(_schema: unknown): OrbitalValidationResult;
