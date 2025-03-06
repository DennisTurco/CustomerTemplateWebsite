import { type SchemaTypeDefinition } from 'sanity';

const menu: SchemaTypeDefinition = {
  name: 'menuItem',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: { hotspot: true },
      description: 'Immagine del piatto',
    },
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      description: 'Nome del piatto',
    },
    {
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      description: 'Descrizione del piatto',
    },
    {
      name: 'price',
      title: 'Prezzo',
      type: 'string',
      description: 'Prezzo del piatto (es., €12.00)',
    },
    {
      name: 'allergens',
      title: 'Allergeni',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'allergen' }], // Referenza ai documenti allergeni
        },
      ],
      description: 'Lista degli allergeni del piatto',
    },
  ],
};


export default menu;
