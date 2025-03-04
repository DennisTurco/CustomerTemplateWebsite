import { type SchemaTypeDefinition } from 'sanity';

const menu: SchemaTypeDefinition = {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'imageURL',
      title: 'Image URL',
      type: 'url',
      description: 'URL of the menu item image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the dish',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the dish',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Price of the dish (e.g., €12.00)',
    },
    {
      name: 'allergens',
      title: 'Allergens',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'allergen' }], // Referenza ai documenti allergeni
        },
      ],
      description: 'List of allergens for the dish',
    },
  ],
};


export default menu;
