const arrName = ['serega', 'Kolya', 'Vasya', 'Kostya', 'Sveta', 'Viktor', 'Igor', 'Dima', 'Oleg', 'Pasha', 'Dante']
const arrAge = [35,27,12,54,32,23,56,32,23,19]
export type ObjType = {
    id: number
    name: string
    age: number
}
export const arr: ObjType[] = new Array(10).fill(null).map((el, index)=>({
    id: index + 1,
    name: arrName[index],
    age: arrAge[index]
}))