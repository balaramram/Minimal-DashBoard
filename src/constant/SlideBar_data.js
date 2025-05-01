import app_icon from "../assets/svg/app_icon.svg"
import ecommerce from "../assets/svg/ecommerce.svg"
import analysis from "../assets/svg/analysis.svg"
import banking from "../assets/svg/banking.svg"
import booking from "../assets/svg/booking.svg"
import file from "../assets/svg/file.svg"
import course from "../assets/svg/course.svg"
import forward_arrow_icon from "../assets/png/forward_arrow_icon.png"
import account from "../assets/svg/account.svg"
import hanger from "../assets/svg/hanger.svg"
import basket from "../assets/svg/basket.svg"
import invoice from "../assets/svg/invoice.svg"
import blog from "../assets/svg/blog.svg"
import job from "../assets/svg/job.svg"
import tour from "../assets/svg/tour.svg"

import mail from "../assets/svg/mail.svg"
import chat from "../assets/svg/chat.svg"
import calendar from "../assets/svg/calendar.svg"
import kangan from "../assets/svg/kangan.svg"

export const Overview =[

    {
        icon:app_icon,
        title:"App",
        link:"/"
    },
    {
        icon:ecommerce,
        title:"Ecommerce",
        link:"/ecommerce"
    },
    {
        icon:analysis,
        title:"Analytics",
        link:"/analytics"
    },
    {
        icon:banking,
        title:"Banking",
        link:"/banking"
    },
    {
        icon:booking,
        title:"Booking",
        link:"/booking"
    },
    {
        icon:file,
        title:"File",
        link:"/file"
    },
    {
        icon:course,
        title:"Course",
        link:"/course"
    },
    
]

export const User =[{title:"Profile"},{title:"Cards"},{title:"List"},{title:"Create"},{title:"Edit"},{title:"Account"}] 

export const Management=[
    {
      title:"User",
      icon:account,
      src:forward_arrow_icon,
      submenu:[
        {title:"Profile",link:"/profile"},
        {title:"Cards",link:"/cards"},
        {title:"List",link:"/list"},
        {title:"Create",link:"/create"},
        {title:"Edit",link:"/edit"},
        {title:"Account",link:"/account"}],
      
      src2:"right_arrow"
    },
    {
        title:"Product",
        icon:hanger,
        src:forward_arrow_icon,
        submenu:[
            {title:"List",link:"/list"},
            {title:"Details",link:"/details"},
            {title:"Create",link:"/create"},
            {title:"Edit",link:"/edit"},
        ]
    },
    {
        title:"Order",
        icon:basket,
        src:forward_arrow_icon,
        submenu:[
            {title:"List",link:"/list"},
            {title:"Details",link:"/details"},
        ]
    },
    {
        title:"Invoice",
        icon:invoice,
        src:forward_arrow_icon,
        submenu:[
            {title:"List",link:"/list"},
            {title:"Details",link:"/details"},
            {title:"Create",link:"/create"},
            {title:"Edit",link:"/edit"},
        ]
    },
    {
        title:"Blog",
        icon:blog,
        src:forward_arrow_icon,
        submenu:[
            {title:"List",link:"/list"},
            {title:"Details",link:"/details"},
            {title:"Create",link:"/create"},
            {title:"Edit",link:"/edit"},
        ]
    },
    {
        title:"Job",
        icon:job,
        src:forward_arrow_icon,
        submenu:[
            {title:"List",link:"/list"},
            {title:"Details",link:"/details"},
            {title:"Create",link:"/create"},
            {title:"Edit",link:"/edit"},
        ]
    },
    {
        title:"Tour",
        icon:tour,
        src:forward_arrow_icon,
        submenu:[
            {title:"List",link:"/list"},
            {title:"Details",link:"/details"},
            {title:"Create",link:"/create"},
            {title:"Edit",link:"/edit"},
        ]
    },
    {
        title:"File Manager",
        icon:file,
        link:"/filemanager"
    },
    {
        title:"Mail",
        icon:mail,
        link:"/mail"
    },
    {
        title:"Chat",
        icon:chat,
        link:"/chats"
    },
    {
        title:"Calender",
        icon:calendar,
        link:"/calender"
    },
    {
        title:"Kanban",
        icon:kangan,
        link:"/kanban"
    },
                   
]
