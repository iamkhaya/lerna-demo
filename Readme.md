

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
