import { type SchemaTypeDefinition } from 'sanity';

const projects: SchemaTypeDefinition = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'imageURL',
      title: 'Image URL',
      type: 'url',
      description: 'URL of the project image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the project',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link to the project website or page',
    },
  ],
};

export default projects;
