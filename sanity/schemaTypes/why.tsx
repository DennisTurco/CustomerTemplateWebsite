import { type SchemaTypeDefinition } from 'sanity';

const why: SchemaTypeDefinition = {
  name: 'whyData',
  title: 'Why Data (MAX 3)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the item',
    },
    {
      name: 'imageURL',
      title: 'Image URL',
      type: 'url',
      description: 'URL of the image for the item',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the item',
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Alt text for the image',
    },
  ],
  validation: (Rule) => Rule.custom((value, context) => {
    const existingDocuments = context.documentStore?.getDocuments('whyData');
    if (existingDocuments && existingDocuments.length >= 3) {
      return 'You cannot create more than 3 "Why Data" documents.';
    }
    return true; // Valida se il numero di documenti è inferiore a 3
  }),
};

export default why;
