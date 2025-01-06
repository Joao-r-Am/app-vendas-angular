import { Category } from '../categories/category.dto';
import { Supplier } from '../suppliers/supplier.dto';

/**
 * Interface do tipo Product
 */
export interface Product {
  id?: number;
  supplier?: Supplier;
  category?: Category;
  unitPrice: number;
  unitsInStock: number;
  name: string;
  discontinued: Boolean;
}
