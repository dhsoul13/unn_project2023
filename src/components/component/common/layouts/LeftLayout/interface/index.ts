import React from 'react';

export interface ILeftLayout {
  children: React.ReactElement;
  title: string;
  functional?: React.ReactElement | null;
  classList?: string;
}
