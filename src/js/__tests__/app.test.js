import orderByProps from "../app.js";

test('testing the sorted', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const sortingOrder = ['name', 'level'];
    const expectedResult = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
      ];
    expect(orderByProps(obj, sortingOrder)).toStrictEqual(expectedResult);    
})
