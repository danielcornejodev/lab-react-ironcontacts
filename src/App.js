import contactsData from "./contacts.json";
import { useState } from "react";

import './App.css';

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5));



  return (
    <div>
      <h1>Contacts</h1>
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
