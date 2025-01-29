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
import Textdocument from './Textdocument'
import Support24 from './Support24'
import ShopFilled from './shop_filled'
import DashboardFilled from './dashboard_filled'
import LogoutFilled from './logout_filled'
import CandleFilled from './candle_filled'
import MessageFilled from './message_filled'
import ProfileFilled from './profile_filled'
import TicketFilled from './ticket_filled'
import NoteFilled from './note_filled'
import TaskFilled from './task_filled'
import DiscountFilled from './discount_filled'
import FolderopenFilled from './folderopen_filled'
import TextDocumentFilled from './TextDocument_filled'
import Suppport24Filled from './Suppport24_filled'

const SVGIcon = ({ path, color, isSelected }) => {
  switch (true) {
    case path.includes('dashboard'):
      return isSelected ? <DashboardFilled color={color} /> : <Dashboard color={color} />
    case path.includes('saloon'):
      return isSelected ? <ShopFilled color={color} /> : <Shop color={color} />
    case path.includes('users'):
      return isSelected ? <ProfileFilled color={color} /> : <Profile color={color} />
    case path.includes('bookings'):
      return isSelected ? <TicketFilled color={color} /> : <Ticket color={color} />
    case path.includes('services'):
      return isSelected ? <TaskFilled color={color} /> : <Task color={color} />
    case path.includes('promotions'):
      return isSelected ? <DiscountFilled color={color} /> : <Discount color={color} />
    case path.includes('reviews'):
      return isSelected ? <NoteFilled color={color} /> : <Note color={color} />
    case path.includes('requests'):
      return isSelected ? <FolderopenFilled /> : <Folder color={color} />
    case path.includes('complaints'):
      return isSelected ? <MessageFilled /> : <Message color={color} />
    case path.includes('contract'):
      return isSelected ? <TextDocumentFilled /> : <Textdocument color={color} />
    case path.includes('support'):
      return isSelected ? <Suppport24Filled /> : <Support24 color={color} />
    case path.includes('faqs'):
      return isSelected ? <MessageFilled color={color} /> : <Message color={color} />
    case path.includes('settings'):
      return isSelected ? <CandleFilled color={color} /> : <Candle color={color} />
    case path.includes('logout'):
      return isSelected ? <LogoutFilled color={color} /> : <Logout color={color} />
    default:
      return null
  }
}

export default SVGIcon
