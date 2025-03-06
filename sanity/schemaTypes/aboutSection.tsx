import { type SchemaTypeDefinition } from 'sanity';

const aboutSection: SchemaTypeDefinition = {
    name: 'aboutSection',
  title: 'Sezione Chi Siamo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string', // Per il titolo "Chi Siamo"
    },
    {
      name: 'description',
      title: 'Descrizione',
      type: 'text', // Per il testo descrittivo
    },
  ],
};

  export default aboutSection;
  