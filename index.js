const { name, version } = require('./package.json')

const date = new Date()

module.exports = {
  name,
  version,
  metadata: {
    year: date.getFullYear(),
    month: ('0' + (date.getMonth() + 1)).substring(0),
    day: ('0' + date.getDate()).substring(0)
  },
  prompts: [
    {
      name: 'name',
      type: 'text',
      message: 'Project name'
    },
    {
      name: 'version',
      type: 'text',
      message: 'Project version'
    },
    {
      name: 'description',
      type: 'text',
      message: 'Project description',
      initial: 'Awesome node modules.'
    },
    {
      name: 'author',
      type: 'text',
      message: 'Project author name'
    },
    {
      name: 'email',
      type: 'text',
      message: 'Project author email'
    },
    {
      name: 'url',
      type: 'text',
      message: 'Project author url'
    },
    {
      name: 'license',
      type: 'select',
      message: 'Project license',
      hint: ' ',
      choices: [
        { value: 'MIT' },
        { value: 'BSD-3-Clause' },
        { value: 'Apache' },
        { value: 'Unlicense' }
      ]
    },
    {
      name: 'github',
      type: 'text',
      message: 'GitHub username or organization',
      initial: 'bjb-cli'
    },
    {
      name: 'features',
      type: 'multiselect',
      message: 'Choose the features you need',
      instructions: false,
      choices: [
        { title: 'Automatic test', value: 'test', selected: true },
        { title: 'TypeScript', value: 'typescript' },
        { title: 'CLI Program', value: 'cli' },
        { title: 'Additional docs', value: 'docs' }
      ]
    },
    {
      name: 'module',
      type: 'select',
      message: 'Choose the module you need',
      instructions: false,
      choices: [
        { title: 'CommonJS', value: 'cjs', selected: true },
        { title: 'ES Module', value: 'mjs' }
      ]
    },
    {
      name: 'install',
      type: 'confirm',
      message: 'Install dependencies',
      initial: true
    },
    {
      name: 'pm',
      type: prev => process.env.NODE_ENV === 'test' || prev ? 'select' : null,
      message: 'Package manager',
      hint: ' ',
      choices: [
        { value: 'npm' },
        { value: 'yarn' }
      ]
    }
  ],
  filters: {
    'docs/**': ({ features }) => features.includes('docs'),
    'bin/**': ({ features }) => features.includes('cli'),
    'lib/bin.js': ({ features }) => features.includes('cli') && !features.includes('typescript'),
    'src/bin.ts': ({ features }) => features.includes('cli') && features.includes('typescript'),
    'test/*.js': ({ features }) => features.includes('test') && !features.includes('typescript'),
    'test/*.ts': ({ features }) => features.includes('test') && features.includes('typescript'),
    'lib/index.js': ({ features }) => !features.includes('typescript'),
    'src/index.ts': ({ features }) => features.includes('typescript'),
    'tsconfig.eslint.json': ({ features }) => features.includes('typescript'),
    'tsconfig.json': ({ features }) => features.includes('typescript')
  },
  install: 'npm',
  init: true,
  setup: async ctx => {
    ctx.config.install = ctx.answers.install && ctx.answers.pm
  },
  complete: async ctx => {
    console.clear()
    console.log(`Created a new project in ${ctx.project} by the ${ctx.template} template.\n`)
    console.log('\nHappy hacking :)\n')
  }
}
