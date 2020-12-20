import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { JwtService } from './services/jwt.service';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminManageCompaniesComponent } from './components/admin-manage-companies/admin-manage-companies.component';
import { AdminUploadDataComponent } from './components/admin-upload-data/admin-upload-data.component';
import { CompanyService } from './services/company.service';
import { SetAuthTokenInterceptor } from './interceptors/set-auth-token.interceptor';
import { SectorServiceService } from './services/sector-service.service';
import { ExchangeServiceService } from './services/exchange-service.service';
import { AdminManageSectorsComponent } from './components/admin-manage-sectors/admin-manage-sectors.component';
import { AdminManageExchangesComponent } from './components/admin-manage-exchanges/admin-manage-exchanges.component';
import { AdminManageIposComponent } from './components/admin-manage-ipos/admin-manage-ipos.component';
import { IpoService } from './services/ipo.service';
import { UploadService } from './services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    NavbarComponent,
    AdminManageCompaniesComponent,
    AdminUploadDataComponent,
    AdminManageSectorsComponent,
    AdminManageExchangesComponent,
    AdminManageIposComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthService,
    JwtService,
    CompanyService,
    SectorServiceService,
    ExchangeServiceService,
    IpoService,
    UploadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetAuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
