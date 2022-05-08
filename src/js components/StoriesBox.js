const storiesUsers = [
    {
        image: "profile pics/profile pic 12.jpg",
        username: "gutoodoceu"
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

export default function StoriesBox() {
    return (
        <article class="stories-box">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            {storiesUsers.map((user) => (
            <StoriesBoxUserTemplate image={user.image} username={user.username} />
          ))}
        </article>
    );
}