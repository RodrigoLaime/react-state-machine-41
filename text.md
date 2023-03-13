## instalar xstate
npm i xstate
npm i @xstate/react


## paquete de github pages
npm install --save-dev gh-pages
## agregar al package.json
"homepage":"http://yourusername.github.io/repository-name",
## crear script de deploy
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
## ejecutar
primero: npm run build
segundo: npm run deploy