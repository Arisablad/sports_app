export interface TCreatedBy {
  id: string;
  name: string;
}

export interface TSeo {
  slug: string;
  index: boolean;
  title: string;
  follow: boolean;
  keywords: string[];
  description: string;
  redirect_type: string | null;
}

export interface TGalleryImage {
  id: null;
  path: null;
  type: string;
  gallery: {
    url: string;
    alt: string;
    height: number;
    width: number;
  };
  thumbnail: {
    url: string;
    alt: string;
    height: number;
    width: number;
  };
  original: {
    url: string;
    alt: string;
  };
}

export interface TUpdatedAt {
  time: string;
  unit: string;
}

export interface TFeaturedArticle {
  id: string;
  mainMedia: TGalleryImage[];
  categoryLabel: string;
  categoryUrl: string;
  updatedAt: TUpdatedAt;
  publishedAt: string;
  title: string;
  shortTitle: null | string;
  type: string;
  url: string;
  related: null | any; // You can replace 'any' with a more specific type if you have it.
  publishedRegions: any[]; // You can replace 'any' with a more specific type if you have it.
  isAdultContent: boolean;
}

export interface TLayoutContext {
  activeHeaderId: null | string | number;
  meta: {
    canonical: string;
    noFollow: boolean;
    noIndex: boolean;
  };
}

export interface TAdsTargeting {
  category: string;
  screen: string;
  adUnitPathName: string;
  environment: string;
  sport: string;
}

type TPaginationLinks = {
  next: string;
};

type TPagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: TPaginationLinks;
};

export interface THomePageArticles {
  category: TNewsCategory;
  meta: {
    pagination: TPagination;
  };
  aricles: TFeaturedArticle[];
}

export interface TNewsCategory {
  id: string;
  pathname: string;
  description: null | string;
  active: boolean;
  listPosition: number;
  title: string;
  initialTitle: string;
  subs: any[];
  media: any[];
  createdAt: string;
  createdBy: TCreatedBy;
  seo: TSeo;
  updatedAt: string;
  parentId: string | null;
}

export interface TSegmentTracking {
  screenClass: string;
  screenName: string;
}
export interface TNews {
  adsTargeting: TAdsTargeting;
  categories: TNewsCategory[];
  featuredArticles: TFeaturedArticle[];
  homepageArticles: THomePageArticles[];
  isNetworkError: boolean;
  layoutContext: TLayoutContext;
  segmentTracking: TSegmentTracking;
  topStories: TFeaturedArticle[];
}
