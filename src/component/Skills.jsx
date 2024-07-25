import Backbutton from "./Backbutton"

const Skills = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="background">SKILLS</div>
        <div className="skills">
          <div className="skill-content">
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z"/><circle cx="9" cy="8" r="1" fill="currentColor"/><circle cx="6" cy="8" r="1" fill="currentColor"/><path fill="currentColor" d="M28 4H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2m0 2v4H4V6zM4 26V12h24v14z"/></svg> 
            <h2>Software Developer</h2>
        
            <p>I take pride in crafting clean, efficient code and developing impactful software solutions. My passion lies in turning complex problems into elegant, functional products.</p>
            
            <br />
            <dl>
              <dt><h4>LANGUAGES I EXCEL IN :</h4></dt>
              <dd> - Python, C, Java, JavaScipt, MySQL</dd>
              <br />
              <dt><h4>TOOLS : </h4></dt>
              <dd> - VS Code, Pycharm, Jupyter, Anaconda</dd>
            
            </dl>
          </div>
          <div className="skill-content">
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16M576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512zm-64 272H128V64h384z"/></svg>
            <h2> Frontend Developer</h2>
         
            <p>I love turning cool ideas into awesome, user-friendly designs. As a frontend developer, it’s exciting for me to see how my work makes the web more elegant and engaging for everyone.</p>
            <br />
            <dl>
              <dt><h4>LANGUAGES I EXCEL IN :</h4></dt>
              <dd> - Python, C, Java, JavaScipt, MySQL</dd>
              <br />
              <dt><h4>TOOLS : </h4></dt>
              <dd> - VS Code, Pycharm, Jupyter, Anaconda</dd>
            
            </dl>
          </div>
        </div>
      </div>
      <Backbutton />
    </>
  )
}

export default Skills