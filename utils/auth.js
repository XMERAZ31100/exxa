async function authenticateUser(username, password) {
  try {
    const response = await trickleListObjects('user', 100, true);
    
    if (!response || !response.items) {
      console.error('No response from database');
      return null;
    }
    
    const users = response.items;
    console.log('Total users found:', users.length);
    
    const user = users.find(u => {
      const userData = u.objectData;
      console.log('Checking user:', userData.Username);
      return userData.Username === username && userData.Password === password;
    });
    
    if (user) {
      console.log('User authenticated successfully:', user.objectData.Username);
      return {
        id: user.objectId,
        username: user.objectData.Username,
        fullName: user.objectData.FullName,
        email: user.objectData.Email,
        role: user.objectData.Role,
        version: user.objectData.Version
      };
    }
    
    console.log('User not found or password incorrect');
    return null;
  } catch (error) {
    console.error('Authentication error details:', error);
    throw error;
  }
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}