import { useEffect } from 'react';
import personaljson from ""

function About() {



    useEffect(() =>{

        async function fetchData() {
        const response = await fetch(personaljson);
        const data = await response.json();
        console.log(data);
       
        }
        fetchData();
    
    },[])


    return (
        <div>
            <h1>hej</h1>
        </div>
    )
}

export default About
