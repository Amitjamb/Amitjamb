import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './styles.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags top-tags'>&lt;/body&gt;</span>
                <br />
                <span className='tags bottom-tags'>&lt;/html&gt;</span>
            </div>
        </div>

    )
}

export default Layout;