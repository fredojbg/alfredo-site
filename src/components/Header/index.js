import React from 'react';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <div>
          <S.Img></S.Img>
        </div>
        <S.Ul>
          <li>
            <S.a>Home</S.a>
          </li>
          <li>
            <S.a>About</S.a>
          </li>
          <li>
            <S.a>Projects</S.a>
          </li>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
