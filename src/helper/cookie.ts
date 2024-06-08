
export function setCookie(name:string,data:string,age:number){
    document.cookie = `${name}=` + data + `; path=/; max-age=${age}`;
    return null
 

}
export function getCookie(name:string) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
