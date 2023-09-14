import { Navbar, Dropdown, Button, Menu, Drawer } from "react-daisyui";
import React from "react";

export function Main() {
  const [visible, setVisible] = React.useState(false);

const toggleVisible = () => {
  setVisible(!visible);
};
    
return (<Drawer
  side={
    <nav className="p-2 overflow-y-auto w-72 h-screen bg-base-100 text-base-content">
      <Menu horizontal={false}>
        <Menu.Item>
  <Menu.Details open={false} label="Blog">
    
  </Menu.Details>
</Menu.Item>
<Menu.Item>
  <a href="/blog">
    Blog
  </a>
</Menu.Item>
<Menu.Item>
  <a href="/contact">
    Contact
  </a>
</Menu.Item>
<Menu.Item>
  <a href="/">
    Home
  </a>
</Menu.Item>
<Menu.Item>
  <Menu.Details open={false} label="Nested">
    <Menu.Item>
  <a href="/nested/images">
    Images
  </a>
</Menu.Item>
  </Menu.Details>
</Menu.Item>
      </Menu>
    </nav>
  }
  open={visible}
  onClickOverlay={toggleVisible}
>
  <Navbar>
<Navbar.Start className="hidden max-lg:flex">
  <Menu horizontal className="p-0 items-center">
    <Button shape="square" color="ghost" onClick={toggleVisible} className="block lg:hidden">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</Button>
    <Menu.Item>
  <a href="/">
    My Site
  </a>
</Menu.Item>
    
  </Menu>
</Navbar.Start>
<Navbar.Start className="hidden lg:flex">
  <Menu horizontal className="p-0 items-center">
    
    <Menu.Item>
  <a href="/">
    My Site
  </a>
</Menu.Item>
    
  </Menu>
</Navbar.Start>

<Navbar.End className="hidden lg:flex">
  <Menu horizontal className="p-0 items-center">
    
    <Menu.Item>
  <Menu.Details open={false} label="Blog">
    
  </Menu.Details>
</Menu.Item>
<Menu.Item>
  <a href="/blog">
    Blog
  </a>
</Menu.Item>
<Menu.Item>
  <a href="/contact">
    Contact
  </a>
</Menu.Item>
<Menu.Item>
  <a href="/">
    Home
  </a>
</Menu.Item>
<Menu.Item>
  <Menu.Details open={false} label="Nested">
    <Menu.Item>
  <a href="/nested/images">
    Images
  </a>
</Menu.Item>
  </Menu.Details>
</Menu.Item>
    
  </Menu>
</Navbar.End>
</Navbar>
</Drawer>)
}

  