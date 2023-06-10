import { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook-container">
      {profiles.map((profile) => (
        <div
          key={profile.firstName + profile.lastName}
          className={`profile ${profile.country === selectedCountry ? 'selected' : ''}`}
        >
          <img src={profile.img} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <div>
              <strong>First Name:</strong> {profile.firstName}
            </div>
            <div>
              <strong>Last Name:</strong> {profile.lastName}
            </div>
            <div>
              <strong>Country:</strong> {profile.country}
            </div>
            <div>
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </div>
          </div>
        </div>
      ))}
        <div className="country-buttons">
        {Array.from(new Set(profiles.map((profile) => profile.country))).map((country) => (
          <button key={country} onClick={() => handleClick(country)}>
            {country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
