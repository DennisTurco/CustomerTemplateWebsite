import { type SchemaTypeDefinition } from 'sanity'
import gatti from './gatti';
import menu from './menu';
import projects from './projects';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gatti, menu, projects],
}
