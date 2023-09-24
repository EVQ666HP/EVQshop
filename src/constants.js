export const SortingItems = [
  { name: 'Most POPULAR', sortPropertyFetch: 'rating&order=desc' },
  { name: 'Price LOW ', sortPropertyFetch: 'price' },
  { name: 'Price HIGHT', sortPropertyFetch: 'price&order=desc' },
  { name: 'Name A-Z', sortPropertyFetch: 'brand' },
  { name: 'Name Z-A', sortPropertyFetch: 'brand&order=desc' },
];
export const HeaderСategories = [
  { name: 'Men', url: 'Men' },
  { name: 'Women', url: 'Women' },
  { name: 'Final sale', url: 'Final-sale' },
  { name: 'New collection', url: 'New-collection' },
];

export const specialCategoryArray = ['ALL', 'NEW COLLECTION', 'FINAL SALE', 'POPULAR PURCHASES'];

export const inputAddress = [
  {
    placeholder: 'First name',
    name: 'firstName',
  },
  {
    placeholder: 'Last name',
    name: 'lastName',
  },
  {
    placeholder: 'Street address 1',
    name: 'streetAddress1',
  },
  {
    name: 'streetAddress2',
    placeholder: 'Street address 2',
  },
  {
    placeholder: 'State',
    name: 'state',
  },
  {
    placeholder: 'Zip or postal code',
    name: 'postalCode',
  },
  {
    placeholder: 'Phone',
    name: 'phone',
  },
];
