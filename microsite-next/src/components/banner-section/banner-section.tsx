import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import bannerStyles from './banner-section.module.scss';

export type IBannerSectionProps = PropsWithChildren<{
  className?: string;
  greyBackground?: boolean;
  greenGradientBackground?: boolean;
  greenBottomGradientBackground?: boolean;
  greenCallToActionGradientBackground?: boolean;
}>;

export const BannerSection = ({
  children,
  className,
  greyBackground = false,
  greenGradientBackground = false,
  greenBottomGradientBackground = false,
  greenCallToActionGradientBackground = false,
}: IBannerSectionProps) => (
  <section
    className={clsx(bannerStyles.bannerSection, className, {
      greyBackground,
      greenGradientBackground,
      greenBottomGradientBackground,
      greenCallToActionGradientBackground,
    })}
  >
    <div className="container padding-horiz--lg padding-vert--xl">
      {children}
    </div>
  </section>
);
