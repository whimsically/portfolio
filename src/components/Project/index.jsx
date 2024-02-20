function Project ({ name, github, deployed, imageURL, description }) {
    return (
        <div className="projectCard">
            <img src={imageURL}></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={github}>repo</a> | <a href={deployed}>deployed</a>
        </div>
    );
}

export default Project;