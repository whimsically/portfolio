import Project from '../components/Project'

const Portfolio = () => {
    return (
      <div>
        <h2>Portfolio</h2>

        <div className="flexContainer">
        <Project name={'VANMosaic'} 
          github={'https://github.com/natemcmahon/VANMosaic'}
          deployed={'https://vanmosaic-29816570a7c2.herokuapp.com/'}
         imageURL={'src/assets/vanmosaic.png'}
          description={'A group project to create an image sharing site using Express, Handlebars, and Firebase'} />

        <Project name={'Blog Site'} 
          github={'https://github.com/whimsically/blog-site'}
          deployed={'https://sleepy-reef-35718-76393a7d6bfc.herokuapp.com/'}
          imageURL={'src/assets/blogsite.png'}
          description={'A blog with CRUD routes and user authentication. Uses Express, Handlebars, MySQL + Sequelize'} />

          <Project name={'Project 3 Placeholder'} 
            github={'http://github.com'}
            deployed={'http://google.com'}
            imageURL={'http://placekitten.com/200/200'}
            description={'Placeholder for 3rd Group Project'} />
          
          <Project name={'Social Media Back End'} 
            github={'https://github.com/whimsically/social-network'}
            deployed={'https://app.screencastify.com/v3/watch/8zJQBXYf3ar6ivklQ6RT'}
            imageURL={'src/assets/social-backend-ss.png'}
            description={'Back end for a social media app using Express and Mongoose'} />
          
            <Project name={'NoteTaker'} 
              github={'https://github.com/whimsically/note-taker'}
              deployed={'https://intense-tundra-61951-bbb3cb2d4877.herokuapp.com/'}
              imageURL={'src/assets/notetaker.png'}
              description={'An application that lets users save their notes, using Express.js'} />
          
            <Project name={'E-Commerce Back End'} 
              github={'https://github.com/whimsically/ecommercebackend'}
              deployed={'https://watch.screencastify.com/v/V4e1XlMNKLzF2FA3kDbn'}
              imageURL={'http://placekitten.com/200/200'}
              description={'Back end for an e-commerce site using Express.js and Sequelize'} />
        </div>
      </div>
    );
  }

  export default Portfolio;
  