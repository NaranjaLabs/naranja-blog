import StudioNavBar from './components/StudioNavBar';

import { schemaTypes } from './schemas';

import revalidateAction from '@lib/revalidateAction';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import { defineConfig } from 'sanity/lib/exports';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Naranja',
  title: 'Naranja Content Studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  },
  studio: {
    components: {
      navbar: StudioNavBar
    }
  },
  document: {
    actions: (prev) =>
      prev.map((originalAction) => {
        switch (originalAction.action) {
          case 'delete':
            return revalidateAction(originalAction, 'delete');
          case 'publish':
            return revalidateAction(originalAction, 'publish');
          case 'unpublish':
            return revalidateAction(originalAction, 'publish');
          default:
            return originalAction;
        }
      })
  }
});
