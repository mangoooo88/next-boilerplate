import { BsMoon, BsSun } from "react-icons/bs";
import styled from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "@/styles/theme";

const ThemeButton = styled.button<{ $theme: string }>`
  font-size: 24px;
  background-color: transparent;
  color: ${lightTheme.contrast}
`

function Theme() {
  const [theme, setTheme] = useState('light')

  function handleTheme() {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeButton type="button" $theme={theme} onClick={handleTheme}>
      {theme === 'light' ? <BsSun/> : <BsMoon/>}
    </ThemeButton>
  )
}

export default Theme