import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LandingComponent } from './landing/landing.component';
import { ExperieceComponent } from './experiece/experiece.component';
import { SkillsComponent } from './skills/skills.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FooterComponent } from './footer/footer.component';
import { StudiesComponent } from './studies/studies.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PresentationComponent,
    MainMenuComponent,
    LandingComponent,
    ExperieceComponent,
    SkillsComponent,
    RecommendationsComponent,
    FooterComponent,
    StudiesComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class ComponentsModule {}
