jest.mock('@linaria/react', () => {
  function styled(tag) {
    return jest.fn(() => `mock-styled.${tag}`);
  }
  return {
    css: jest.fn(() => ''),
    cx: jest.fn(() => ''),
    styled: new Proxy(styled, {
      get(o, prop) {
        return o(prop);
      },
    }),
  };
});