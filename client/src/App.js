import React, { useState } from 'react';

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
  jwt: undefined,
});

useEffect(function componentDidMount() {

}, []);

const App = () => {
  const [hasUser, setHasUser] = useState(false);
  return (
    <UserContext.Provider value={signedInUser}>
      {hasUser ? <Login /> : <Layout />}
    </UserContext.Provider>
  );
}

export default App;
