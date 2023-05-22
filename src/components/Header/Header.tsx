import React from 'react';
import {IoIosNotificationsOutline} from 'react-icons/io';

function Header() {
  return (
    <header>
      <h1>Logo da Empresa</h1>
      <IoIosNotificationsOutline className='notification'/>
      <p>Ola, Eduardo!</p>
      
    </header>
  );
}

export default Header;
