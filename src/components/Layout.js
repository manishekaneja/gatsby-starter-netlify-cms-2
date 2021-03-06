import { withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from './SiteMetadata';

const Layout = ({
  documentTitle,
  children,
  layout = 1,
}) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
        <Helmet>
          <html lang="en" />
          <title>{documentTitle || title}</title>u
          <meta name="description" content={description} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />
          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={documentTitle || title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
          />
        </Helmet>
      {layout === 1 && (
        <div className="bg-gray-900 text-white w-screen h-screen px-2 py-2 flex justify-center items-center sm:px-4 sm:py-4 overflow-hidden">
          {children}
        </div>
      )}
      {layout === 2 && (
        <div className="bg-gray-900 text-white h-screen overflow-y-auto ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
