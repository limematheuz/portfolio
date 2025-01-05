import { useEffect } from 'react';
import logo from '../../assets/icon/favicon.svg';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/client';

export default function NavBar() {
    const navigate = useNavigate();

    useEffect(()=> {
        if(!supabase.auth.getUser()){
            navigate('/');
        }
    }, [navigate]);

    return(
        <nav className='navbar-container'>
            <ul className='navbar-list'>
                <li>
                    <a href="/"><img className='navbar-logo' src={logo} alt="" /></a>
                </li>
                <li>
                    <a className='login-btn' onClick={() => navigate("/login")}>LOGIN</a>
                </li>
            </ul>
        </nav>
    )
}