import PocketBase from 'pocketbase'

export function initPocketBase() {
	return new PocketBase('https://infotel-safari-api.beta.andy-cinquin.fr')
}
