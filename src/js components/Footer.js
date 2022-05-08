const footerIconsArray = [
    <ion-icon name="home"></ion-icon>,
    <ion-icon name="search-outline"></ion-icon>,
    <ion-icon name="add-circle-outline"></ion-icon>,
    <ion-icon name="heart-outline"></ion-icon>,
    <ion-icon name="person-outline"></ion-icon>
]

export default function Footer() {
    return (
        <footer class="mobile-footer">
            {footerIconsArray.map((iconName) => (
            <ion-icon name={iconName.name}></ion-icon>
          ))}
        </footer>
    );
}