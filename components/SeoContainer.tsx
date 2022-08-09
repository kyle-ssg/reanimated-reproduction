import { FC } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

export type SeoContainerProps = {
  seoProps: NextSeoProps
}
export const SeoContainer: FC<SeoContainerProps> = ({
  children,
  seoProps,
  ...rest
}) => {
  return (
    <>
      <NextSeo {...seoProps} />
      {children}
    </>
  )
}

SeoContainer.displayName = 'SeoContainer'
export default SeoContainer
