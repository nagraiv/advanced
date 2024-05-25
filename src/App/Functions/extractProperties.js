
export default function extractProperties(obj = {}) {
    const { special = [] } = obj;
    return special.map(el => {
        const {id, name, description = 'Описание недоступно', icon} = el;
        return {id, name, description, icon};
    });
}