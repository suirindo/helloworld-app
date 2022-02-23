import { createTheme, ThemeOptions } from '@material-ui/core'

const defaultThemeOptions: ThemeOptions = {
  palette: { primary: { main: '#1DA1F2', contrastText: '#FFFFFF' } },
}
export const defaultTheme = createTheme(defaultThemeOptions)
