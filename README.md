**Intro**

Squadron is a SPA that allows users to log flights and add members. It was inspired by my love of online virtual pilot simulations like DCS and Il-2 Sturmovik. It makes use of React's powerful context API and localStorage to manage state somewhat persistently.

**Flight Context**

Flight context keeps track of flight date, description of the events that occured on the flight, number of kills, number of losses, and number of wingmen that were taken along for the ride. It uses useEffect to store any newly added flight into localStorage in case the page is refreshed. It allows users to add flights, delete flights, edit the details of a flight, and clear the flight list. Most of this is achieved with useState, which itself makes use of the spread operator syntax setFlights([...flights, {id: uuidv4(), date:date, description: description:, kills: kills, deaths: deaths, wingmen: wingmen]); 

**Squadron Context**

Squadron context performs a similar role. It keeps track of squadron members as well as their individual pilot characteristics, e.g., rank, description, eyesight, awareness, aggression, communication, and gunnery. It also takes advantage of the useEffect hook to store newly created or edited members in local storage. 
