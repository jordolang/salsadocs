import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import Image from 'next/image';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        options: {
          type: 'static',
        },
      }}
      theme={{
        enabled: true,
        defaultTheme: 'system',
        attribute: 'class',
      }}
    >
      <DocsLayout
        tree={source.getPageTree()}
        nav={{
          title: (
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-image.png"
                alt="Jose Madrid Salsa"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500"
                style={{ fontFamily: 'var(--font-volkhov), Volkhov, Georgia, serif' }}
              >
                Jose Madrid Salsa
              </span>
            </div>
          ),
          url: '/docs',
        }}
        sidebar={{
          banner: (
            <div className="rounded-lg bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-200/50 dark:border-red-800/30 p-3 mb-2">
              <p className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wider mb-1">
                Developer Docs
              </p>
              <p className="text-[11px] text-red-600/70 dark:text-red-400/60 leading-relaxed">
                API reference, guides, and everything you need to build with Jose Madrid Salsa.
              </p>
            </div>
          ),
        }}
        links={[
          {
            text: 'Main Site',
            url: 'https://www.josemadrid.net',
            external: true,
          },
          {
            text: 'Products',
            url: 'https://www.josemadrid.net/products',
            external: true,
          },
          {
            text: 'GitHub',
            url: 'https://github.com/jordolang/josemadridsalsa',
            external: true,
          },
        ]}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
