import { FC } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

export type PageContainerProps = {
  seoProps: NextSeoProps
}
export const PageContainer: FC<PageContainerProps> = ({
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

PageContainer.displayName = 'PageContainer'
export default PageContainer
