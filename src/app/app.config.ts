import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FooterComponent,
    HeaderComponent 
  ],
}
