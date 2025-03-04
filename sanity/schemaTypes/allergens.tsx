import { type SchemaTypeDefinition } from 'sanity';

const allergens: SchemaTypeDefinition = {
    name: 'allergen',
    title: 'Allergen',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the allergen',
      },
      {
        name: 'symbol',
        title: 'Symbol',
        type: 'string',
        description: 'Emoji or symbol representing the allergen',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A brief description of the allergen',
      },
    ],
  };

  export default allergens;
  