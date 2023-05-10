import PocketBase from "pocketbase";

export async function initPocketBase(){
    return new PocketBase('http://infotel-safari-api.beta.andy-cinquin.fr')
}