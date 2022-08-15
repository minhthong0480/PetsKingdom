import {Link} from 'react-router-dom'

const DashboardNav = () => {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link to='/dashboard'></Link>
            </li>
        </ul>
    )
}

export default DashboardNav