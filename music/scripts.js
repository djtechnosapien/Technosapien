const musicData = [
    {
        title: "You Are The One (Athena)",
        videoId: "40DzpSiZ9Ws",
        artwork: "assets/youaretheoneathena.png",
        description: "A futuristic bass-driven track inspired by AI and cyberpunk aesthetics.",
        plays: "800 Plays",
        links: {
            spotify: "https://open.spotify.com/track/5XduYb74DbkAveaSiMCb8e?si=c73360ffc4e14adb",
            apple: "https://music.apple.com/us/album/YOUR_APPLE_ID",
            soundcloud: "https://soundcloud.com/YOUR_SOUNDCLOUD_TRACK",
            bandcamp: "https://yourartist.bandcamp.com/track/your-song"
        }
    },
    {
        title: "Out of Time",
        videoId: "P35HjamsU84",
        artwork: "assets/outoftime.png",
        description: "Deep house vibes with neon-lit cityscape visuals.",
        plays: "150 Plays",
        links: {
            spotify: "https://open.spotify.com/track/5Fh4oRUOgJI1GyZsV3PuGR?si=7d94a1c1a11d495e",
            apple: "https://music.apple.com/us/album/YOUR_APPLE_ID_2",
            soundcloud: "https://soundcloud.com/YOUR_SOUNDCLOUD_TRACK_2",
            bandcamp: "https://yourartist.bandcamp.com/track/your-song-2"
        }
    },
    {
        title: "Sunshine",
        videoId: "nGYtXDOIVZw",
        artwork: "assets/sunshine.jpg",
        description: "Deep house vibes with neon-lit cityscape visuals.",
        plays: "150 Plays",
        links: {
            spotify: "https://open.spotify.com/track/0Bev3mw8zIePoGL8tDF5gg?si=b2e2d321178c4dfa",
            apple: "https://music.apple.com/us/album/YOUR_APPLE_ID_2",
            soundcloud: "https://soundcloud.com/YOUR_SOUNDCLOUD_TRACK_2",
            bandcamp: "https://yourartist.bandcamp.com/track/your-song-2"
        }
    },
    {
        title: "Get Right",
        videoId: "2B2fQGDHoLM",
        artwork: "assets/getright.png",
        description: "Deep house vibes with neon-lit cityscape visuals.",
        plays: "150 Plays",
        links: {
            spotify: "https://open.spotify.com/track/31NruuksmMvQF6tflufP7W?si=c9d0bc47895e468e",
            apple: "https://music.apple.com/us/album/YOUR_APPLE_ID_2",
            soundcloud: "https://soundcloud.com/YOUR_SOUNDCLOUD_TRACK_2",
            bandcamp: "https://yourartist.bandcamp.com/track/your-song-2"
        }
    },
    {
        title: "Tacos in Space",
        videoId: "LvH3E_4vd6k",
        artwork: "assets/tacosinspace.jpg",
        description: "Deep house vibes with neon-lit cityscape visuals.",
        plays: "150 Plays",
        links: {
            spotify: "https://open.spotify.com/track/7k5AMj0ztez71HNQRkA4tR?si=a2ef5e283b744c64",
            apple: "https://music.apple.com/us/album/YOUR_APPLE_ID_2",
            soundcloud: "https://soundcloud.com/YOUR_SOUNDCLOUD_TRACK_2",
            bandcamp: "https://yourartist.bandcamp.com/track/your-song-2"
        }
    },
    {
        title: "!theGoodKind",
        videoId: "evPxrhzG6gY",
        artwork: "assets/foreversoundsperfect.jpg",
        description: "Deep house vibes with neon-lit cityscape visuals.",
        plays: "150 Plays",
        links: {
            spotify: "https://open.spotify.com/track/3BRW1ZGtUgazTC6NMpsBLa?si=665d451e37e54012",
            apple: "https://music.apple.com/us/album/YOUR_APPLE_ID_2",
            soundcloud: "https://soundcloud.com/YOUR_SOUNDCLOUD_TRACK_2",
            bandcamp: "https://yourartist.bandcamp.com/track/your-song-2"
        }
    }
];

const musicList = document.getElementById("music-list");

musicData.forEach(track => {
    const item = document.createElement("div");
    item.classList.add("music-item");

    item.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${track.videoId}" frameborder="0" allowfullscreen></iframe>
        <h3>${track.title}</h3>
        <img src="${track.artwork}" alt="Artwork for ${track.title}">
        <p>${track.description}</p>
        <p><strong>${track.plays}</strong></p>
        <div class="streaming-links">
            <a href="${track.links.spotify}" target="_blank">Spotify</a> |
            <a href="${track.links.apple}" target="_blank">Apple Music</a> |
            <a href="${track.links.soundcloud}" target="_blank">SoundCloud</a> |
            <a href="${track.links.bandcamp}" target="_blank">Bandcamp</a>
        </div>
    `;

    musicList.appendChild(item);
});

