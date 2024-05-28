const UserType = require("../models/userType");

// Create a user type
module.exports.create = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name) throw new Error("No name provided");
    if (!description) throw new Error("No description provided");
    const newUserType = new UserType({ name, description });
    await newUserType.save();
    res.status(201).json(newUserType);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all user types
module.exports.findAll = async (req, res, next) => {
  try {
    const userTypes = await UserType.find();
    res.status(200).json(userTypes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read a specific user type
module.exports.findById = async (req, res) => {
  try {
    const userType = await UserType.findById(req.params.id);
    if (!userType) {
      res.status(404).json({ error: "User type not found" });
      return;
    }
    res.status(200).json(userType);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// // Update a user type
// app.put('/userTypes/:id', async (req, res) => {
//   try {
//     const { typeName, description } = req.body;
//     const updatedUserType = await UserType.findByIdAndUpdate(
//       req.params.id,
//       { typeName, description },
//       { new: true }
//     );
//     if (!updatedUserType) {
//       res.status(404).json({ error: 'User type not found' });
//       return;
//     }
//     res.status(200).json(updatedUserType);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Delete a user type
// app.delete('/userTypes/:id', async (req, res) => {
//   try {
//     const deletedUserType = await UserType.findByIdAndDelete(req.params.id);
//     if (!deletedUserType) {
//       res.status(404).json({ error: 'User type not found' });
//       return;
//     }
//     res.status(204).send(); // No content
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
