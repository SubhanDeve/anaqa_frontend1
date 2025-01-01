import React from 'react'
import Dashboard from './dashboard'
import Shop from './shop'
import Logout from './logout'
import Candle from './candle'
import Message from './message'
import Profile from './profile'
import Ticket from './ticket'
import Note from './note'
import Task from './task'
import Discount from './discount'
import Folder from './folder'
import MessageQuestion from './MessageQuestion'
import Textdocument from './Textdocument'
import Support24 from './Support24'

const SVGIcon = ({ path, color }) => {
  switch (true) {
    case path.includes('dashboard'):
      return <Dashboard color={color} />
    case path.includes('saloon'):
      return <Shop color={color} />
    case path.includes('users'):
      return <Profile color={color} />
    case path.includes('bookings'):
      return <Ticket color={color} />
    case path.includes('services'):
      return <Task color={color} />
    case path.includes('promotions'):
      return <Discount color={color} />
    case path.includes('reviews'):
      return <Note color={color} />
    case path.includes('requests'):
      return <Folder color={color} />
    case path.includes('complaints'):
      return <MessageQuestion color={color} />
    case path.includes('contract'):
      return <Textdocument color={color} />
    case path.includes('support'):
      return <Support24 color={color} />
    case path.includes('faqs'):
      return <Message color={color} />
    case path.includes('settings'):
      return <Candle color={color} />
    case path.includes('logout'):
      return <Logout color={color} />
    default:
      return null
  }
}

export default SVGIcon
