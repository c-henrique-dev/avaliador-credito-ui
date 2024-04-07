import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { FooterComponent } from './common/footer/footer.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './shared/keycloak/keycloak-initializer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './common/auth/auth.interceptor';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HeaderComponent } from './common/header/header.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenubarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideEnvironmentNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
