import { Breadcrumbs } from 'nextjs-breadcrumbs'

import * as S from './styles'

const Breadcrumb = () => {
  const breadcrumbs = Breadcrumbs()

  return <S.BreadcrumbsWarpper>{breadcrumbs}</S.BreadcrumbsWarpper>
}

export default Breadcrumb
