import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { SupplierService } from '../supplier.service';
import { LoadingBarComponent } from '../../loading-bar.component';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SuppliersCardComponent } from './suppliers-card/suppliers-card.component';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [
    MaterialModule,
    LoadingBarComponent,
    AsyncPipe,
    RouterLink,
    SuppliersCardComponent,
  ],
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.css',
})
export class SuppliersListComponent implements OnInit {
  suppliers!: Supplier[];
  supplierObservable!: Observable<Supplier[]>;

  constructor(private supplierService: SupplierService) {}

  async ngOnInit() {
    this.supplierObservable = this.supplierService.getAll();
    this.suppliers = await lastValueFrom(this.supplierObservable);
  }
}
