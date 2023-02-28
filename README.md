# Component library with Angular bridge example

This is an example of how to develop a Stencil based component library and use it in an Angular application, which is not in hte same repository.

## Content
1. stencil based component library on ``packages/jll-stencil-library``
2. Angular bridge on ``packages/angular-workspace/projects/jll-component-library``
3. Angular application on ``packages/angular-workspace/projects/jll-consumer-app``

## Running the application
1. Clone the application
2. On packages/jll-component-library run `npm install` and `npm run build`
3. Publish or pack the angular bridge by going to ``dist/jll-component-library`` and running `npm pack` or running `npm publish`
4. On an angular application, the consuming app, outside this repo, consume the bridge app by running `npm install <path to the bridge app>`
5. On ``packages/jll-stencil-library`` run `npm link`
6. On the consuming app on 4. run `npm link jll-stencil-library`
7. Run the consuming app mentioned in 4. and 6. 
