import orderByProps from '../orderByProps'

describe('Тестируем функцию orderByProps на корректность передаваемых параметров', () => {
    it('программа не упадёт, если вызвать функцию без аргументов', () => {
        expect(() => orderByProps()).not.toThrowError();
    });

    it('должна выбрасываться ошибка, если второй аргумент - не массив', () => {
        expect(() => orderByProps({}, '5')).toThrow('Array expected!');
    });
});

describe('Длина исходного объекта и получившегося массива свойств должны совпадать', () => {
    it('тестируем пустой объект', () => {
        const result = orderByProps({}, ['property', 'anotherProperty']);
        expect(result.length).toBe(0);
    });

    it('тестируем сортировочный массив длиннее, чем объект', () => {
        const result = orderByProps({name: 'John', lastname: 'Doe'}, ['name', 'lastname', 'name', 'age']);
        expect(result.length).toBe(2);
    });
});

describe('orderByProps должна корректно преобразовывать объект в массив и сортировать свойства', () => {
    it('тестируем', () => {
        const result = orderByProps(
            {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
            ["name", "level", "name", "level"]);
        expect(result).toEqual([
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "attack", value: 80},
            {key: "defence", value: 40},
            {key: "health", value: 10},
        ]);
    });
});
