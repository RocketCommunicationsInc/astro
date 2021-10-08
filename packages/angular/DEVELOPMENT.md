### Build web-components library
1. Inside `web-components` package run `npm install`.
2. Run `npm run build`.
3. Run `sudo npm link`.

### Build angular module
1. Inside `angular` package run `npm install`.
2. Run `npm link @astrouxds/astro-web-components` 
3. Run `npm run build`

### Link everything to angular-test project
1. Inside your angular testing project run `npm install`
2. Run `npm link @astrouxds/astro-web-components @astrouxds/angular`
4. Declare `AstroComponentsModule` in desired module

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstroComponentsModule } from '@astrouxds/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AstroComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

5. If you have angular version 9 or higher add the following to `tsconfig.json` -> `compilerOptions`

```json
 "paths": {
    "@angular/*": ["./node_modules/@angular/*"]
  }
```

6. Update `angular.json` file to projects to run `aot` compiiler

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "projects": {
    "angular-test-project": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "aot": true, // <----- this one here
            "assets": ["src/favicon.ico", "src/assets"],
            "scripts": []
          },
        }
      }
    }
  },
}
```

7. Run `ng serve` 

* Note if you wish to use `ngModule` or `formControl` name directives you will need to import assosiated angular modules 

* Note `angular` project has a `reboot` script that helps dealing with removal of `__ivy_ngcc__` related code and reinstallation of the project which is necessary if `angular-test` project throws errors along the lines `AstroComponentsModule was not properly processed by ngcc`

