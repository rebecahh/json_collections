let outputContainer = document.getElementById('outputContainer');
let outputText = document.getElementById('outputText');
let contentGrid = document.getElementById('contentGrid');

console.log("hi");
let albumDatabase = [
  {
    "title" : "Kiki's Delivery Service",
    "artist" : "Joe Hisaishi",
    "cover_art" : "https://i.scdn.co/image/ab67616d0000b27333c927e353611ebb8115fc90",
    "bg_color" : "slateblue",
    "favorite_tracks" : ["On a Clear Day","A Town with an Ocean View","Heartbroken Kiki"]
  },
  {
    "title" : "My Neighbor Totoro",
    "artist" : "Joe Hisaishi",
    "cover_art" : "https://i.ebayimg.com/images/g/Qy0AAOxyLm9TGPki/s-l500.jpg",
    "bg_color" : "skyblue",
    "favorite_tracks" : ["Hey Let's Go","The Path of the Wind","My Neighbor Totoro"]
  },
  {
    "title" : "Howl's Moving Castle",
    "artist" : "Joe Hisaishi",
    "cover_art" : "https://m.media-amazon.com/images/I/81tK7nnoZhL._SS500_.jpg",
    "bg_color" : "yellowgreen",
    "favorite_tracks" : ["Merry-Go-Round of Life","Cleaning House"]
  },
  {
    "title" : "Princess Mononoke",
    "artist" : "Joe Hisaishi",
    "cover_art" : "https://m.media-amazon.com/images/I/7157MzcRFKL._SL1008_.jpg",
    "bg_color" : "white",
    "favorite_tracks" : ["The Legend of Ashitaka","The Demon God","Ashitaka and San"]
  },
  {
    "title" : "Aladdin",
    "artist" : "Alan Menken",
    "cover_art" : "https://i1.sndcdn.com/artworks-000111477320-zljvtd-t500x500.jpg",
    "bg_color" : "midnightblue",
    "favorite_tracks" : ["The Ends Of The Earth","Marketplace"]
  },
  {
    "title" : "Tangled",
    "artist" : "Alan Menken",
    "cover_art" : "https://i.scdn.co/image/ab67616d0000b273edf215951b7ae5c696b3925f",
    "bg_color" : "goldenrod",
    "favorite_tracks" : ["Waiting for the Lights","Realization and Escape"]
  },
  {
    "title" : "The Lion King",
    "artist" : "Hanz Zimmer",
    "cover_art" : "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Lion_King_%28soundtrack%29.jpg",
    "bg_color" : "moccasin",
    "favorite_tracks" : ["This Land","Under the Stars"]
  },
  {
    "title" : "Porco Rosso",
    "artist" : "Joe Hisaishi",
    "cover_art" : "https://i.scdn.co/image/ab67616d0000b273b9ae009459e7cc8a13452d7e",
    "bg_color" : "indianred",
    "favorite_tracks" : ["The Wind of Ages","Bygone Days","LOST SPIRIT"],
    // "link" : "https://open.spotify.com/album/6NhWTFHoOj5n0UhbBkq5G3?si=31vhRmNERLq2ZXuyY92NpA"
  }
];

for (var i=0;i<albumDatabase.length;i++){
  createObject(albumDatabase[i]);
}

function createObject(object){
  let newElement = document.createElement("DIV");
  newElement.style.backgroundColor = object['bg_color'];
  newElement.classList.add('contentItem');

  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  newImage.src = object['cover_art'];
  // newImage.link = object['link'];

  let newTitle = document.createElement("H4");
  newTitle.innerText = object['title'];
  newTitle.style.backgroundColor = "white";

  let newArtist = document.createElement("H5");
  newArtist.style.backgroundColor = "white";
  newArtist.innerText = object['artist'];

  // let newTrackListText = document.createElement("H6");
  // newTrackListText.style.backgroundColor = "white";
  // newTrackListText.innerText = "Favorite tracks:";
  let newTrackList = document.createElement("UL");
  newTrackList.style.backgroundColor = "white";
  newTrackList.style.fontSize = "small";
  for (var i=0;i<object['favorite_tracks'].length;i++){
    let newTrack = document.createElement("LI");
    let track = object['favorite_tracks'][i];
    newTrack.innerText = track;
    newTrackList.appendChild(newTrack);
  }

  newElement.appendChild(newImage);
  newElement.appendChild(newTitle);
  newElement.appendChild(newArtist);
  // newElement.appendChild(newTrackListText);
  newElement.appendChild(newTrackList);

  contentGrid.appendChild(newElement);
}
