import React from 'react'
import Ai from './Ai'
import style from './Home.module.css'

function Home(props) {  
  const {Data,settt}=props
  const filtersearch = Data.filter((Data)=>{  
      return Data.name.includes(settt) 
  })
 
  let ElementData = false
  if(settt){
    ElementData = filtersearch.map((Data)=>{
      return (
        <div  className={style.card} key={Data.id}>      
          <h3>ชื่อ:{Data.name}</h3>
          <h3>ราคา:{Data.price}</h3>
          <p>เกี่ยวกับ:{Data.descaption}</p>
          <button onClick={Data.id}>กดดูลาย</button>  
        </div>
      )
    })
  }else{
     ElementData = <Ai/>
  }
  return (
    <div>    
        <div className={style.head}>
           <h1>Home</h1>
          <p>สวัสดี ยินดีต้อนรับ เว็บโหลดไฟล์ งานปักและสกรีน</p>          
       </div>
       {ElementData}
    </div>
  )
}

export default Home