// document.querySelectorAll('video')[0].requestPictureInPicture()


setInterval(hideBottomOverlay, 5000)

function hideBottomOverlay() {
    document.querySelectorAll('[class*=overlayBottom-]').forEach(el => el.remove())
}




function test() {
    let container = findRootContainer()
    extractVideoElementsFromContainer(container)


}



function getParticipantsNames() {

}

function extractVideoElementsFromContainer(container) {
    container.querySelectorAll()
    let childs = container.childNodes


}

function getParticipantVideoByName(name) {

}

function findRootContainer() {
    return document.querySelectorAll('[class*=listItems]')[0];
}



function calculateParticipants() {
    return document.querySelectorAll('[class*=listItems]')[0].childNodes.length
}


//into childs of listItems find tile









// if (currentHostname === 'www.twitch.tv') {



//     console.log('No script for this site');
// }
