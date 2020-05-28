# getting started

## Creating a new package

```
lerna create library
```

## Build the package

To distribute the package you will have to compile it into a distributable.

```
lerna run build-lib
```

## Publish the package

```
lerna publish
```

## Install package level dependency

e.g.
```
lerna add @storybook/react packages/my-pkg-name
```


## Install project level dependency
lerna bootstrap --hoist ???




install webpack
```
npm install webpack webpack-cli --save-dev
```

'@babel/preset-env',
```
npm i microbundle --save-dev
```

npx lerna run build

npx lerna publish











Troubleshooting:

Error
```
lerna http fetch PUT 402 https://registry.npmjs.org/@iamkhaya%2fhellocomponent 498ms
lerna ERR! E402 You must sign up for private packages
```

Solution
npm config set access public

When publishing scoped packages, the access level defaults to restricted. If you want your scoped package to be publicly viewable (and installable) run this command:

npm config set access public

https://docs.npmjs.com/misc/config#access

https://github.com/lerna/lerna/tree/master/commands/publish#per-package-configuration
