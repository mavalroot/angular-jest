import { getPropertiesAsArray } from "./object.utils";

describe('Utils', () => {
  it('getPropertiesAsArray should return an array string from an object', () => {
    const result = getPropertiesAsArray({property1: 'content', property2: 'content', property3: 'content'});
    expect(result).toHaveLength(3);
    expect(result[0]).toBe('property1');
  });
});
