import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = () => {
    return (
        <>
            <Nav />
            <div id='Page' className='page-container'>
                <Outlet />
            </div>
        </>
    )
}
export default Layout