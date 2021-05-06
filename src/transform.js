// assign 80 once you accept a challenge to implement Level 80 requirements
export const level = 80;

/*
  Add parameters as appropriate.
  Should allow arbitrary number of expressions.
  Should work with arbitrary function expressions passed.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
*/

export function transform(str, ...expressions) {
  const strings = [...str];
  const keys = [...expressions];

  const transformKeys = (key, index) => {
    switch (typeof key) {
      case 'number':
        return key * 2 + 3;
        break;
      case 'string':
        return key.toLowerCase();
        break;
      case 'function':
        return key(...strings.splice(index + 1, 1), ...keys.splice(index + 1, 1));
        break;
      case 'object':
        return JSON.stringify(key);
        break;
    }
  };

  const transformed = keys.reduce(
    (acc, cur, index) => acc + transformKeys(cur, index) + strings[index + 1],
    strings[0],
  );

  return transformed;
}

/*
  Level 1: expects no parameters. Returns its own name capitalized.
    Usage example:
      testFunction() should return 'TESTFUNCTION'
  Level 80: expects 2 parameters. Returns its own name capitalized and both parameters' values appended to it.
    Whitespaces should be trimmed from the first parameter.
    Parameters values are glued with '=' and parenthesized.
    Usage example:
      testFunction("some Text", 125) should return 'TESTFUNCTION(someText=125)'
 */
export function testFunction(string, expression) {
  const name = testFunction.name.toUpperCase();
  string = string.replace(/\s/g, '');
  return `${name}(${string}=${expression})`;
}
