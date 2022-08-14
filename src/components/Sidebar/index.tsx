import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/Amit.png"
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaArrowLeft, FaArrowRight, FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import './styles.scss';
import { useState } from 'react';

const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const navigation = useNavigate();
    return (
        <div className='sidebar'>
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                    <div className="closemenu" onClick={menuIconClick}>
                        {/* changing menu collapse icon on click */}
                        {menuCollapse ? (
                            <FaArrowLeft size={'Fa-lg'} />
                        ) : (
                            <FaArrowRight size={'Fa-lg'} />
                        )}
                    </div>

                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={window.location.pathname === "/"} icon={<FaHome />}>Dashboard
                            <Link to={'/home'} />
                        </MenuItem>
                        <MenuItem active={window.location.pathname === "/about/"} icon={<FaUser />}>About
                            <Link to={'/about'} />
                        </MenuItem>
                        <MenuItem icon={<FaEnvelope />}>Contact</MenuItem>
                        <SubMenu title="Components" icon={<FaHeart />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}

export default Sidebar;