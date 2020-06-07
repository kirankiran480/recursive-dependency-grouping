import { MyServiceService } from './my-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
  providers: [MyServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
