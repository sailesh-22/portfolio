import image from '../assets/images/image.png';
const Home = () => {
  return (

    <div className='home'>
        
        <div className="intro"> 
                <h1>Hi,</h1>
                <h2>I&apos;m Sailesh</h2>
                <p>A proactive and self-driven aspiring Software Developer with a talent for adapting to new challenges and a proven track record of personal and team growth.</p>
        </div>
        <div className='intro-image'>
                <img src={image} />
        </div>
  </div>
  )
}

export default Home