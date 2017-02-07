import Config from '../config';

const settings = { example: 'value' };
const settings2 = { example2: 'value' };

describe('Config', () => {
  it('should be a function', () => {
    expect(typeof Config).toBe('function');
  });

  it('should have a `load` method', () => {
    const config = new Config();

    expect(typeof config.load).toBe('function');
  });

  it('should store an object passed in as a parameter as initial configuration', () => {
    const config = new Config(settings);

    expect(config.get('example')).toBe(settings.example);
  });

  describe('load', () => {
    it('should take an object as a parameter', () => {
      const config = new Config();

      expect(() => config.load(settings)).not.toThrow();
    });

    it('should overwrite any previously loaded configuration', () => {
      const config = new Config(settings);

      config.load(settings2);

      expect(config.get('example')).not.toBeDefined();
    });

    it('should merge configurations if passed true as a 2nd param', () => {
      const config = new Config(settings);

      config.load(settings2, true);

      expect(config.get('example')).toBe(settings.example);
    });
  });

  it('should have a `get` method', () => {
    const config = new Config();

    expect(typeof config.get).toBe('function');
  });

  describe('get', () => {
    it('should take a string as a parameter', () => {
      const config = new Config();

      expect(() => config.get('example')).not.toThrow();
    });

    it('should return the value at the key of any loaded configuration', () => {
      const config = new Config();

      config.load(settings);

      expect(config.get('example')).toBe(settings.example);
    });
  });
});
