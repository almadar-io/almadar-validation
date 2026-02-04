/**
 * Generate TypeScript error codes from Rust error.rs
 *
 * This script parses the Rust ErrorCode enum and generates a TypeScript
 * version with the same error codes and categories.
 *
 * Usage: npx tsx orbital-shared/validation/generate-error-codes.ts
 *
 * @packageDocumentation
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RUST_ERROR_FILE = join(
  __dirname,
  "../../orbital-rust/crates/orbital-compiler/src/phases/validation/error.rs"
);
const OUTPUT_FILE = join(__dirname, "error-codes.ts");

interface ErrorCodeInfo {
  variant: string;
  code: string;
  category: string;
}

function parseRustErrorCodes(rustCode: string): ErrorCodeInfo[] {
  const codes: ErrorCodeInfo[] = [];

  // Match: ErrorCode::VariantName => "ORB_X_CODE",
  const codeRegex = /ErrorCode::(\w+)\s*=>\s*"([^"]+)"/g;
  let match;

  while ((match = codeRegex.exec(rustCode)) !== null) {
    const [, variant, code] = match;
    codes.push({ variant, code, category: "" });
  }

  // Match category assignments
  const categoryRegex =
    /ErrorCode::(\w+)(?:\s*\|[^=]*)*\s*=>\s*"(\w+)"/g;
  const categorySection = rustCode.match(
    /fn category\(&self\)[^{]*\{([\s\S]*?)^\s{4}\}/m
  );

  if (categorySection) {
    const categoryCode = categorySection[1];
    // Parse each match arm
    const armRegex = /ErrorCode::(\w+)(?:\s*\|\s*ErrorCode::(\w+))*\s*=>\s*"(\w+)"/g;
    let armMatch;

    while ((armMatch = armRegex.exec(categoryCode)) !== null) {
      const category = armMatch[armMatch.length - 1];
      // Find all variants in this arm
      const armText = armMatch[0];
      const variantRegex = /ErrorCode::(\w+)/g;
      let variantMatch;
      while ((variantMatch = variantRegex.exec(armText)) !== null) {
        const variant = variantMatch[1];
        const codeInfo = codes.find((c) => c.variant === variant);
        if (codeInfo) {
          codeInfo.category = category;
        }
      }
    }
  }

  return codes;
}

function inferCategory(code: string): string {
  if (code.startsWith("ORB_E_")) return "entity";
  if (code.startsWith("ORB_T_EVT_")) return "trait_event";
  if (code.startsWith("ORB_T_")) return "trait";
  if (code.startsWith("ORB_P_")) return "page";
  if (code.startsWith("ORB_SLOT_")) return "slot";
  if (code.startsWith("ORB_RUI_")) return "render_ui";
  if (code.startsWith("ORB_EFF_")) return "effect";
  if (code.startsWith("SEXPR_")) return "sexpr";
  if (code.startsWith("ORB_SVC_")) return "service";
  if (code.startsWith("ORB_X_")) return "cross";
  if (code.startsWith("ORB_BINDING_")) return "binding";
  if (code.startsWith("CIRCUIT_")) return "circuit";
  if (code.startsWith("ORB_UI_ICON_")) return "icon";
  if (code.startsWith("ORB_QUERY_")) return "query";
  if (code.startsWith("ORB_S_")) return "schema";
  return "unknown";
}

function generateTypeScript(codes: ErrorCodeInfo[]): string {
  // Group codes by category
  const byCategory = new Map<string, ErrorCodeInfo[]>();
  for (const code of codes) {
    const category = code.category || inferCategory(code.code);
    if (!byCategory.has(category)) {
      byCategory.set(category, []);
    }
    byCategory.get(category)!.push(code);
  }

  // Generate code entries grouped by category
  const categoryOrder = [
    "entity",
    "trait",
    "page",
    "slot",
    "render_ui",
    "effect",
    "sexpr",
    "service",
    "cross",
    "binding",
    "circuit",
    "icon",
    "query",
    "trait_event",
    "schema",
  ];

  const codeEntries: string[] = [];
  for (const category of categoryOrder) {
    const categoryCodes = byCategory.get(category) || [];
    if (categoryCodes.length === 0) continue;

    codeEntries.push(`  // ${category.toUpperCase()} errors`);
    for (const { code } of categoryCodes) {
      codeEntries.push(`  "${code}": "${code}",`);
    }
    codeEntries.push("");
  }

  // Handle any remaining categories
  for (const [category, categoryCodes] of byCategory) {
    if (!categoryOrder.includes(category)) {
      codeEntries.push(`  // ${category.toUpperCase()} errors`);
      for (const { code } of categoryCodes) {
        codeEntries.push(`  "${code}": "${code}",`);
      }
      codeEntries.push("");
    }
  }

  return `/**
 * Orbital Validation Error Codes
 *
 * AUTO-GENERATED from orbital-rust/crates/orbital-compiler/src/phases/validation/error.rs
 * Do not edit directly - run: npx tsx orbital-shared/validation/generate-error-codes.ts
 *
 * Generated: ${new Date().toISOString()}
 */

/**
 * All orbital validation error codes.
 * These match the Rust ErrorCode enum in orbital-rust.
 */
export const ORBITAL_ERROR_CODES = {
${codeEntries.join("\n")}
} as const;

export type OrbitalErrorCode = keyof typeof ORBITAL_ERROR_CODES;

/**
 * Error categories for grouping errors.
 */
export const ERROR_CATEGORIES = [
  "entity",
  "trait",
  "page",
  "slot",
  "render_ui",
  "effect",
  "sexpr",
  "service",
  "cross",
  "binding",
  "circuit",
  "icon",
  "query",
  "trait_event",
  "schema",
] as const;

export type ErrorCategory = (typeof ERROR_CATEGORIES)[number];

/**
 * Get the category for an error code.
 */
export function getErrorCategory(code: string): ErrorCategory {
  if (code.startsWith("ORB_E_")) return "entity";
  if (code.startsWith("ORB_T_EVT_")) return "trait_event";
  if (code.startsWith("ORB_T_")) return "trait";
  if (code.startsWith("ORB_P_")) return "page";
  if (code.startsWith("ORB_SLOT_")) return "slot";
  if (code.startsWith("ORB_RUI_")) return "render_ui";
  if (code.startsWith("ORB_EFF_")) return "effect";
  if (code.startsWith("SEXPR_")) return "sexpr";
  if (code.startsWith("ORB_SVC_")) return "service";
  if (code.startsWith("ORB_X_")) return "cross";
  if (code.startsWith("ORB_BINDING_")) return "binding";
  if (code.startsWith("CIRCUIT_")) return "circuit";
  if (code.startsWith("ORB_UI_ICON_")) return "icon";
  if (code.startsWith("ORB_QUERY_")) return "query";
  if (code.startsWith("ORB_S_")) return "schema";
  return "schema"; // default
}

/**
 * Validation error from the Rust CLI.
 */
export interface OrbitalValidationError {
  /** Error code (e.g., "ORB_E_MISSING_NAME") */
  code: string;
  /** Human-readable error message */
  message: string;
  /** JSON path to the error location */
  path: string;
  /** Suggestion for fixing the error */
  suggestion?: string;
  /** Valid values for enum-like fields */
  validValues?: string[];
}

/**
 * Validation warning from the Rust CLI.
 */
export interface OrbitalValidationWarning {
  /** Warning code */
  code: string;
  /** Human-readable warning message */
  message: string;
  /** JSON path to the warning location */
  path: string;
}

/**
 * Result from running orbital validate CLI.
 */
export interface OrbitalValidationResult {
  /** Whether validation passed (no errors) */
  valid: boolean;
  /** All validation errors */
  errors: OrbitalValidationError[];
  /** All validation warnings */
  warnings: OrbitalValidationWarning[];
}
`;
}

// Main
try {
  console.log(`Reading Rust error codes from: ${RUST_ERROR_FILE}`);
  const rustCode = readFileSync(RUST_ERROR_FILE, "utf-8");

  console.log("Parsing error codes...");
  const codes = parseRustErrorCodes(rustCode);
  console.log(`Found ${codes.length} error codes`);

  console.log("Generating TypeScript...");
  const typescript = generateTypeScript(codes);

  console.log(`Writing to: ${OUTPUT_FILE}`);
  writeFileSync(OUTPUT_FILE, typescript);

  console.log(`\nGenerated ${codes.length} error codes to ${OUTPUT_FILE}`);
} catch (error) {
  console.error("Error generating error codes:", error);
  process.exit(1);
}
