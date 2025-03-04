import { type SchemaTypeDefinition } from 'sanity';

const cats: SchemaTypeDefinition = {
  name: 'gatti',
  title: 'Lista Gatti',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'sesso',
      title: 'Sesso',
      type: 'string',
      options: {
        list: [
          { title: 'Maschio', value: 'Maschio' },
          { title: 'Femmina', value: 'Femmina' },
        ],
      },
    },
    {
      name: 'eta',
      title: 'Età',
      type: 'string',
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'descrizione',
      title: 'Descrizione',
      type: 'text',
    },
  ],
};

export default cats;
