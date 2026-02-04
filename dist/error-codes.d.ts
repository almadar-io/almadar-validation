/**
 * Orbital Validation Error Codes
 *
 * AUTO-GENERATED from orbital-rust/crates/orbital-compiler/src/phases/validation/error.rs
 * Do not edit directly - run: npx tsx orbital-shared/validation/generate-error-codes.ts
 *
 * Generated: 2026-01-29T09:28:51.606Z
 */
/**
 * All orbital validation error codes.
 * These match the Rust ErrorCode enum in orbital-rust.
 */
export declare const ORBITAL_ERROR_CODES: {
    readonly ORB_E_MISSING_NAME: "ORB_E_MISSING_NAME";
    readonly ORB_E_NO_FIELDS: "ORB_E_NO_FIELDS";
    readonly ORB_E_INVALID_FIELD_TYPE: "ORB_E_INVALID_FIELD_TYPE";
    readonly ORB_E_DUPLICATE_FIELD: "ORB_E_DUPLICATE_FIELD";
    readonly ORB_E_INVALID_FIELD_NAME: "ORB_E_INVALID_FIELD_NAME";
    readonly ORB_E_MISSING_COLLECTION: "ORB_E_MISSING_COLLECTION";
    readonly ORB_E_INVALID_RELATION: "ORB_E_INVALID_RELATION";
    readonly ORB_E_EMPTY_ENUM_VALUES: "ORB_E_EMPTY_ENUM_VALUES";
    readonly ORB_T_UNDEFINED_TRAIT: "ORB_T_UNDEFINED_TRAIT";
    readonly ORB_T_INVALID_FORMAT: "ORB_T_INVALID_FORMAT";
    readonly ORB_T_INVALID_CATEGORY: "ORB_T_INVALID_CATEGORY";
    readonly ORB_T_NO_INITIAL_STATE: "ORB_T_NO_INITIAL_STATE";
    readonly ORB_T_MULTIPLE_INITIAL_STATES: "ORB_T_MULTIPLE_INITIAL_STATES";
    readonly ORB_T_DUPLICATE_STATE: "ORB_T_DUPLICATE_STATE";
    readonly ORB_T_INVALID_TRANSITION: "ORB_T_INVALID_TRANSITION";
    readonly ORB_T_DUPLICATE_TRANSITION: "ORB_T_DUPLICATE_TRANSITION";
    readonly ORB_T_MISSING_INIT_TRANSITION: "ORB_T_MISSING_INIT_TRANSITION";
    readonly ORB_T_MISSING_RENDER_UI: "ORB_T_MISSING_RENDER_UI";
    readonly ORB_T_DEPRECATED_UI: "ORB_T_DEPRECATED_UI";
    readonly ORB_T_DUPLICATE_NAME: "ORB_T_DUPLICATE_NAME";
    readonly ORB_T_UNDEFINED_EVENT: "ORB_T_UNDEFINED_EVENT";
    readonly ORB_P_MISSING_NAME: "ORB_P_MISSING_NAME";
    readonly ORB_P_MISSING_PATH: "ORB_P_MISSING_PATH";
    readonly ORB_P_INVALID_PATH: "ORB_P_INVALID_PATH";
    readonly ORB_P_DUPLICATE_PATH: "ORB_P_DUPLICATE_PATH";
    readonly ORB_P_MISSING_TRAITS: "ORB_P_MISSING_TRAITS";
    readonly ORB_P_EMPTY_TRAITS: "ORB_P_EMPTY_TRAITS";
    readonly ORB_P_SECTIONS_FORBIDDEN: "ORB_P_SECTIONS_FORBIDDEN";
    readonly ORB_P_INVALID_TRAIT_REF: "ORB_P_INVALID_TRAIT_REF";
    readonly ORB_P_INVALID_VIEW_TYPE: "ORB_P_INVALID_VIEW_TYPE";
    readonly ORB_SLOT_MAIN_NOT_COVERED: "ORB_SLOT_MAIN_NOT_COVERED";
    readonly ORB_SLOT_CONTENTION: "ORB_SLOT_CONTENTION";
    readonly ORB_SLOT_INVALID_NESTING: "ORB_SLOT_INVALID_NESTING";
    readonly ORB_SLOT_PRIORITY_CONFLICT: "ORB_SLOT_PRIORITY_CONFLICT";
    readonly ORB_SLOT_INVALID_NAME: "ORB_SLOT_INVALID_NAME";
    readonly ORB_SLOT_HUD_NON_GAME: "ORB_SLOT_HUD_NON_GAME";
    readonly ORB_RUI_INVALID_SLOT: "ORB_RUI_INVALID_SLOT";
    readonly ORB_RUI_INVALID_PATTERN: "ORB_RUI_INVALID_PATTERN";
    readonly ORB_RUI_MISSING_PATTERN_TYPE: "ORB_RUI_MISSING_PATTERN_TYPE";
    readonly ORB_RUI_INVALID_PROP: "ORB_RUI_INVALID_PROP";
    readonly ORB_RUI_MISSING_REQUIRED_PROP: "ORB_RUI_MISSING_REQUIRED_PROP";
    readonly ORB_RUI_INVALID_ITEM_ACTION: "ORB_RUI_INVALID_ITEM_ACTION";
    readonly ORB_RUI_UNKNOWN_ITEM_ACTION_PROP: "ORB_RUI_UNKNOWN_ITEM_ACTION_PROP";
    readonly ORB_RUI_MISSING_ACTION: "ORB_RUI_MISSING_ACTION";
    readonly ORB_EFF_CALL_SERVICE_MISSING_SERVICE: "ORB_EFF_CALL_SERVICE_MISSING_SERVICE";
    readonly ORB_EFF_CALL_SERVICE_MISSING_ACTION: "ORB_EFF_CALL_SERVICE_MISSING_ACTION";
    readonly ORB_EFF_CALL_SERVICE_MISSING_HANDLERS: "ORB_EFF_CALL_SERVICE_MISSING_HANDLERS";
    readonly ORB_EFF_SET_INVALID_BINDING: "ORB_EFF_SET_INVALID_BINDING";
    readonly ORB_EFF_SET_PAYLOAD_NOT_ALLOWED: "ORB_EFF_SET_PAYLOAD_NOT_ALLOWED";
    readonly ORB_EFF_FETCH_INVALID_ENTITY: "ORB_EFF_FETCH_INVALID_ENTITY";
    readonly ORB_EFF_SLOT_CONFLICT: "ORB_EFF_SLOT_CONFLICT";
    readonly ORB_EFF_UNKNOWN_TYPE: "ORB_EFF_UNKNOWN_TYPE";
    readonly SEXPR_INVALID_OPERATOR: "SEXPR_INVALID_OPERATOR";
    readonly SEXPR_ARITY_MISMATCH: "SEXPR_ARITY_MISMATCH";
    readonly SEXPR_EFFECT_IN_GUARD: "SEXPR_EFFECT_IN_GUARD";
    readonly SEXPR_INVALID_BINDING: "SEXPR_INVALID_BINDING";
    readonly SEXPR_INVALID_BINDING_PATH: "SEXPR_INVALID_BINDING_PATH";
    readonly SEXPR_UNKNOWN_ENTITY: "SEXPR_UNKNOWN_ENTITY";
    readonly SEXPR_PARSE_ERROR: "SEXPR_PARSE_ERROR";
    readonly ORB_SVC_DUPLICATE_NAME: "ORB_SVC_DUPLICATE_NAME";
    readonly ORB_SVC_MISSING_BASE_URL: "ORB_SVC_MISSING_BASE_URL";
    readonly ORB_SVC_INVALID_URL: "ORB_SVC_INVALID_URL";
    readonly ORB_SVC_MISSING_EVENTS: "ORB_SVC_MISSING_EVENTS";
    readonly ORB_SVC_RESERVED_EVENT: "ORB_SVC_RESERVED_EVENT";
    readonly ORB_SVC_MISSING_CAPABILITIES: "ORB_SVC_MISSING_CAPABILITIES";
    readonly ORB_SVC_MISSING_SERVER_PATH: "ORB_SVC_MISSING_SERVER_PATH";
    readonly ORB_SVC_UNKNOWN_TYPE: "ORB_SVC_UNKNOWN_TYPE";
    readonly ORB_SVC_INVALID_INTEGRATOR: "ORB_SVC_INVALID_INTEGRATOR";
    readonly ORB_X_DUPLICATE_ENTITY: "ORB_X_DUPLICATE_ENTITY";
    readonly ORB_X_ORPHAN_LISTENER: "ORB_X_ORPHAN_LISTENER";
    readonly ORB_X_UNUSED_EMISSION: "ORB_X_UNUSED_EMISSION";
    readonly ORB_X_CIRCULAR_DEPENDENCY: "ORB_X_CIRCULAR_DEPENDENCY";
    readonly ORB_X_EVENT_COLLISION: "ORB_X_EVENT_COLLISION";
    readonly ORB_X_MISSING_ORBITAL_NAME: "ORB_X_MISSING_ORBITAL_NAME";
    readonly ORB_X_PAYLOAD_MISMATCH: "ORB_X_PAYLOAD_MISMATCH";
    readonly ORB_BINDING_INVALID_FORMAT: "ORB_BINDING_INVALID_FORMAT";
    readonly ORB_BINDING_UNKNOWN_ROOT: "ORB_BINDING_UNKNOWN_ROOT";
    readonly ORB_BINDING_INVALID_PATH: "ORB_BINDING_INVALID_PATH";
    readonly ORB_BINDING_STATE_NO_PATH: "ORB_BINDING_STATE_NO_PATH";
    readonly ORB_BINDING_NOW_NO_PATH: "ORB_BINDING_NOW_NO_PATH";
    readonly ORB_BINDING_PAYLOAD_IN_TICK: "ORB_BINDING_PAYLOAD_IN_TICK";
    readonly ORB_BINDING_UNKNOWN_ENTITY: "ORB_BINDING_UNKNOWN_ENTITY";
    readonly ORB_BINDING_INVALID_FIELD_NAME: "ORB_BINDING_INVALID_FIELD_NAME";
    readonly ORB_BINDING_SET_TARGET_MISSING_PATH: "ORB_BINDING_SET_TARGET_MISSING_PATH";
    readonly ORB_BINDING_PAYLOAD_FIELD_UNDECLARED: "ORB_BINDING_PAYLOAD_FIELD_UNDECLARED";
    readonly CIRCUIT_ORPHAN_EVENT: "CIRCUIT_ORPHAN_EVENT";
    readonly CIRCUIT_DUPLICATE_EVENT: "CIRCUIT_DUPLICATE_EVENT";
    readonly CIRCUIT_DEAD_END_COMPONENT: "CIRCUIT_DEAD_END_COMPONENT";
    readonly CIRCUIT_UNREACHABLE_STATE: "CIRCUIT_UNREACHABLE_STATE";
    readonly CIRCUIT_DEAD_END_STATE: "CIRCUIT_DEAD_END_STATE";
    readonly CIRCUIT_ACTION_COMPONENT_MISMATCH: "CIRCUIT_ACTION_COMPONENT_MISMATCH";
    readonly ORB_UI_ICON_INVALID_FORMAT: "ORB_UI_ICON_INVALID_FORMAT";
    readonly ORB_UI_ICON_EMPTY: "ORB_UI_ICON_EMPTY";
    readonly ORB_UI_ICON_NOT_FOUND: "ORB_UI_ICON_NOT_FOUND";
    readonly ORB_QUERY_MISSING_SEARCH: "ORB_QUERY_MISSING_SEARCH";
    readonly ORB_QUERY_MISSING_RECOMMENDED: "ORB_QUERY_MISSING_RECOMMENDED";
    readonly ORB_QUERY_UNSUPPORTED_PATTERN: "ORB_QUERY_UNSUPPORTED_PATTERN";
    readonly ORB_QUERY_UNKNOWN_SINGLETON: "ORB_QUERY_UNKNOWN_SINGLETON";
    readonly ORB_QUERY_UNUSED_SINGLETON: "ORB_QUERY_UNUSED_SINGLETON";
    readonly ORB_T_EVT_UNDECLARED: "ORB_T_EVT_UNDECLARED";
    readonly ORB_T_EVT_INVALID_NAME: "ORB_T_EVT_INVALID_NAME";
    readonly ORB_T_EVT_TICK_UNDECLARED: "ORB_T_EVT_TICK_UNDECLARED";
    readonly ORB_T_EVT_SCOPE_MISMATCH: "ORB_T_EVT_SCOPE_MISMATCH";
    readonly ORB_T_EVT_DUPLICATE: "ORB_T_EVT_DUPLICATE";
    readonly ORB_T_EVT_EXTERNAL_MISSING_PAYLOAD: "ORB_T_EVT_EXTERNAL_MISSING_PAYLOAD";
    readonly ORB_S_MISSING_NAME: "ORB_S_MISSING_NAME";
    readonly ORB_S_NO_ORBITALS: "ORB_S_NO_ORBITALS";
    readonly ORB_S_EMPTY_VERSION: "ORB_S_EMPTY_VERSION";
    readonly entity: "entity";
    readonly trait: "trait";
    readonly page: "page";
    readonly slot: "slot";
    readonly render_ui: "render_ui";
    readonly effect: "effect";
    readonly sexpr: "sexpr";
    readonly service: "service";
    readonly cross: "cross";
    readonly binding: "binding";
    readonly circuit: "circuit";
    readonly icon: "icon";
    readonly query: "query";
    readonly trait_event: "trait_event";
    readonly schema: "schema";
};
export type OrbitalErrorCode = keyof typeof ORBITAL_ERROR_CODES;
/**
 * Error categories for grouping errors.
 */
export declare const ERROR_CATEGORIES: readonly ["entity", "trait", "page", "slot", "render_ui", "effect", "sexpr", "service", "cross", "binding", "circuit", "icon", "query", "trait_event", "schema"];
export type ErrorCategory = (typeof ERROR_CATEGORIES)[number];
/**
 * Get the category for an error code.
 */
export declare function getErrorCategory(code: string): ErrorCategory;
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
/**
 * Simplified validation error for UI display.
 * Maps from OrbitalValidationError but with flexible path type for UI rendering.
 */
export interface ValidationError {
    /** Error code */
    code: string;
    /** Human-readable error message */
    message: string;
    /** Path to error location (string or array for UI flexibility) */
    path?: string | (string | number)[];
    /** Suggestion for fixing the error */
    suggestion?: string;
    /** Error severity for UI styling */
    severity?: "error" | "warning" | "info";
    /** Valid values for enum-like fields */
    validValues?: string[];
    /** Expected shape/structure for complex types */
    expectedShape?: string;
    /** Guidance for fixing the error */
    fixGuidance?: string;
    /** Optional LLM context for debugging LLM-originated errors */
    llmContext?: LLMErrorContext;
}
/**
 * Context for errors originating from LLM output.
 * Used for debugging and error correction.
 */
export interface LLMErrorContext {
    /** Preview of the raw LLM output (truncated) */
    rawValuePreview?: string;
    /** Expected type or structure */
    expectedType?: string;
    /** Actual type received */
    actualType?: string;
    /** Source of the error */
    source?: {
        /** Which agent produced this */
        agent: "requirements" | "builder" | "view-planner";
        /** What operation was being performed */
        operation: string;
    };
}
