import { PencilLine } from 'phosphor-react'

import style from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img 
            className={style.cover} 
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={style.profile}>

                <Avatar src='https://github.com/caua3s.png'/>
                <strong>caua3s</strong>
                <span>web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}