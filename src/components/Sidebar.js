import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css'
function Sidebar() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: 24 }}>
                <ul className='menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;
