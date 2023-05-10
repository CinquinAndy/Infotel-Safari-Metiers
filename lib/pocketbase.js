import PocketBase from "pocketbase";

export function initPocketBase(){
    return new PocketBase('http://infotel-safari-api.beta.andy-cinquin.fr')
}