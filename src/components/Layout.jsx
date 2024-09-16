import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = () => {
    return (
        <>
            <Nav />
            <div className='page-container'>
                <Outlet />
            </div>
        </>
    )
}
export default Layout