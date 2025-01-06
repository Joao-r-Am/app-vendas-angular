import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Supplier } from '../../supplier.dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suppliers-card',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './suppliers-card.component.html',
  styleUrl: './suppliers-card.component.css',
})
export class SuppliersCardComponent {
  @Input({ required: true }) supplier: Supplier;
}
