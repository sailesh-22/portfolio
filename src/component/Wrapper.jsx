/* eslint-disable react/prop-types */


const Wrapper = ({children}) => {
  return (
    <div className="wrapper ">
      <div className="background-animation"></div>
    {children}
    </div>
  )
}

export default Wrapper