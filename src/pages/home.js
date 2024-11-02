import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Home</h1>
            <Link to="/whoami">个人简介</Link>
            <br />
            <Link to="/music">音乐</Link>
            <br />
            <Link to="/sucai">优秀素材搜集</Link>
            <ul>
                <li onClick={() => navigate('/done')}>已经做过</li>
                <li onClick={() => navigate('/doing')}>正在做</li>
                <li onClick={() => navigate('/to_do')}>未做</li>
            </ul>
        </div>
    );
};

export default Home;
