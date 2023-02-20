// Se definen las funcionalidades
const getUser = (req, res) => {
  const {q, nombre, apikey} = req.query;

  res.status(200).json({
    message: "get API",
    q,
    nombre, 
    apikey
  });
};

const putUser = (req, res) => {
  const {id} = req.params;

  res.status(200).json({
    message: "put API",
    id
  });
};

const postUser = (req, res) => {
  const {nombre, edad} = req.body;

  res.status(201).json({
    message: "post API",
    nombre,
    edad
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "delete API",
  });
};

module.exports = {
    getUser,
    putUser,
    postUser,
    deleteUser
}
