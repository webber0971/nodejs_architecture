const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };
  
  exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  
  exports.createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
  };
  
  exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = users.findIndex(user => user.id === id);
  
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      res.json(users[index]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  
  exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
  
    if (index !== -1) {
      const deletedUser = users.splice(index, 1);
      res.json(deletedUser[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  