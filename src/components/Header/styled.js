import styled from 'styled-components';
import logo from '../../assets/images/alfredo-logo.png';

export const Header = styled.header`
  padding: 22px 44px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

// export const ImageContainer = styled.div``;
export const Li = styled.li``;

export const Img = styled.img.attrs({
  src: logo,
})`
  height: 80px;
`;

export const a = styled.a`
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: filter 200ms;

  &:hover {
    filter: brightness(1.75);
  }
`;
