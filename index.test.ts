import 'jest';
import { RENDERER_SPEC_TYPE } from './src/interfaces';

describe("a fake test suite", () => {
  it("should have a test", () => {
    expect(RENDERER_SPEC_TYPE.length).toBe(4);
  })
})