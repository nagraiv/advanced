import extractProperties from "../extractProperties";

describe('Тестируем функцию extractProperties на корректность передаваемых параметров', () => {
    it('программа не упадёт, если вызвать функцию без аргументов', () => {
        expect(() => extractProperties()).not.toThrowError();
    });

    it('программа не упадёт, если вместо объекта передать примитив', () => {
        expect(() => extractProperties(12)).not.toThrowError();
    });

    it('программа не упадёт, если в переданном объекте нет свойства special', () => {
        expect(() => extractProperties({ name: 'Rita', age: 21})).not.toThrowError();
    });
});

describe('extractProperties должна корректно извлекать свойства из объекта', () => {
    it('даже в случае отсутствия описания', () => {
        const result = extractProperties({
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                    // <- обратите внимание, описание "засекречено"
                }
            ]
        });
        expect(result).toEqual([
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно',
            }
        ]	);
    });
});