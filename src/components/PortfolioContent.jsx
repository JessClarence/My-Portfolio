import {Link} from "react-router-dom";
import {PortfolioProjects} from "../data/data";
export const PortfolioContent = () => {
  return (
    <>
    <div className="text-center p-20 text-red-700">
      <h3 className="mb-6 text-2xl font-extrabold">My Recent Work</h3>
      <p>Here are a few past project I've Worked On. 
        <Link to="/Portfolio" className="hover:text-red-500"> See more...</Link>
      </p>
    </div>
    <div class="lg:flex lg:justify-center">
    {PortfolioProjects.map(project => {
      return (
          <div class="rounded-lg shadow-lg bg-white max-w-sm overflow-hidden mx-auto mb-10 lg:m-5">
            <img src={project.img} alt="projects"/>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{project.title}</h5>
              <p class="text-gray-700 text-base mb-4">
                Stacks: {project.stacks}
              </p>
              <button className="button-design" type="button">
                <a href={project.link}>Source</a>
              </button>
            </div>
          </div>
      )
    })}
    </div>

    </>
  )
}