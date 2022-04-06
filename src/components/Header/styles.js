import styled from 'styled-components';
import {ReactComponent as LogoSVG} from './Sejo.svg';
import {Marginals} from '../../styles';

export const Logo = styled(LogoSVG)`
  height: 80px;
  max-width: 1000px;
  width: 100%;
`;

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`;
