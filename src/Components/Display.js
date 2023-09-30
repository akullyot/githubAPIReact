function Display({ user }){

    return(
        <div>
            <h1> {user.login} </h1>
            <img src={user.avatar_url} alt="profileavatar"/>
            <p>Profile Page: <a href={user.html_url} target="blank"> here </a></p>
            {user.bio && <p> Bio: {user.bio} </p>}
        </div>
    )
};
export default Display;