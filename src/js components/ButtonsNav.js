const ButtonIcons = [
    <ion-icon name="paper-plane-outline" class="ion-plane"></ion-icon>,
    <ion-icon name="compass-outline" class="ion-compass"></ion-icon>,
    <ion-icon name="heart-outline" class="ion-heart"></ion-icon>,
    <ion-icon name="person-outline" class="ion-person"></ion-icon>
]

export default function ButtonsNav() {
    return (
        <div class="buttons">
            {ButtonIcons.map((ionIcons) => (
                <ion-icon name={ionIcons.name} class={ionIcons.class}></ion-icon>
            ))}
        </div>
    );
}