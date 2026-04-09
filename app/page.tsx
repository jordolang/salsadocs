import Link from 'next/link';
import Image from 'next/image';

const sections = [
  {
    title: 'Getting Started',
    description: 'Set up your development environment and get running in minutes.',
    href: '/docs/getting-started',
    icon: '🚀',
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Features',
    description: 'Explore checkout flows, payments, shipping, and the battle arena system.',
    href: '/docs/features',
    icon: '🌶️',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'API Reference',
    description: 'REST API endpoints, authentication, and request/response formats.',
    href: '/docs/api',
    icon: '📡',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Configuration',
    description: 'Environment variables, database setup, and third-party integrations.',
    href: '/docs/configuration',
    icon: '⚙️',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Deployment',
    description: 'Deploy to Vercel, manage environments, and run production builds.',
    href: '/docs/deployment',
    icon: '☁️',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Guides',
    description: 'Step-by-step walkthroughs for common tasks and workflows.',
    href: '/docs/guides',
    icon: '📖',
    color: 'from-pink-500 to-rose-600',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-red-50/30 dark:from-stone-950 dark:via-stone-900 dark:to-red-950/20">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-amber-500/5 dark:from-red-600/10 dark:to-amber-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-3xl" />

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-image.png"
              alt="Jose Madrid Salsa"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span
              className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500"
              style={{ fontFamily: 'var(--font-volkhov), Volkhov, Georgia, serif' }}
            >
              Jose Madrid Salsa
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.josemadrid.net"
              className="text-sm text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              Main Site
            </Link>
            <Link
              href="https://github.com/jordolang/josemadridsalsa"
              className="text-sm text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transition-all shadow-md hover:shadow-lg hover:shadow-red-500/20"
            >
              Documentation →
            </Link>
          </div>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold tracking-wider text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800/40 rounded-full uppercase">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Developer Documentation
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-white mb-6"
            style={{ fontFamily: 'var(--font-volkhov), Volkhov, Georgia, serif' }}
          >
            Build with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">
              Jose Madrid Salsa
            </span>
          </h1>

          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Everything you need to understand, extend, and deploy the Jose Madrid Salsa platform.
            Feature guides, API reference, configuration, and deployment workflows.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl hover:from-red-700 hover:to-red-600 transition-all shadow-lg hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link
              href="/docs/api"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-red-300 dark:hover:border-red-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              API Reference
            </Link>
          </div>
        </div>
      </header>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 transition-all hover:border-red-300 dark:hover:border-red-800 hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${section.color} opacity-5 group-hover:opacity-10 rounded-bl-full transition-opacity`} />
              <div className="text-3xl mb-3">{section.icon}</div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {section.description}
              </p>
              <div className="mt-4 text-xs font-medium text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Read more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-image.png"
              alt="Jose Madrid Salsa"
              width={24}
              height={24}
              className="rounded-md opacity-60"
            />
            <span className="text-sm text-stone-500 dark:text-stone-500">
              Jose Madrid Salsa Documentation
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-stone-500 dark:text-stone-500">
            <Link href="https://www.josemadrid.net" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              josemadrid.net
            </Link>
            <Link href="https://github.com/jordolang/josemadridsalsa" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              GitHub
            </Link>
            <Link href="https://www.josemadrid.net/products" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Products
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
