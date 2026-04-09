import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        tree={source.getPageTree()}
        nav={{
          title: 'Jose Madrid Salsa',
          url: '/docs',
        }}
        links={[
          { text: 'Main Site', url: 'https://www.josemadrid.net' },
          { text: 'Products', url: 'https://www.josemadrid.net/products' },
          { text: 'Recipes', url: 'https://www.josemadrid.net/recipes' },
        ]}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
