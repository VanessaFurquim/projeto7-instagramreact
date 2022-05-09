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

export default function Post() {
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

// {/* <button onClick={() => AddLikedIcon("bolacha")}><ion-icon name={iconName}></ion-icon></button>

// function AddLikedIcon(icon) {
//     if (icon === "heart-outline") {
//         // renderizar coração vermelho (classe .LikedIcon no CSS);
//       } else {
//         // renderizar coração branco e preto;
//       }
// } */}


// criar um botão no lugar do ion icon

// usar onClick com arrow function que usa a função AddLikedIcon para renderizar o icon liked de estiver o normal e vice versa

// componente AddLikedIcon recebe um valor que difere o icon vermelho do normal como argumento
