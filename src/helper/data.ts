export async function checkData<T>(): Promise<any> {
    const dataInString = await localStorage.getItem('userData');
    console.log(dataInString,"from local")
    if (dataInString) {
        try {
            const dataInJS: T =await JSON.parse(dataInString);
            console.log(dataInJS,"from local storage")
            return dataInJS;
        } catch (error) {
            console.error("Error parsing data from localStorage", error);
            return null;
        }
    }
    return null;
}
