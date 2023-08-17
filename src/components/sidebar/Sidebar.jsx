import React, { useEffect } from "react";
import "./sidebar.css";
import {  Button, Col, Row} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseOutlined, CustomerServiceOutlined, HomeOutlined, LoginOutlined, MenuFoldOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import userImg from '../../images/userimg.png'
import { LineChart } from '@ant-design/charts';
const Sidebar = () => {
  
  const auth = localStorage.getItem('token')

console.log(JSON.parse(auth));
    const [show , setShow] = useState(true)
    const [isOpened , setIsOpened] = useState(true)
    useEffect(()=>{
        const menu = ()=>{
            if(window.innerWidth < 768 ){
            console.log('done');
            setShow(!show)
        }
    }
    window.addEventListener("resize",menu)

    })
  return (
    <>
    
      <nav className={`sidebar ${isOpened && "show"}`}>
                <Row className="nav-header">
                    <Col>
                        <h1>DASHBOARD</h1>
                        <CloseOutlined className="close-icon" onClick={()=>setIsOpened(!isOpened)}/>
                    </Col>
                </Row>
                {
                    auth &&
                    <Row className="user-info">
                    <Col>
                        <img src={userImg} alt="img" className="user-img"/>
                        <h2>Welcome {JSON.parse(auth).data.name}</h2>
                    </Col>
                </Row>
                }
                <Row className="nav-body">
                    <Col>
                
                        <ul className="nav">
                            <li>
                                <Button block size="large">
                                    <HomeOutlined />
                                    <Link to='/'> Home</Link>
                                </Button>
                            </li>
                           
                            <li>
                                <Button block size="large">
                                    <CustomerServiceOutlined />
                                    <Link to='/services'> Services</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <TeamOutlined />
                                    <Link to='/Job'> Jobs</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <SettingOutlined />
                                    <Link to='/settings'> Settings</Link>
                                </Button>
                            </li>
                            <li>
                                <Button block size="large">
                                    <LineChart/>
                                    <Link to='/charts'> Charts</Link>
                                </Button>
                            </li>
                            {
                                !auth 
                                    &&
                                <li>
                                    <Button block size="large">
                                        <LoginOutlined />
                                        <Link to='/login'> LogIn</Link>
                                    </Button>
                                </li>
                            }
                        </ul>
             
                 

                    </Col>
                </Row>
                    
             
      </nav>
      <MenuFoldOutlined onClick={()=>setIsOpened(!isOpened)} className="open-icon"/>

    </>
  );
};

export default Sidebar;



