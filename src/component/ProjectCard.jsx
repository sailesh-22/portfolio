/* eslint-disable react/prop-types */

const ProjectCard = ({project}) => {
  return (
    <>
    <div className="project-card">
        <div className="cover ">
            <div className="card-front">
                <h3>{project.title}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, harum?</p>
            </div>
            <div className="card-back">
                <img src="" alt="image" />
                <div className="buttons">
                    <a href="#">Add to cart</a>
                    <a href="#">View detail</a>
                </div>

            </div>
        </div>
    </div>
  </>
  );
};

export default ProjectCard;
