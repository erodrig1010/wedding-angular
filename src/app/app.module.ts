import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TravelComponent } from './travel/travel.component';
import { EntourageComponent } from './entourage/entourage.component';
import { SongRequestComponent } from './song-request/song-request.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'schedule', component: ScheduleComponent},
  { path: 'travel', component: TravelComponent},
  { path: 'entourage', component: EntourageComponent},
  { path: 'song-request', component: SongRequestComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'faq', component: FaqComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ScheduleComponent,
    TravelComponent,
    EntourageComponent,
    SongRequestComponent,
    GalleryComponent,
    FaqComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }