import theme from '@mobile/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fontSizes: typeof theme.fontSizes;
  }
}
