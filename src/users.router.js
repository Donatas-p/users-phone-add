const express = require("express");
const users = require("./users.json");
const fakeGenerator = require('./fake.generator.js')

const userRouter = express.Router();


async function getPhoneNumbers(size) {
    return fakeGenerator.getPhoneNumbers(size)
}

async function getAllPhoneNumbers(size) {
    const phoneNumbers = await getPhoneNumbers({size})
    if(typeof phoneNumbers === 'undefined') return false
    let callAmount = Math.ceil(size/phoneNumbers.success.total)
    let totalPhones = [phoneNumbers.contents.phonenumbers]
    for (i=0; i < callAmount; i++) {
        let tempPhones = await getPhoneNumbers({size})
        totalPhones.push(tempPhones.contents.phonenumbers)
    }
    return totalPhones.flat();
}

function usersWithPhones(usersArr, phoneNumbers) {
    return usersArr.map((value, index) => {
        value.phoneNumber = phoneNumbers[index]
        return value
    })
}

userRouter.get("/", async function (req, res, next) {
    let size = users.length
    const phoneNumbers = await getAllPhoneNumbers(size)
    res.send(usersWithPhones(users, phoneNumbers));
});


module.exports = userRouter;
