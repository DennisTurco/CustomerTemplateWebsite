import { type SchemaTypeDefinition } from 'sanity';

const why: SchemaTypeDefinition = {
  name: 'whyData',
  title: 'Servizi',
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
    {
      name: 'data', // Cambiato nome del campo in 'data' per rappresentare correttamente l'array di oggetti
      title: 'Servizi (Max 3)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titolo',
              type: 'string',
              description: 'Titolo dell\'elemento',
            },
            {
              name: 'image',
              title: 'Immagine',
              type: 'image',
              description: 'Immagine dell\'elemento',
            },
            {
              name: 'description',
              title: 'Descrizione',
              type: 'text',
              description: 'Descrizione dell\'elemento',
            },
            {
              name: 'altText',
              title: 'Testo ALt',
              type: 'string',
              description: 'Testo Alt dell\'elemento',
            },
          ],
        },
      ],
      // Limitiamo a 3 voci esatte
      validation: Rule => Rule.length(3).error('You must have exactly 3 items in this list.'),
      // Pre-popolazione dei dati (pre-compilazione direttamente nel campo)
      initialValue: () => [
        {
          title: "Quality",
          image:"/images/coffee-bean-bag.png",
          description: "We believe in quality over quantity",
          altText: "Quality",
        },
        {
          title: "Fast Delivery Service",
          image:"/images/coffee-bean-bag.png",
          description: "We support fast delivery services",
          altText: "Fast Delivery Service",
        },
        {
          title: "Best in Business",
          image:"/images/coffee-bean-bag.png",
          description: "We are best in business",
          altText: "Business",
        },
      ],
    },
  ],
};

export default why;
