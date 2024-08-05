import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {NotfoundComponent} from "./main/components/notfound/notfound.component";
import {AppLayoutModule} from "./layout/app.layout.module";
import {CustomerService} from "./main/service/customer.service";
import {CountryService} from "./main/service/country.service";
import {EventService} from "./main/service/event.service";
import {IconService} from "./main/service/icon.service";
import {NodeService} from "./main/service/node.service";
import {PhotoService} from "./main/service/photo.service";
import {ProductService} from "./main/service/product.service";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [AppRoutingModule, AppLayoutModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
