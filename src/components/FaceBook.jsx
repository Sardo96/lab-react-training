import profiles from '../data/berlin.json'

const FaceBook = () => {
    return (
      <div className="facebook-container">
        {profiles.map((profile) => (
          <div
            key={profile.firstName + profile.lastName}
            className="profile"
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
      </div>
    );
  };
  
  export default FaceBook;
      