import Window from '@mobile/services/dimensions';
import styled from 'styled-components/native';

export const TouchableContainer = styled.TouchableOpacity`
  width: 100%;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: Window.heightScale(0.15),
  },
})`
  width: 100%;
`;
