import styled from "styled-components";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BiLogoSlack } from "react-icons/bi";
import Theme from "@/components/Header/Theme";
import { usePathname } from "next/navigation";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0px 24px;
`

const Logo = styled.h1`
  font-size: 40px;
`
function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">
          <BiLogoSlack />
        </Link>
      </Logo>
      <Navigation />
      <Theme />
    </HeaderWrapper>
  );
}

export default Header;