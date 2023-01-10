import React from 'react';

export interface IFooterLinksAbout {
  id: number;
  src?: string;
  title: string;
}

export interface IFooterLinksShops {
  id: number;
  src?: string;
  title: string;
}

export interface IFooterLinksSrc {
  id: number;
  src?: string;
  title?: React.ReactNode | null;
}

export interface IFooterContent {
  about: IFooterLinksAbout[];
  shop: IFooterLinksShops[];
  src: IFooterLinksSrc[];
}
