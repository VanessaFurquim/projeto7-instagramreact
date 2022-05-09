const usersToFollowArray = [
    {
        userToFollowProfileImage: "profile pics/profile pic 1.jpg",
        userToFollowUsername: "amandabiancchiii"
    },
    {
        userToFollowProfileImage: "profile pics/profile pic 2.jpg",
        userToFollowUsername: "dinizvioleta"
    },
    {
        userToFollowProfileImage: "profile pics/profile pic 3.jpg",
        userToFollowUsername: "giardini"
    },
    {
        userToFollowProfileImage: "profile pics/profile pic 4.jpg",
        userToFollowUsername: "carlamamama"
    },
    {
        userToFollowProfileImage: "profile pics/profile pic 11.jpg",
        userToFollowUsername: "diogojulianoator"
    }
]

function UserInfo(props) {
    return (
        <div class="user-info">
                <img src={props.image}/>
                <div>
                    <h2>{props.usernameHandle}</h2>
                    <h3>{props.userName}</h3>
                </div>
            </div>
    );
}

function UserToFollowTemplate(props) {
    return (
        <div class="users-to-follow">
            <img src={props.userToFollowProfileImage}/>
            <div>
                <h2>{props.userToFollowUsername}</h2>
                <h5>Segue você</h5>
            </div>
            <p>Seguir</p>
        </div>
    );
}

export default function Aside() {
    return (
        <aside class="sidebar">
            <div class="user-info">
                <UserInfo image={"profile pics/profile pic 14.jpg"} usernameHandle={"notaunicorn"} userName={"Dominique Gentil"} />
            </div>
            <div class="suggestions">
                <h4>Sugestões para você</h4>
                <p>Ver tudo</p>
            </div>
            {usersToFollowArray.map((user) => (
                <UserToFollowTemplate userToFollowProfileImage={user.userToFollowProfileImage} userToFollowUsername={user.userToFollowUsername} />
            ))}
            <div class="useful-buttons">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma
                </p>
            </div>
            <div class="copyright">
                <p>© 2022 INSTAGRAM DO FACEBOOK</p>
            </div>
        </aside>
    );
}