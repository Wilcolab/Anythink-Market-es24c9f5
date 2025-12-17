/**
 * Converts a string to dot case notation.
 * 
 * Transforms various string formats (camelCase, snake_case, kebab-case, spaces, etc.)
 * into dot notation where words are separated by dots and all characters are lowercase.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot case format
 * @returns {string} The converted string in dot case notation
 * 
 * @example
 * // Convert camelCase to dot case
 * toDotCase('myVariableName');
 * // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert snake_case to dot case
 * toDotCase('my_variable_name');
 * // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert kebab-case to dot case
 * toDotCase('my-variable-name');
 * // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert space-separated to dot case
 * toDotCase('my variable name');
 * // Returns: 'my.variable.name'
 * 
 * @description
 * The function performs two sequential regex replacements:
 * 1. Inserts a dot before uppercase letters that follow lowercase letters (camelCase boundary detection)
 * 2. Replaces sequences of spaces, underscores, and hyphens with single dots
 * Finally converts all characters to lowercase for consistent output.
 */
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        .replace(/[\s_-]+/g, '.')
        .toLowerCase();
}

module.exports = toDotCase;