import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
}) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | ${BUSINESS_CONFIG.businessName}`;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | ${BUSINESS_CONFIG.businessName}`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, keywords, canonicalPath]);

  return null;
};
