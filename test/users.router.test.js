
const userRouter = require("../src/users.router");
describe('users router', () => {

    let users = [{id: 49, first_name: 'Phillip'}],
    phoneNumber = ['(496) 430-7077 x752'],
    usersComplete = [{id: 49, first_name: 'Phillip', phoneNumber: '(496) 430-7077 x752'}]
    
    it('get users with phones', () => {
        expect(userRouter.usersWithPhones(users, phoneNumber, 1)).toEqual(usersComplete)
    });
})