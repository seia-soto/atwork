import type { IconType } from 'react-icons'
import { styled } from '../styles/theme'

export const ItemWrapper = styled('div', {
  display: 'flex',
  gap: '11px'
})
export const ItemContext = styled('p', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2.5px 0'
})
export const ItemParagraph = styled('p', {
  margin: 0
})

export const ItemIcon = styled(ItemContext, {
  fontSize: '1.5em'
})

interface IIconItemComponentProps {
  icon: IconType
  children: unknown

  [keys: string]: unknown
}

export const Item = ({ icon: Icon, children }: IIconItemComponentProps) => {
  return (
    <ItemWrapper>
      <ItemIcon>
        <Icon />
      </ItemIcon>
      <ItemContext>
        <ItemParagraph>
          {children}
        </ItemParagraph>
      </ItemContext>
    </ItemWrapper>
  )
}
