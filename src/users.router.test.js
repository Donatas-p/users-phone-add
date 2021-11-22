test('users router', () => {

    const userRouter = require("./users.router.js");
    const usersRouter = new userRouter();
    let users = [{id: 49, first_name: 'Phillip'}],
        phoneNumber = ['(496) 430-7077 x752'],
        usersComplete = [{id: 49, first_name: 'Phillip', phoneNumber: '(496) 430-7077 x752'}]
    expect(userRouter.usersWithPhones(users, phoneNumber, 1)).tobe(usersComplete)
})