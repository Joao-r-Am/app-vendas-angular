import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { SuppliersFormComponent } from '../suppliers-form/suppliers-form.component';

@Component({
  selector: 'app-suppliers-edit',
  standalone: true,
  imports: [
    MaterialModule,
    AsyncPipe,
    LoadingBarComponent,

    SuppliersFormComponent,
  ],
  templateUrl: './suppliers-edit.component.html',
  styleUrl: './suppliers-edit.component.css',
})
export class SuppliersEditComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  supplierService = inject(SupplierService);
  supplier: Supplier;
  supplierObservable: Observable<Supplier>;

  async ngOnInit() {
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(id);
    this.supplier = await lastValueFrom(this.supplierObservable);
    console.log(this.supplier);
  }

  async onSave(supplier: Supplier) {
    this.supplierObservable = this.supplierService.save(supplier);
    this.supplier = await lastValueFrom(this.supplierObservable);
    this.router.navigate(['/suppliers/show/', supplier.id]);
  }

  async onBack() {
    this.router.navigate(['/suppliers']);
  }
}
