import Head from 'next/head';

export function SiteHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={`${process.env.basePath}/favicon.png`} />
      <meta
        name="description"
        content={'Progressive web app to help you make choices.'}
      ></meta>
    </Head>
  );
}
