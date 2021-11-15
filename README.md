# Micro Frontend – Using different platforms

This is the proof of concept app for using different frontend frameworks in a micro-frontend host application.

## Micro apps

* Home - host app built using vanilla JS
* Nav - built using React
* Counter - built using Svelte
* Store - build using vanilla JS (no UI)

The MFE code is shared using module federation (webpack 5). Single spa is used to manage the shared resources (UI MFE)

## how does it works

* The micro UI apps is sharing code via module federation and using single spa library for exporting app life cycle methods.
* The store app is only using module federation for sharing code as it is non UI code.
* The apps components are mounted in host apps using html id's like single-spa-application:header
* The remote entry (from modfed) is loaded in host using script tags
* Single spa library will manage the micro app using above html id's and the life cycle methods exported from micro apps.


# Getting Started
This project uses yarn as package manager and yarn workspaces to manage packages

```sh
yarn install
yarn start
```

Above commands will install dependencies in all micro apps and serve all apps in their respective ports.

Host App: Open [http://localhost:3001](http://localhost:3001).

# Lineage

Forked from [MFE Webpack Demo](https://github.com/mizx/mfe-webpack-demo)
