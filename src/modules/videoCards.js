// Array of video data
const videos = [
    { src: "https://www.youtube.com/embed/S_EoUt4ybpw?si=w3OdLaMHCzRJtJCZ", title: "Dil Mein Tum" },
    { src: "https://www.youtube.com/embed/tcwNOr-9wMo?si=_1n0KkxDTuYX65tX", title: "YouTube video player" },
    { src: "https://www.youtube.com/embed/0j4W65p516s?si=EQ_3SajgRrb-CH2a", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/NkuN3YHTFA4?si=FJuTRAKm885G4WyZ", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/ZIGh4ESW41g?si=Abq801pvIT-LSyY1", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/xsJVvA01UQU?si=xP0ZHJCcwkdGNZpC", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/qr525q0QHqg?si=eQGLHmmgLPJEXRv4", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/DUeqck7F6xA?si=EAIKN9MLTV6dlqIY", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/h0kvQPBRq_Y?si=P7EJJ0-eG3yhpWhY", title: "Sanam Re" },
    { src: "https://www.youtube.com/embed/ezV2t6AUQ5M?si=eHGiXdOxYVrEw1QA", title: "Sanam Re" }
];

const grid = document.getElementById('music-grid');
const loadMoreButton = document.getElementById('load-more-btn');
let loadCount = 0;
const batchSize = [3, 3, 4]; //batch sizes based on number of videos 1st load 3 videos, then 3 videos & lastly 4 videos

function createVideocard(video) {
    return `
      <div class="music-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 relative">
        <div class="aspect-video w-full">
          <iframe class="w-full h-full" loading="lazy"
            src="${video.src}" title="${video.title}"
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    `;
};


export function loadNextBatch(){
    let batchIdx = Math.floor(loadCount / 3);
    let toLoad = batchSize[batchIdx] || 0; // Get the batch size based on the current load count
    let nextVideos = videos.slice(loadCount, loadCount + toLoad);

    loadMoreButton.addEventListener('click', loadNextBatch)

    nextVideos.forEach(video => {
        grid.insertAdjacentHTML('beforeend',
        createVideocard(video));
    });
    loadCount += toLoad;
    if (loadCount >= videos.length) {
      loadMoreButton.style.display = 'none';
    }
}