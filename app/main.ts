import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// NOTE: Bootstrap the root module, in this case the AppModule
platformBrowserDynamic().bootstrapModule(AppModule);