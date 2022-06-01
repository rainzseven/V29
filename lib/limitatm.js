const fs = require('fs')

/**
 * GET db
**/
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const addATM = (userid) => {
	const obj = {id: userid, uang : 10000}
    uang.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}


	const confirmATM = (userid, amount) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
} 

module.exports = {
	

	confirmATM,
	addATM
}