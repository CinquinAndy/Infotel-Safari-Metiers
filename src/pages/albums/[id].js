import PocketBase from "pocketbase";
import {getAlbumIdList, getAlbumsDetails} from "../../../lib/albums";
import {useQuery} from "@tanstack/react-query";
import {initPocketBase} from "../../../lib/pocketbase";


export default function Album({albumData}) {
    return (
        <>
            <div>
                <h1>Album</h1>
                <br/>
                <p>albumData : {JSON.stringify(albumData)}</p>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const pb = initPocketBase()
    const res = await pb.collection('albums_ids').getFullList()
    /**
     * format the data for getStaticPaths
     * @type {{params: {id: *}}[]}
     */
    const paths = res.map(record => ({
        params: {
            id: record.id
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const pb = initPocketBase()
    const record = await pb.collection('albums').getOne(params.id)
    const albumData = await getAlbumsDetails(params.id)
    if (!albumData) {
        return {
            props: {hasError: true},
        }
    }
    return {
        props: {
            albumData
        },
    }
}
