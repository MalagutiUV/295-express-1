export const getUsers = async (req, res) => {
  try {
    const users = await UsersService.getAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({
      error: "User with the id not found",
    });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UsersService.get(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({
      error: "User with the id not found",
    });
  }
};

export const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send({
      message: "Missing required fields: {username, password, email}",
    });
  }

  try {
    const insertedUser = await UsersService.insertOne(
      username,
      password,
      email
    );
    res.status(201).send({ message: `User ${insertedUser.username} created` });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};
