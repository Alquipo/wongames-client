import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}
const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subTitle,
  title,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
      <Button as="a" size="large" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner