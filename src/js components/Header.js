import Aside from "./Aside";
import ButtonsNav from "./ButtonsNav";

export default function Header() {
    return (
        <header class="top-bar-background">
            <nav class="top-bar">
                <div class="logos">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="logo-divider"></div>
                    <img src="Bonus/logo.png"/>
                </div>
                <div class="search-bar">
                    <ion-icon name="search-outline"></ion-icon>
                    <p>Pesquisar</p>
                </div>
                <div class="buttons">
                    <ButtonsNav />
                </div>
                <Aside />
            </nav>
        </header>
    );
}
