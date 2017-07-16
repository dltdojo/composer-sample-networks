# Basic Sample Business Network

* Hyperledger Composer Playground https://composer-playground.mybluemix.net/
* Part 2 - Using HyperLedger Fabric v1 in (Re)insurance — ChainThat  http://www.chainthat.com/updates/2017/7/12/part-2-using-hyperledger-fabric-v1-in-reinsurance
* As a user I can call an external REST Service from a TP Function · Issue #1004 · hyperledger/composer  https://github.com/hyperledger/composer/issues/1004
* Calling external REST services | Hyperledger Composer  https://hyperledger.github.io/composer/integrating/call-out.html
* coinmarketcap test api: https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10

```
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
