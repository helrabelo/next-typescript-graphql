import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { FilterAlt } from '@styled-icons/material/FilterAlt'

import * as S from './styles'

import { Container } from 'components/Container'
import SearchField from 'components/SearchField'
import Button from '../Button'

export type LineColors = 'primary' | 'secondary'

export type SectionHeadingProps = {
  title: string
  subtitle: string
  filter?: boolean
  children?: React.ReactNode
}

const SectionHeading = ({ title, subtitle, filter }: SectionHeadingProps) => (
  <Container>
    <S.SectionHeadingTitle>{title}</S.SectionHeadingTitle>
    <S.SectionHeadingSubtitle>{subtitle}</S.SectionHeadingSubtitle>
    {filter && (
      <S.SectionHeadingFiltersWrapper>
        <Button size="small" icon={<FilterAlt />} style={{ marginRight: 20 }}>
          Filter by Set
        </Button>
        <SearchField
          name="search"
          placeholder="Search"
          type="text"
          iconPosition="right"
          icon={<SearchIcon aria-label="Search" />}
        />
      </S.SectionHeadingFiltersWrapper>
    )}
  </Container>
)

export default SectionHeading
