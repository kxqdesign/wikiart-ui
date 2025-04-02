import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebsiteStructuredDataProps {
  siteUrl: string;
  siteName: string;
  description: string;
  language?: string;
}

export const WebsiteStructuredData: React.FC<WebsiteStructuredDataProps> = ({
  siteUrl,
  siteName,
  description,
  language = 'en-US',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: description,
    inLanguage: language,
    potentialAction: {
      '@type': 'SearchAction',
      'target': `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface DesignStyleStructuredDataProps {
  styleName: string;
  description: string;
  url: string;
  datePublished?: string;
  imageUrl?: string;
  authorName?: string;
  keywords?: string[];
}

export const DesignStyleStructuredData: React.FC<DesignStyleStructuredDataProps> = ({
  styleName,
  description,
  url,
  datePublished = new Date().toISOString(),
  imageUrl = "https://lovable.dev/opengraph-image-p98pqg.png",
  authorName = "WikiArt UI",
  keywords = [],
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: styleName,
    description: description,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "WikiArt UI",
      logo: {
        "@type": "ImageObject",
        url: "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    },
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    datePublished: datePublished,
    dateModified: new Date().toISOString(),
    keywords: keywords.join(", ")
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbStructuredData: React.FC<{
  items: Array<{ name: string; url: string }>;
}> = ({ items }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default {
  WebsiteStructuredData,
  DesignStyleStructuredData,
  BreadcrumbStructuredData
};