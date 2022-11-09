import ResumeImg from "../images/resume.png";
export const Resume = () => {
  return (
    <div className="text-center mt-6">
      <a href='../images/resume.pdf' className="button-design" download>Download</a>
      <img src={ResumeImg} alt="resume" className="mt-5 m-auto" />
    </div>
  )
}