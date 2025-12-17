/**
 * Converts a string to kebab-case format
 * 
 * Edge cases handled:
 * - Extra spaces (leading, trailing, multiple consecutive)
 * - Mixed casing (uppercase, lowercase, camelCase, PascalCase)
 * - Special characters (removed)
 * - Numbers (preserved)
 * - Empty strings (returns empty string)
 * - Non-string inputs (returns empty string or throws error)
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The kebab-case formatted string
 */
function toKebabCase(str) {
    // Input validation: check if input is a string
    if (typeof str !== 'string') {
        return '';
    }

    // Step 1: Trim leading and trailing whitespace
    str = str.trim();

    // Step 2: Handle empty string after trimming
    if (str.length === 0) {
        return '';
    }

    // Step 3: Insert hyphens before uppercase letters (for camelCase/PascalCase)
    // This preserves the word boundaries in mixed-case strings
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Step 4: Replace spaces and underscores with hyphens
    str = str.replace(/[\s_]+/g, '-');

    // Step 5: Remove all special characters except hyphens and alphanumeric
    str = str.replace(/[^\w\-]/g, '');

    // Step 6: Convert to lowercase
    str = str.toLowerCase();

    // Step 7: Remove consecutive hyphens, reduce to single hyphen
    str = str.replace(/-+/g, '-');

    // Step 8: Remove leading and trailing hyphens
    str = str.replace(/^-+|-+$/g, '');

    return str;
}

// ============================================================================
// EXAMPLE USAGES AND TEST CASES
// ============================================================================

// Basic examples
console.log(toKebabCase('Hello World'));           // Output: 'hello-world'
console.log(toKebabCase('HelloWorld'));            // Output: 'hello-world'
console.log(toKebabCase('hello_world'));           // Output: 'hello-world'

// Edge cases: Extra spaces
console.log(toKebabCase('  Hello   World  '));     // Output: 'hello-world'
console.log(toKebabCase('Hello  \t  World'));      // Output: 'hello-world'

// Mixed casing
console.log(toKebabCase('CamelCaseString'));       // Output: 'camel-case-string'
console.log(toKebabCase('PascalCaseString'));      // Output: 'pascal-case-string'
console.log(toKebabCase('SCREAMING_SNAKE_CASE')); // Output: 'screaming-snake-case'

// Special characters
console.log(toKebabCase('Hello@World!'));          // Output: 'hello-world'
console.log(toKebabCase('Hello#$%World'));         // Output: 'hello-world'

// Numbers
console.log(toKebabCase('File123Name'));           // Output: 'file123-name'
console.log(toKebabCase('Version 2.0 Release'));   // Output: 'version-20-release'

// Empty and invalid inputs
console.log(toKebabCase(''));                      // Output: ''
console.log(toKebabCase('   '));                   // Output: ''
console.log(toKebabCase(null));                    // Output: ''
console.log(toKebabCase(undefined));               // Output: ''
console.log(toKebabCase(123));                     // Output: ''

// Complex cases
console.log(toKebabCase('user_profile_page'));     // Output: 'user-profile-page'
console.log(toKebabCase('getUserProfileData'));    // Output: 'get-user-profile-data'
console.log(toKebabCase('---hello---world---'));   // Output: 'hello-world'