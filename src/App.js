import contactsData from "./contacts.json";
import { useState } from "react";

import './App.css';

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    if (contactsData.length === contacts.length) {
      alert("All contacts have been added.");
      return;
    }

    //checks if id from contact state array equal to id from contactsData array is not found and creates an array of the contacts not found
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.find((c) => c.id === contact.id)
    );

    //creates a random index from 0 up to the remaining contacts array length
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);

    //stores a random contact from the remaining contacts array
    const randomContact = remainingContacts[randomIndex];

    //the callback function receives the current value of contacts state array as its parameter and returns a new array that includes the existing contacts (...contacts) along with the randomContact added to the end of the array.
    setContacts((contacts) => [...contacts, randomContact]);
  };

  return (
    <div>
      <h1 >IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const displayOscar = function() {
              let oscarRatingResults = '';

              if (contact.wonOscar) {
                oscarRatingResults = '🏆';
              } else {
                oscarRatingResults = '';
              }
              return oscarRatingResults;
            };
            
            const displayEmmy = function() {
              let emmyRatingResults = '';

              if (contact.wonEmmy) {
                emmyRatingResults = '🏆';
              } else {
                emmyRatingResults = '';
              }
              return emmyRatingResults;
            };

            
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} height="100" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{displayOscar()}</td>
                <td>{displayEmmy()}</td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
