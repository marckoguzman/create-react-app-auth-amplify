import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
const Sidebar = () => {
    return (
    <div className="sidebar">
    <ul>
        <li>
         <Link to="/"><FaIcons.FaHome className="me-2" /> Inicio</Link>    
         </li> 
         <li>
         <Link to="/Sales"><FaIcons.FaRegChartBar className="me-2"/>Ventas</Link>    
         </li> 
         <li>
         <Link to="/Clients" ><FaIcons.FaUserFriends className="me-2" />Clientes</Link>    
         </li>  
    </ul>
    </div>
        )
    }
    export default Sidebar;