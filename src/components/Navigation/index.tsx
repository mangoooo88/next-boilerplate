import Link from "next/link";
import styled from "styled-components";
import { usePathname, useRouter, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  li.active{
    color:#2196f3;
  }
`

interface IMenuData {
  id: string;
  name: string;
  path: string;
}

const menuData: IMenuData[] = [
  {id: 'menu01', name: 'Home', path: '/'},
  {id: 'menu02', name: 'About', path: '/about'},
  {id: 'menu03', name: 'Weather', path: '/weather'},
];

function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <Ul>
        {menuData.map(menu => <li key={menu.id} className={`${menu.path === pathname ? 'active' : null}`}><Link href={menu.path}>{menu.name}</Link></li>)}
      </Ul>
    </nav>
  );
}

export default Navigation;