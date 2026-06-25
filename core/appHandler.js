db.sequelize.query(query, { model: db.User, replacements: { login: req.body.login }, type: db.Sequelize.QueryTypes.SELECT }).then(user => { if (user.length) {
													 var output = {
														 user: user[0],
													 }});
													
													
											 var login = req.body.login;
												
											
										 var query = "SELECT name,id FROM Users WHERE login= :login ";
												
													
												 db.sequelize.query(query, {
													 model: db.User,
													 replacements: { login: req.body.login },
													 type: db.Sequelize.QueryTypes.SELECT
													 }).then(user => { if (user.length) {
															 var output = {
															 user: user[0],
											}
													 }});




