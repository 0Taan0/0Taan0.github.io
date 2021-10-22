import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FCFCFF')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#7277FF',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
Link: {
   baseStyle: props => ({
      color: mode('#3d7aed')(props),
      textUnderlineOffset: 3
    })
 }
}

const colors = {
  grassTeal: '#88ccca'
}


const theme = extendTheme({ styles, components, colors })
export default theme
