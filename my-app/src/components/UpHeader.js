import React from 'react'
import { Layout ,Typography} from 'antd';
import "../styles/UpHeader.css"

const { Header } = Layout;
const { Title} = Typography;


const UpHeader = () => {
  return (
    
    <Layout style={{display:"flex"}}>
            <Header style={{padding:"0.5rem", flex:"1",display:"flex", justifyContent:"center", alignItems:"center"}} >
              <Title className='title' level={4} style={{color:"white"}}> Dont Miss This Chance! </Title>  
            </Header>
      </Layout>
    
    
        
    
  )
}

export default UpHeader