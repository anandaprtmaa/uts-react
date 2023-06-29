import Button from "./Button";
import "./Header.css"
import {GiDropletSplash} from "react-icons/gi"

export default function Header(){
    return (
        <header> 
                <div className="logo">
                    <h1><GiDropletSplash/>
                    AnandaStore
                    </h1>
                    
                </div>
                <div className="navbar">
                    <li> <a href="">Home</a></li>
                    <li> <a href="">About</a></li>
                    <li> <a href="">Contac</a></li>
                    <Button> Login </Button>
                    
                </div>

        </header>
    )
}