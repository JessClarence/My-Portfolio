import { PortfolioProjects } from "../data/data";
export const Portfolio = () => {
  return (
    <>
    <h1 className="text-center text-white text-4xl font-extrabold my-10">My Personal Project</h1>
    <div className="bg-primary lg:flex lg:justify-center">
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