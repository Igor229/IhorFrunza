import './App.css'
import './Menu.css'

import DashbordItem from './DashbordItem'
import Header from './Header'
import MenuItem from './MenuItem'
import block from './icons/block.svg'
import chat from './icons/chat.svg'
import customers from './icons/customers.svg'
import img from './icons/img.svg'
import dollar from './icons/dollar.svg'
import basket from './icons/basket.svg'
import PreviewItem from './Preview'


function App() {
  return (
    <>
      <Header />
      
      <div className='sidebar'>
        <ul className='menu'>
          <MenuItem icon = {block} name = 'Dashboard' isActive = 'active'/>
          <MenuItem icon = {dollar} name = 'Sales'/>
          <MenuItem icon = {img} name = 'Catalog'/>
          <MenuItem icon = {customers} name = 'Customers'/>
          <MenuItem icon = {chat} name = 'Review'/>
        </ul>
      </div>

      <div className='main-content'>
        <div className='content-wrapper'>
          <DashbordItem icon = {dollar} iconColor = 'lightblue' title = 'Monthly Revenue' value = '1385 $US'/>
          <DashbordItem icon = {basket} iconColor = 'darkorange' title = 'New Orders' value = '12'/>
          <DashbordItem icon = {chat} iconColor = 'firebrick' title = 'Pending Reviews' action = 'reviewers'/>
          <DashbordItem icon = {customers} iconColor = 'forestgreen' title = 'New Customers' action = 'newUsers'/>
        </div>
        <div className='preview'><PreviewItem/></div>
      </div>

      
    </>
    );
}

export default App;
