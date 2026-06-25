module.exports.userSearch = function (req, res) {
	var query = "SELECT name,id FROM Users WHERE login=?";
	db.sequelize.query(query, {
		replacements: [req.body.login],
		model: db.User
	}).then(user => {
		if (user.length) {
			var output = {
				user: {
					name: user[0].name,
					id: user[0].id
				}
			}
			res.send(output)
		} else {
			res.send("No user found")
		}
	}).catch(err => {
		res.send("Error: " + err)
	})
}
