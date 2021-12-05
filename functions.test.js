const functions = require('./functions.js');
const nameCheck = () => console.log('Checking Name.....');
describe('Checking Names',() => {
     beforeEach(() => nameCheck());
     test('User is Jeff',() => {
          const user = 'Jeff';
          expect(user).toBe('Jeff');
     });
     test('User is Karen',() => {
          const user = 'Karen';
          expect(user).toBe('Karen');
     });
});
test('Adds 2 + 2 to equal 4',() => {
     expect(functions.add(2,2)).toBe(4);
});
test('Adds 2 + 2 to NOT Equal 5',() => {
     expect(functions.add(2,2)).not.toBe(5);
});
test('Should be null',() => {
     expect(functions.isNull()).toBeNull();
});
test('Should be falsy',() => {
     expect(functions.checkValue(undefined)).toBeFalsy();
});
test('User should be Minhaz Halim object',() => {
     expect(functions.createUser()).toEqual({
          firstName: 'Minhaz',
          lastName: 'Halim',
     });
});
test('Should be under 1600',() => {
     const load1 = 800;
     const load2 = 800;
     expect(load1 + load2).toBeLessThanOrEqual(1600);
});
test('There is no I in team',() => {
     expect('team').not.toMatch(/I/i);
});
test('Admin should be in username',() => {
     usernames = ['john','karen','admin'];
     expect(usernames).toContain('admin');
});
test('User fetched name should be Leanne Graham',async () => {
     expect.assertions(1);
     const data = await functions.fetchUser();
     expect(data.name).toEqual('Leanne Graham');
});