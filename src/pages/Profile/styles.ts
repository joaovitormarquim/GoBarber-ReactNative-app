import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
  top: 120px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
  width: 186px;
  height: 186px;
  margin-bottom: 48px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  margin-top: 64px;
  border-radius: 98px;
  align-self: center;
`;
