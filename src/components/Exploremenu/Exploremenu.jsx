import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import './Exploremenu.css'
const Exploremenu = ({category, setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore menu items</h1>
        <p className='explore-menu-text'>Choose the menu from the avilable options</p>
        <div className="explore-item-list">
            {
                menu_list.map((item, index)=>{
                    return (
                        <div onClick={()=>setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
