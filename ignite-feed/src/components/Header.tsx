import Styles from "./Header.module.css"
import ignitelogo from '../assets/ignite-logo.svg';


export function Header(){
    return(
        <header className={Styles.header}>
            <img src={ignitelogo} alt="logotipo do ignite" />
         <strong>Ignite Feed</strong>
        </header>
    );
}