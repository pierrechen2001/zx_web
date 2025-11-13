export function getOrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: '中星害蟲驅除有限公司',
    image: `${baseUrl}/og-image.jpg`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+886-2-xxxx-xxxx',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '待補充完整地址',
      addressLocality: '新北市',
      addressRegion: '三重區',
      postalCode: '待補充',
      addressCountry: 'TW',
    },
    areaServed: [
      '台北市',
      '新北市',
      '桃園市',
      '新竹縣市',
      '台南市',
    ],
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-17:00',
    ],
    sameAs: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://line.me/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '害蟲防治服務',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '白蟻防治',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '蟑螂防治',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '老鼠防治',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '蚊蠅防治',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '塵蟎防治',
          },
        },
      ],
    },
  };
}

export function getWebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '中星害蟲驅除有限公司',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/pests?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

