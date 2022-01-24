import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ResultTileComponent } from './components/result-tile/result-tile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    TvDetailComponent,
    MovieDetailComponent,
    ResultTileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
