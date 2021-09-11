import type { FC } from 'react'
import type { IconType } from 'react-icons'
import { styled } from '../styles/theme'
import * as Effects from '../components/Effects'

export const ItemWrapper = styled('li', {
  display: 'flex',
  gap: '11px'
})
export const ItemContext = styled('div', {
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

export const Link: FC<{ [keys: string]: unknown }> = (props) => {
  return (
    <Effects.Featured rel='noopener' target='_blank' css={{ margin: 0 }} {...props} />
  )
}

export const Title: FC = ({ children }) => {
  return (
    <h2>
      <Effects.Colored color='blue'>{children}</Effects.Colored>
    </h2>
  )
}
