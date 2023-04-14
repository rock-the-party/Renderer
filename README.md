# Renderer

- [Getting Started](#getting-started)
- [Renderer](#renderer)
- [Builders](#builders)
- [Together](#together)
- [Contributing](#contributing)

## Getting Started

You probably will want to save this to your dev dependencies.

  ```bash
  npm i --save-dev @r-t-p/renderer
  ```

Also remember to bundle it with a bundler like [webpack](https://webpack.js.org/) in your project to pull it into your bundle

## Renderer

The renderer is the object that holds a reference to your canvas and it's context.  Instantiating one by passing in the canvas element.

```typescript
import { Renderer } from '@r-t-p/renderer';

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let renderer = new Renderer(canvas);
```

The renderer only has 2 methods:

- `Clear` - will clear teh canvas.
- `Draw` - takes in a spec and draws it.

## Builders

There are builders that make it easy to create specs for circles, rectangles, images and text.  Each builder can update the properties that are available to it's own type.  Here is an example of a circle being built.

```typescript
import { BuildCircleSpec } from '@r-t-p/renderer';

let circle = BuildCircleSpec()
  .Center({ x: 250, y: 250 })
  .FillStyle("blue")
  .Radius(100)
  .Create();
```

Once you have a spec created (from the `Create` function) it is an object you can interact with and change on the fly, then pass back into the Renderer's Draw method.

## Together

Putting it all together you might make something like this:

```typescript
import { BuildCircleSpec, Renderer } from '@r-t-p/renderer';

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let r = new Renderer(canvas);

let circle = BuildCircleSpec()
  .Center({ x: 100, y: 100 })
  .FillStyle("blue")
  .Radius(100)
  .Create();

r.Draw(circle);
circle.center = {x: 300, y: 300 };
circle.metadata.fillStyle = "green";
r.Draw(circle);
```

## Contributing

Pull requests are welcome, if you add bloat they will be rejected.  Keep things simple.

### Running locally

```bash
npm run test # Runs the test runner
npm run build # Builds using `tsc` from configs in the `tsconfig.json`
npm run dev # Runs build and watches for changes
```

### Under the hood

- `tsc` for building js sent to `/dist/`
- `jest` for testing all `.test.ts` or `.spec.ts` files and files in `__test__`
- `npm` for versioning
- `.github/workflows` (i.e github actions) for automation
  - `main.yml` runs tests and build on all branches
  - `publish.yml` ships code to npm when a release is published
