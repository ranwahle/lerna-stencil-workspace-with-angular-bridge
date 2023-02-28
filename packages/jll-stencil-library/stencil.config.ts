import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'jll-stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // {
    //   type: 'dist'
    // },
    angularOutputTarget({
      componentCorePackage: 'jll-stencil-library',
      directivesProxyFile: '../angular-workspace/projects/jll-component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/jll-component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
};
