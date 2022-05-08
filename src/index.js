import ReactDOM from "react-dom";
// importar todos os arquivos de componentes que foram separados    

// Body Component =>> //
function AppBody() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
// <<= Body Component //


// Header Component =>> //
function Header() {
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

    //// Nav Buttons =>> ////
const ButtonIcons = [
    <ion-icon name="paper-plane-outline" class="ion-plane"></ion-icon>,
    <ion-icon name="compass-outline" class="ion-compass"></ion-icon>,
    <ion-icon name="heart-outline" class="ion-heart"></ion-icon>,
    <ion-icon name="person-outline" class="ion-person"></ion-icon>
]

function ButtonNavTemplate(props) {
    return <ion-icon name={props.iconName} class={props.className}></ion-icon>
}

function ButtonsNav() {
    return (
        <div class="buttons">
            {ButtonIcons.map((ionIcons) => (
                <ButtonNavTemplate ionIconName={ionIcons.name} ionIconClass={ionIcons.class} />
            ))}
        </div>
    );
}
    //// <<= Nav Buttons ////

    ////Aside Component =>> ////
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

function Aside() {
    return (
        <aside class="sidebar">
            <div class="user-info">
                <img src="profile pics/profile pic 14.jpg"/>
                <div>
                    <h2>iamnotaunicorn</h2>
                    <h3>Dominique Gentil</h3>
                </div>
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
    ////Aside Component =>> ////
// <<= Header Component //


// Main Component =>> //
function Main() {
    return (
        <main class="page-content">
            <StoriesBox />
            <Post />
        </main>
    );
}

    //// Stories Box Component =>> ////
const storiesUsers = [
    {
        image: "profile pics/profile pic 12.jpg",
        usarname: "gutoodoceu"
    },
    {
        image: "profile pics/profile pic 13.jpg",
        username: "soualice"
    },
    {
        image: "profile pics/profile pic 5.jpg",
        username: "ohanajulia"
    },
    {
        image: "profile pics/profile pic 6.jpg",
        username: "sassyceci"
    },
    {
        image: "profile pics/profile pic 7.jpg",
        username: "jessebunnyboy"
    },
    {
        image: "profile pics/profile pic 8.jpg",
        username: "planetalia"
    },
    {
        image: "profile pics/profile pic 9.png",
        username: "nossoquintal"
    },
    {
        image: "profile pics/profile pic 3.jpg",
        username: "giardini"
    }

]

function StoriesBoxUserTemplate(props) {
    return (
        <div class="stories-user">
            <img src={props.image}/>
            <h6>{props.username}</h6>
        </div>
    );
}

function StoriesBox() {
    return (
        <article class="stories-box">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            {storiesUsers.map((user) => (
            <StoriesBoxUserTemplate image={user.image} username={user.username} />
          ))}
        </article>
    );
}
    //// <<= Stories Box Component ////

    //// Post Column Component =>> ////
    const postsArray = [
        {
            profilePictureImage: "profile pics/profile pic 14.jpg",
            username: "notaunicorn",
            postMainImage: "posts/baixados.jpg",
            secondaryUserImage: "profile pics/profile pic 3.jpg",
            secondaryUsername: "giardini",
            numberOfLikes: "142.437"
        },
        {
            profilePictureImage: "profile pics/profile pic 8.jpg",
            username: "planetalia",
            postMainImage: "posts/giraffe.jpg",
            secondaryUserImage: "profile pics/profile pic 3.jpg",
            secondaryUsername: "diogojulianoator",
            numberOfLikes: "205.537"
        },
        {
            profilePictureImage: "profile pics/profile pic 5.jpg",
            username: "ohanajulia",
            postMainImage: "posts/bunnies.jpg",
            secondaryUserImage: "profile pics/profile pic 2.jpg",
            secondaryUsername: "dinizvioleta",
            numberOfLikes: "98.476"
        }
    ]

function PostTemplate(props) {
    return (
        <section class="post">
            <header class="post-header">
                <img src={props.UserprofilePicture}/>
                <h2>{props.usernameHandle}</h2>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </header>
            <div class="post-image">
                <img src={props.postImage}/>
            </div>
            <footer class="post-footer">
                <div class="top-line">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="bottom-line">
                    <img src={props.likedUserImage}/>
                    <p>Curtido por</p>
                    <p><strong>{props.likedUserName}</strong></p>
                    <p>e</p>
                    <p><strong>outras {props.likedCount} pessoas</strong></p>
                </div>
            </footer>
        </section>
    );
}

function Post() {
    return (
        <article class="post-column">
            {postsArray.map((post) => (
            <PostTemplate
                UserprofilePicture={post.profilePictureImage}
                usernameHandle={post.username}
                postImage={post.postMainImage}
                likedUserImage={post.secondaryUserImage}
                likedUserName={post.secondaryUsername}
                likedCount={post.numberOfLikes}
            />
          ))}
        </article>
    );
}
    //// <== Post Column Component ////
// <<= Main Component //


// Footer Component =>> //
const footerIconsArray = [
    // os elementos de um array devem estar entre aspas ?
    <ion-icon name="home"></ion-icon>,
    <ion-icon name="search-outline"></ion-icon>,
    <ion-icon name="add-circle-outline"></ion-icon>,
    <ion-icon name="heart-outline"></ion-icon>,
    <ion-icon name="person-outline"></ion-icon>
]

function FooterIconTemplate(props) {
    return <ion-icon name={props.iconName}></ion-icon>;
}

function Footer() {
    return (
        <footer class="mobile-footer">
            {footerIconsArray.map((iconName) => (
            <FooterIconTemplate ionIcon={iconName} />
          ))}
        </footer>
    );
}
// <<= Footer Component //

const appPage = AppBody();
ReactDOM.render(appPage, document.querySelector(".root"));