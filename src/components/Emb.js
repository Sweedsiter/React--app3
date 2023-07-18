import React from 'react'
import style from './Home.module.css'

function Emb(props) {
  const {Data,settt}=props
  const filtersearch = Data.filter((Data)=>{
    // return Data.name.includes(settt)
    if(!settt){
        return Data
    }else{
      return Data.name.includes(settt)
    }
  })

  const ElementData= filtersearch.map((Data)=>{
    return (
      <div  className={style.card} key={Data.id}>      
        <h3>ชื่อ:{Data.name}</h3>
        <h3>ราคา:{Data.price}</h3>
        <p>เกี่ยวกับ:{Data.descaption}</p>
        <button onClick={Data.id}>กดดูลาย</button>  
      </div>
    )
  })
  return (
    <div className={style.cards}>
        {ElementData}
    </div>
  )
}

export default Emb