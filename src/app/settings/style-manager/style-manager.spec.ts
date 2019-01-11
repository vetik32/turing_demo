import { StyleManager } from './style-manager';

describe('StyleManager', () => {
  let instance: StyleManager;

  beforeEach(() => {
    instance = new StyleManager();
  });

  it('should create', function() {
    expect(instance).toBeDefined();
  });

  it('should add new stylesheet link', function() {
    instance.setStyle('abs', 'zxy');
    const stylRel = document.head.querySelector(`.style-manager-abs`);

    expect(stylRel).toBeDefined();
    expect(stylRel.getAttribute('href')).toEqual('zxy');
  });

  it('should remove a stylesheet link', function() {
    instance.setStyle('abs', 'zxy');
    let stylRel = document.head.querySelector(`.style-manager-abs`);

    expect(stylRel).toBeDefined();
    instance.removeStyle('abs');

    stylRel = document.head.querySelector(`.style-manager-abs`);
    expect(stylRel).toEqual(null);
  });

  it('should remove a stylesheet link', function() {
    expect(() => {
      instance.removeStyle('zzz');
    }).not.toThrow();
  });
});
