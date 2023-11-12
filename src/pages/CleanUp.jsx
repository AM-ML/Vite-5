import { useEffect } from "react";
import { DefaultToggler } from "./Components";
const ToggledCleanUp = () => {

  useEffect(() => {
    
    const funcId = setInterval(() => {
      console.log("shown")
    }, 1000);
    function winFunc(){}
    window.addEventListener("scroll", winFunc);
    return () => {
      console.log("clear");
      clearInterval(funcId);
      window.removeEventListener("scroll", winFunc);
    }
  }, [])

  return (
    <div className="container bg-dark mt-5">
      <div className="row bg-warning">
        <div className="col bg-dark text-dark py-2">
          .
        </div>
        <div className="col bg-dark text-dark py-2">
          .
        </div>
        <div className="col bg-dark text-dark py-2">
          .
        </div>
      </div>
      <div className="row bg-warning">
        <div className="col bg-yellow-300 text-yellow-300 py-2">
          .
        </div>
        <div className="col bg-primary text-primary py-2">
          .
        </div>
        <div className="col bg-yellow-300 text-yellow-300 py-2">
          .
        </div>
        
      </div>
      <div className="row bg-warning">
        <div className="col bg-yellow-300 text-yellow-300 py-2">
          .
        </div>
        <div className="col bg-primary text-primary py-2">
          .
        </div>
        <div className="col bg-yellow-300 text-yellow-300 py-2">
          .
        </div>
        
      </div>
      <div className="row bg-warning">
        <div className="col bg-dark text-dark py-2">
          .
        </div>
        <div className="col bg-dark text-dark py-2">
          .
        </div>
        <div className="col bg-dark text-dark py-2">
          .
        </div>
      </div>
    </div>
  )
}

export const CleanUp = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <DefaultToggler msg="Toggle UseEffect CleanUp Component" Element={ToggledCleanUp} />
        </div>
      </div>
    </div>
  )
}