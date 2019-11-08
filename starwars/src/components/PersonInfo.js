import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";

function PersonInfo(){
const [personData, setPersonData] = useState([]);


    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                setPersonData(response.data.results);
                console.log(response.data);
            })
            .catch(error => {
             console.log("The data was not returned", error);
            });
    }, []);

    return (
        <div className="person">
            {personData.map(person => {
               return (
                    <PersonCard
                    key={person.id}
                    name={person.name}
                    hairColor={person.hair_color}
                    birthYear={person.birth_year}/>
               )
                })}
        </div>
    );
}
 
export default PersonInfo;
