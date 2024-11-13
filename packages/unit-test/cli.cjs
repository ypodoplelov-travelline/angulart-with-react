#!/usr/bin/env node

const spawn = require('cross-spawn')
const argv = require('minimist')(process.argv.slice(2))
const path = require('node:path')

function getParams() {
  const passArgs = argv._.slice(1)

  if (!passArgs.find((item) => item.includes('-config'))) {
    // no config file
    return [
      ...passArgs,
      '--config',
      path.resolve(__dirname, './vitest.config.ts'),
    ]
  }

  return passArgs
}

const params = ['run', '--passWithNoTests', ...getParams()]

spawn('vitest', params, { stdio: 'inherit' }).on(
  'exit',
  function (exitCode, signal) {
    if (typeof exitCode === 'number') {
      process.exit(exitCode)
    } else {
      process.kill(process.pid, signal)
    }
  },
)
