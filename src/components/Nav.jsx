// Nav.jsx || Natalie Rekai || #301484514 || 26-Sep-24

import { Link } from 'react-router-dom';
import logo from '../assets/MF-icon2-dark_500.png'

const Nav = () => {
    const pagesArr = ['home', 'about', 'projects', 'services', 'contact']
    
    return (
        <div id='Nav' className='nav-container'>
            <div className='nav-inner'>
                <div className='logo-container'>
                    <div className='logo'>
                        <img src={ logo }/>
                    </div>
                </div>
                <div className='title-container'>
                    <h3>Natalie Rekai</h3>
                    <h4>Lab 1: Portfolio</h4>
                </div>
                <div className='list-container'>
                    <ul>{ pagesArr.map((page,i) => <ListLink key={`list-${i}`} page={page}/>) }</ul>
                </div>
            </div>
        </div>
    )
}

const ListLink = (props) => {
    const {page} = props;

    if (page === 'home') {
        return (
            <li><Link to='/'>{page}</Link></li>
        )
    } else {
        return (
            <li><Link to={`/${page}`}>{page}</Link></li>
        )
    }
}
export default Nav