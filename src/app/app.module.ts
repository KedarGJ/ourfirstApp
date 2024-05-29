import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductComponent } from './shared/components/product/product.component';
import { StudentCopmponent } from './shared/components/student/student.component';
import { PostsCardsComponent } from './shared/components/posts-cards/posts-cards.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { TabComponent } from './shared/components/tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentCopmponent,
    PostsCardsComponent,
    ProductsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
