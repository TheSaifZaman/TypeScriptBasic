export function identity<T>(arg: T): T {
    return arg;
}

export function addId<T extends { name: string; age: number }>(obj: T): T {
    const id = Math.random().toString(36).substring(2);
    return { ...obj, id };
}