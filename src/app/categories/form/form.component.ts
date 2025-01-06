import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../category.dto';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './form.component.html',
  styles: ``,
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private fb = inject(FormBuilder);

  categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
  });

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }

  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter<Category>();

  onSubmit() {
    this.save.emit(this.categoryForm.value as Category);
  }

  onBack() {
    this.back.emit();
  }
}
