const bcrypt = require(`bcryptjs`)
const users = []

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const authenticated = bcrypt.compareSync(password, users[i].pHash)
        if (authenticated) {
          let userReturn = {...users[i]}
          delete userReturn.pHash
          res.status(200).send(userReturn)
        }
      }
    }
    res.status(400).send("User not found.")
  },
    register: (req, res) => {
       const { username, email, firstName ,lastName, password} = req.body
       const salt = bcrypt.genSaltSync(5)
       const pHash = bcrypt.hashSync(password, salt)
       let user = {
         username,
         email,
         firstName,
         lastName,
         pHash
       }
       users.push(user)
       let userReturn = {...user}
       delete userReturn.pHash
       res.status(200).send(userReturn)
      
      
      console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}