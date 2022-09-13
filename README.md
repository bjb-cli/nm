# @bjb-templates/nm

```shell
# create node modules by this template
$ npx bjb nm my-module

# enter generated directory
$ cd my-template

# running test if you choose test features
$ npm test # or `yarn test`
```

Or use globally installed BJB:

```shell
# Install the `bjb` globally
$ npm install bjb --global # or `yarn global add bjb`

# create node modules by this template
$ bjb nm my-module

# enter generated directory
$ cd my-template

# running test if you choose test features
$ npm test # or `yarn test`
```

Or use local BJB:

```shell
# Clone the `bjb`
$ git clone https://github.com/bjb-cli/bjb.git

# enter generated directory
$ cd bjb

# Link local
$ npm link

# create node modules by this template
$ bjb nm my-module

# enter generated directory
$ cd my-template

# running test if you choose test features
$ npm test # or `yarn test`
```
