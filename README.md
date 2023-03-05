# Component library with Angular bridge example

This is an example of how to develop a Stencil based component library and use it in an Angular application, which is not in hte same repository.

## Content
1. stencil based component library on ``packages/jll-stencil-library``
2. Angular bridge on ``packages/angular-workspace/projects/jll-component-library``
3. Angular application on ``packages/angular-workspace/projects/jll-consumer-app``

## Running the application
1. Clone the application
2. Run ``npm install``
3. On packages/jll-stencil-library run `npm run build`
4. On packages/angular-workspace run ``npm run build:lib``
5. Publish or pack the angular bridge by going to ``dist/jll-component-library`` and running `npm pack` or running `npm publish`
6. On an angular application, the consuming app, outside this repo, consume the bridge app by running `npm install <path to the bridge app>`
    * You may encounter an ``E404`` error stating that ``jll-stencil-library`` is not found, it is OK, you may continue. 
7. On ``packages/jll-stencil-library`` run `npm link`
8. On the consuming app on 6. run `npm link jll-stencil-library`
9. On your main module, import ``JllComponentLibraryModule`` 

```typescript
import { JllComponentLibraryModule } from 'jll-component-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JllComponentLibraryModule,
  ],
```

10. Consume ``my-component`` on one of your components
```html
<my-component first="'first'"></my-component>
```

11. Run the consuming app mentioned in 6. and 8. 

## Watching changes
1. On packages/jll-stencil-library run ``npm run build:watch`` 
   Alternatively you may run ``stencil build --watch`` just don't run it with --dev because if you want changes to be seen at your consuming app.
