import { MenuItem, Sidebar } from "./style";

const SideBar = () => {
  const menuItems = [
    { title: "Wallets", active: true },
    { title: "Prices", active: false },
    { title: "Peer2Peer", active: false },
    { title: "Activity", active: false },
    { title: "Settings", active: false },
  ];
  return (
    <Sidebar>
      {menuItems.map((item) => (
        <MenuItem key={item.title} active={item.active}>
          {item.title}
        </MenuItem>
      ))}
    </Sidebar>
  );
};

export default SideBar;
