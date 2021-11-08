import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
  poster?: string;
  icon?: string;
  iconSvg?: string;
  twitterSite?: string;
  twitterCard?: string;
};

export function TitleAndMetaTags({
  url = 'https://www.virtualcollector.com',
  pathname,
  title = 'VirtualCollector',
  description = 'Buy & Sell Certified Collectibles',
  icon = '/favicon.ico',
  iconSvg = '/favicon.svg',
  twitterSite = '',
  twitterCard = 'summary_large_image',
  poster,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const image = poster ? `${url}/${poster}` : `${url}/social.png`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />

      {icon && <link rel="icon" href={icon} />}
      {iconSvg && <link rel="icon" href={iconSvg} type="image/svg+xml" />}

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
    </Head>
  );
}
