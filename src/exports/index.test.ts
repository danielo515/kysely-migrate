import { expect, test } from 'vitest'

import * as Exports from './index.js'

test('exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "defineConfig",
      "loadEnv",
      "mysqlDefinitions",
      "postgresDefinitions",
      "sqliteDefinitions",
      "version",
    ]
  `)
})
