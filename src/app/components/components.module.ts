import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PrimaryNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    PageHeaderComponent,
    PageFooterComponent,
    PrimaryNavbarComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<ComponentsModule> {
    return {
      ngModule: ComponentsModule,
      providers: [

      ]
    };
  }
}
