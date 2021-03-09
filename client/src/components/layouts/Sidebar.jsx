import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ToggleButtonGroup } from '../inputs';
import { sidebarData } from '../../utils';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div ref={ref}>
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <FaBars />
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaTimes />
          </Link>
          <div>
            <ul className="nav-menu-items">
              <li className="nav-text">
                <ToggleButtonGroup labels={['En', 'Ja']} />
              </li>
              {sidebarData.length > 0 &&
                sidebarData.map((item, index) => (
                  <li key={index} className="nav-text">
                    <Link to={item.path} onClick={showSidebar}>
                      {item.icon} <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
