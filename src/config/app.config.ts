interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Rideee',
  addOns: ['notifications', 'file upload'],
};
