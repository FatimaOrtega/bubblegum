import * as React from 'react'
import './navbar.css';




  const Navbar = (props: {
    brand: { name: string; to: string },
    links: Array<{ name: string, to: string }>
  }) => {
    const { brand, links } = props;
    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <li key={link.name}><a href={link.to}>{link.name}</a></li>);
    return (
      <div className="nav">
        <div className="Brand"> {brand.name}</div>
        <ul>
          <NavLinks />
        </ul>
      </div>
    )
  };

  
export default Navbar;