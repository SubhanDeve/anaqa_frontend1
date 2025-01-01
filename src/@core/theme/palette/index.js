const DefaultPalette = (mode, skin) => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = 'rgb(250, 245, 246)'
  const darkColor = 'rgb(205, 146, 157)'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return '#CD929D'
    } else if (mode === 'light') {
      return '#F8F8F9'
    } else return '#F8F8F9'
  }
  const defaultColor = () => {
    if (mode === 'light') {
      return '#6C757D'
    } else return whiteColor
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#FAF5F6',
      lightBg: '#F2F4F7',
      bodyBg: mode === 'light' ? '#F2F4F7' : '#282A42',
      trackBg: mode === 'light' ? '#F2F2F4' : '#41435C',
      tooltipBg: mode === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#3A3E5B',
      bookingForm: mode === 'light' ? whiteColor : darkColor
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: '#787EFF',
      main: '#666CFF',
      dark: '#5A5FE0',
      contrastText: whiteColor
    },
    secondary: {
      light: '#7F889B',
      main: '#6D788D',
      dark: '#606A7C',
      contrastText: whiteColor
    },
    error: {
      light: '#FF625F',
      main: '#FF4D49',
      dark: '#E04440',
      contrastText: whiteColor
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
      contrastText: whiteColor
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: whiteColor
    },
    success: {
      light: process.env.NEXT_PUBLIC_THEME_COLOR,
      main: process.env.NEXT_PUBLIC_THEME_COLOR,
      dark: process.env.NEXT_PUBLIC_THEME_COLOR,
      contrastText: whiteColor
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#6C757D',
      500: '#6C757D',
      600: '#1C1C1C',
      700: '#212529',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: `#6C757D`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : '#30334E',
      default: defaultBgColor()
    },
    color: {
      default: defaultColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 1)`,
      hoverOpacity: 0.05,
      selected: `#CD929D`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `#CD929D`
    }
  }
}

export default DefaultPalette
