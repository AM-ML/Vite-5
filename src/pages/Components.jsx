import { useEffect } from "react";
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
