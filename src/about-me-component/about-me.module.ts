import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { HeaderComponent } from '../header-component/header.component';
import { HeaderModule } from '../header-component/header.module';
import { FooterModule } from '../footer-component/footer.module';
import { MaterialModule } from '../material-module/material.module';


@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
