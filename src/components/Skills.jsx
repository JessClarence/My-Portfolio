
export const Skills = () => {
  return (
    <div className="text-center border-b-2">
      <h3 className="text-3xl font-extrabold text-red-500">Skills</h3>
      <ul>
        <div className="lg:flex lg:justify-around m-8 lg:mx-44 text-white">
          <li className="skill-card mb-4 lg:mb-0">
            <h1 className="border-b-2 mb-6 font-bold">Frontend Developer</h1>
            <p>I enjoy frontend development because I care about how my visualization and how my functions works.</p>
            <h3 className='my-2 border-t-2'>STACKS</h3>
            <ul>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>Html</p>
              </li>
              <li>
                <p>Css</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>Tailwind</p>
              </li>
            </ul>
          </li>
          <li className="skill-card lg:ml-4">
            <h1 className="border-b-2 mb-6 font-bold">Backend Developer</h1>
            <p>Doing backend is Interesting for me because of how I can see the system works under the hood.</p>
            <h3 className='my-2 border-t-2'>STACKS</h3>
            <ul>
              <li>
                <p>MySQL</p>
              </li>
              <li>
                <p>MongoDB</p>
              </li>
              <li>
                <p>NodeJS</p>
              </li>
              <li>
                <p>Java</p>
              </li>
              <li>
                <p>Python</p>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </div>
  )
}