import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-prLight py-6 dark:border-prDark md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-prDark dark:text-prLight md:text-left">
            Built by{' '}
            <Link
              href="https://github.com/alphajoop"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Alpha DIOP
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/alphajoop/gitfun"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
