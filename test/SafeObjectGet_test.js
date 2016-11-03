const { expect } = require('chai');
const SafeObjectGet = require('../SafeObjectGet.js');

describe('SafeObjectGet', () => {
  describe('obj is null', () => {
    it('returns null', () => {
      expect(
        SafeObjectGet(null, '')
      ).to.equal(null);
    });
  });

  describe('path is null', () => {
    it('returns obj', () => {
      const obj = { foo: 'bar' };
      expect(
        SafeObjectGet(obj, null)
      ).to.equal(obj);
    });
  });

  describe('top-level key', () => {
    it('fetches value if present', () => {
      const obj = { foo: 'bar' };
      expect(
        SafeObjectGet(obj, 'foo')
      ).to.equal('bar');
    });

    it('returns null if not present', () => {
      const obj = { foo: 'bar' };
      expect(
        SafeObjectGet(obj, 'bar')
      ).to.equal(null);
    });
  })

  describe('nested key', () => {
    it('fetches a value if present', () => {
      const obj = { foo: { bar: 'baz' } };
      expect(
        SafeObjectGet(obj, 'foo.bar')
      ).to.equal('baz');
    });

    it('returns null if not present', () => {
      const obj = { foo: { bar: 'baz' } };
      expect(
        SafeObjectGet(obj, 'baz.bar')
      ).to.equal(null);
    });
  });
});
