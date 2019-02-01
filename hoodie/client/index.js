// /hoodie/client.js
module.exports = function (hoodie) {
	hoodie.howdie = function (what) {
		return Promise.resolve('Hi, ' + (what || 'world') + '!')
	}
}

