import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  model: string;
  location: string;
  status: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  location?: string;
  status?: string;
  company_id?: string;
}
