import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from '../routes';

import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';

import { PostsService } from './shared/services/posts.service';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HighlightDirective,
    MobileHideDirective,
    DateFormatPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
