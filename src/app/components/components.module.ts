import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    MainMenuComponent,
    LandingComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class ComponentsModule {}
