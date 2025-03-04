import { type SchemaTypeDefinition } from 'sanity';

const aboutSection: SchemaTypeDefinition = {
    name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string', // Per il titolo "Chi Siamo"
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // Per il testo descrittivo
    },
  ],
};

  export default aboutSection;
  