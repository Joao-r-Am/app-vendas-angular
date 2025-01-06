import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-suppliers-show',
  standalone: true,
  imports: [MaterialModule, AsyncPipe, LoadingBarComponent, RouterLink],
  templateUrl: './suppliers-show.component.html',
  styleUrl: './suppliers-show.component.css',
})
export class SuppliersShowComponent implements OnInit {
  route = inject(ActivatedRoute);
  supplierService = inject(SupplierService);
  supplier: Supplier;
  supplierObservable: Observable<Supplier>;

  async ngOnInit() {
    /**
     * o + converte a string para numero e o route é usado para recuperar o id do usuario apenas pela url
     */

    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(id);
    this.supplier = await lastValueFrom(this.supplierObservable);
    console.log(this.supplier);
  }
}
