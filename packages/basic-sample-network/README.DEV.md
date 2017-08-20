# Basic Sample Business Network

* Hyperledger Composer Playground https://composer-playground.mybluemix.net/
* Part 2 - Using HyperLedger Fabric v1 in (Re)insurance — ChainThat  http://www.chainthat.com/updates/2017/7/12/part-2-using-hyperledger-fabric-v1-in-reinsurance
* As a user I can call an external REST Service from a TP Function · Issue #1004 · hyperledger/composer  https://github.com/hyperledger/composer/issues/1004
* Calling external REST services | Hyperledger Composer  https://hyperledger.github.io/composer/integrating/call-out.html
* coinmarketcap test api: https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10

```
$ git clone https://github.com/dltdojo/composer-sample-networks.git
$ cd composer-sample-networks
$ npm i

> sample-networks@0.1.1 postinstall /home/dltdojo/smb/composer-sample-networks
> npm run pkgcheck && npm run bootstrap


> sample-networks@0.1.1 pkgcheck /home/dltdojo/smb/composer-sample-networks
> node ./scripts/pkgcheck.js

Status: no problems detected!

> sample-networks@0.1.1 bootstrap /home/dltdojo/smb/composer-sample-networks
> lerna bootstrap

lerna info version 2.0.0
lerna info Bootstrapping 10 packages
lerna info lifecycle preinstall
lerna info Installing external dependencies
lerna info hoist Pruning hoisted dependencies
lerna info hoist Finished pruning hoisted dependencies
lerna info hoist Finished installing in root
lerna info Symlinking packages and binaries
lerna info lifecycle postinstall
lerna info lifecycle prepublish
lerna success Bootstrapped 10 packages
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})


$ cd packages/basic-sample-network
$ npm run prepublish

> basic-sample-network@0.1.1 prepublish /home/dltdojo/smb/composer-sample-networks/packages/basic-sample-network
> mkdirp ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/basic-sample-network.bna


Creating Business Network Archive


Looking for package.json of Business Network Definition
        Input directory: /home/dltdojo/smb/composer-sample-networks/packages/basic-sample-network

Found:
        Description: The Hello World of Hyperledger Composer samples
        Name: basic-sample-network
        Identifier: basic-sample-network@0.1.1

Written Business Network Definition Archive file to
        Output file: ./dist/basic-sample-network.bna

Command succeeded

```
