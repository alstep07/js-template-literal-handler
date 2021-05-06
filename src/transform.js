export const level = 80;

export function transform(stringsArg, ...keysArg) {
  const strings = [...stringsArg];
  const keys = [...keysArg];

  const transformKey = (key, index) => {
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

  return keys.reduce(
    (acc, key, index) => acc + transformKey(key, index) + strings[index + 1],
    strings[0],
  );
}

export function testFunction(string, expression) {
  const name = testFunction.name.toUpperCase();
  string = string.replace(/\s/g, '');
  return `${name}(${string}=${expression})`;
}
