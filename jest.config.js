module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  roots: [
    '<rootDir>/src'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: '<rootDir>/tsconfig.json',
    }
  },
  transform: {
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    // '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(roots/.*|(\\.|/)(test))\\.(ts|tsx)?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  coverageReporters: [
    'html',
    'json',
    'lcov',
    'text',
    'clover'
  ],
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/**/*.fixtures.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@modules/(.*)$': '<rootDir>/src/store/modules/$1',
    '@components/(.*)$': '<rootDir>src/components/$1',
    '@pages/(.*)$': '<rootDir>src/pages/$1',
    '@placeholders/(.*)$': '<rootDir>src/placeholders/$1',
  },
  // resolver: '<rootDir>/resolver.js',
  moduleDirectories: ['utils', 'modules', 'node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/interface.d.ts', '!src/**/*interfaces.d.ts'],
  coverageThreshold: {
    global: {
      'branches': 30,
      'functions': 30,
      'lines': 30,
      'statements': 35
    }
  },
  setupFiles: [
    'jest-canvas-mock',
    'jest-localstorage-mock',
    '<rootDir>/node_modules/regenerator-runtime/runtime',
    '<rootDir>/src/setupMocks.ts',
  ],
  coveragePathIgnorePatterns: ['/node_modules', '<rootDir>/src/index.tsx', 'src/store/index.tsx|rootReducer.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  testEnvironment: 'node'
}
