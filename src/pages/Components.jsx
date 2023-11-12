import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export function EffectFunc(setLoading, func) {  
  const nav = useNavigate();
  
  useEffect(() => {
    const waitForLoadedDB = async () => {
			let interval;
			try {
				interval = setInterval(() => {
					if (window.loadedDB) {
						func();
						clearInterval(interval);
					}
				}, 100);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		
  
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        nav("/login");
      } else {
        waitForLoadedDB();
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, [nav, func, setLoading]);

}

export const DefaultToggler = ({msg, Element, className}) => {
  const [toggle, setToggle] = useState(false);
  return(
    <div className={"container" + className? className: null}>
      <div className="row d-grid place-content-center">
        <div className="col">
          <button className="btn btn-primary bg-blue m-auto" onClick={() => setToggle(!toggle)}>
            {msg}
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          {toggle? <Element />: null}
        </div>
      </div>
    </div>
  )
}

export const FormComponent = (props) => {
  return (
    <form onSubmit={(e) => props.func(e)} className="container bg-light shadow-lg p-4 rounded-5 mb-4" style={{ width: "400px" }}>
      <div className="row mb-3">
        <div className="col">
          <h3 className="text-center text-bold text-dark">{props.title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col input-group">
          <label htmlFor="v1" className='d-block form-label text-bold text-emerald-800'>{props.m1}</label>
          <input type={props.t1 ? props.t1 : "text"} id="v1" className='bg-light shadow-sm text-dark p-2 d-block w-100 border-secondary border rounded-3' name={props.m1} placeholder={props.m1} autoComplete="true" onChange={(e) => props.setV1(e.target.value)} required />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col input-group">
          <label htmlFor="v2" className='d-block form-label text-bold text-emerald-800'>{props.m2}</label>
          <input type={props.t2 ? props.t2 : "text"} id="v2" className='bg-light shadow-sm text-dark p-2 d-block w-100 border-secondary border rounded-3' name={props.m2} placeholder={props.m2} autoComplete="true" onChange={(e) => props.setV2(e.target.value)} required />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button type="submit" className="btn btn-primary bg-blue d-block w-100">Submit</button>
        </div>
      </div>
    </form>
  );
};
