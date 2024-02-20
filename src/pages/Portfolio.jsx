import Project from '../components/Project'

const Portfolio = () => {
    return (
      <div>
        <h2>Portfolio</h2>
        <div className="flexContainer">
        <Project name={'VANMosaic'} 
          github={'http://github.com'}
          deployed={'http://google.com'}
         imageURL={'http://placekitten.com/200/200'}
          description={'test'} />
        </div>
      </div>
    );
  }

  export default Portfolio;
  