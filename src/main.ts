
import {bootstrapApplication} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';


//platformBrowserDynamic().bootstrapModule(AppModule)
 // .catch(err => console.error(err));

  bootstrapApplication(AppComponent,
    {
      providers: [
          provideHttpClient(),
          // provideAnimationsAsync('noop')
        
      ]
    }
  );