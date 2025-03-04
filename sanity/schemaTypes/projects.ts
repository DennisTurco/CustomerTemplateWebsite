import { type SchemaTypeDefinition } from 'sanity';

const projects: SchemaTypeDefinition = {
  name: 'projects',
  title: 'Lista Progetti',
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

export default projects;
