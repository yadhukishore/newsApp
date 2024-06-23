

const Container = ({children}) => {
    // {children} bcz:- its coming in obj format from child componet Home
  return (
    <div className="container">
        {children}
    </div>
  )
}

export default Container