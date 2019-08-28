const create = (values, req, res) => {
  console.log('Create cookie function')
  let user = {
    userId: values.userId,
    pseudo: values.pseudo
  }
  res.cookie(values.pseudo, user);
  return req.cookies[values.pseudo]
}

module.exports.create = create;