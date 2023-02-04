import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  providers: [provideHttpClient()],
  exports: [ProductListComponent],
})
export class MerchCoreModule {}
