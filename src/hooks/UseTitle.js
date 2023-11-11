import { useEffect } from "react"

const useTitle = title  =>{
    useEffect(() =>{
        document.title = `Samira's Kitchen ${title}`;
    },[title])
};

export default useTitle;