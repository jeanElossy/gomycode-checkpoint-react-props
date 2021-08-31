import Profile from "./profile/Profile";

const App = () => {
  const perso = {
    fullName:"Jean Elossy",
    bio:"Sympa...",
    profession:"Dev Fullstack JS"
  };

  const displayFullName = (e) => {
    e.preventDefault(e);
    alert(perso.fullName);
  };

  return (
    <div>
      <Profile 
        fullName={perso.fullName} 
        bio={perso.bio} 
        profession={perso.profession} 
        handleName={displayFullName}
      />
    </div>
  );
}
export default App;

