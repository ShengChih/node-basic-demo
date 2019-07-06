const uuidv4 = require('uuid/v4')

module.exports = {
    gen_uuid: function () {
        return uuidv4()
    }
}