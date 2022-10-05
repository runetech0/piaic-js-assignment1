


const makeAlbum = (artistName, albumTitle, numOfTracks) =>{
    let album = {
        artist: artistName,
        albumName: albumTitle,
    }
    if (typeof numOfTracks !== "undefined") {
        album.tracksCount = numOfTracks
    }
    return album
}


let album = makeAlbum("Zia Khan", "Make Pakistan Rich")
console.log(`Artist Name: ${album.artist}\nAlbum Title: ${album.albumName}`)


album = makeAlbum("Daniyal Nagori", "Make them Skillfull", 10)
console.log(`Artist Name: ${album.artist}\nAlbum Title: ${album.albumName}\nTracks Conut: ${album.tracksCount}`)