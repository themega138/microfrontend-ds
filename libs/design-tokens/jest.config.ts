export default {
  displayName: 'design-tokens',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  coverageDirectory: '../../coverage/libs/design-tokens',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js', 'html']
};
