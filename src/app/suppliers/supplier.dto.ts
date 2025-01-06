import { Address } from '../address/address.dto';
/**
 * tipo para  os forcedores
 */
export interface Supplier {
  id?: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: Address;
}
