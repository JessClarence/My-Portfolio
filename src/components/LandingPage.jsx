
import SelfPortrait from '../images/temp-pic.png';
import ReactImg from '../images/react.png';
import JavaScript from '../images/javascript.png';
import Html from '../images/html.jpg';
import Tailwind from '../images/tailwind.png';
import {ReactTyping} from './ReactTyping';
export const LandingPage = () => {
  return (
    <main>
      <div className="md:flex md:justify-around p-16 bg-primary">
        <div className="my-20 lg:my-44 text-white">
          <h3 className="text-6xl mb-5 font-bold">Hi There,</h3>
          <h1 className="text-5xl mb-5 font-semibold">I'm Jess Clarence Arreza</h1>
          <p className="text-xl mb-5">I am an {<ReactTyping />}</p>
          <div className="flex mb-4 items-end">
            <img src={ReactImg} alt="react-pic" width="40" height="40" className="rounded-full mr-2"/>
            <img src={JavaScript} alt="javascript-pic" width="40" height="40" className="rounded-full mr-2"/>
            <img src={Html} alt="Html-pic" width="40" height="40" className="mr-2"/>
            <img src={Tailwind} alt="Css-pic" width="40" height="40" className="mr-2"/>
          </div>
          <button className='button-design'><a href='#about'>About Me!</a></button>
          

        </div>
        <div>
          <img width="500" height="100" src={SelfPortrait} alt="my face" className="border-solid border border-red-500 drop-shadow-2xl"/>
        </div>
      </div>
    </main>
  )
}