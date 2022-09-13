const <%= _.camelCase(name) %> = require('..')

// TODO: Implement module test
test('<%= name %>', () => {
  expect(<%= _.camelCase(name) %>('w')).toBe('w@test')
  expect(<%= _.camelCase(name) %>('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => <%= _.camelCase(name) %>(100)).toThrow('Expected a string, got number')
})
