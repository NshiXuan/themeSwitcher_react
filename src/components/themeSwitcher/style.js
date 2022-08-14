import styled from 'styled-components'

const ThemeSwitcherStyle = styled.div`
  label{
    --gap: 5px;
    --size: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60px;
    height: 30px;
    border-radius: 50px;
    background-color: var(--themeSwitcherBg);
    cursor: pointer;
    z-index: 1;

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--size);
      height: var(--size);

      svg{
        color: var(--white);
      }
    }
  }

  label::after{
    position: absolute;
    left: var(--gap);
    width: var(--size);
    height: var(--size);
    content: '';
    background-color: var(--mediumSlateBlue);
    border-radius: 50%;
    transition: .3s ease left;
    z-index: -1;
  }

  input:checked + label::after{
    left: calc(100% - var(--gap) - var(--size));
  }

  input{
    display: none;
  }
`

export default ThemeSwitcherStyle
