
export default function (query) {

    var request = new XMLHttpRequest();
    request.open("POST", 'https://graphql.contentful.com/content/v1/spaces/yhw377pukdz9', false);
    request.setRequestHeader('authorization', "Bearer c95a9744f3de3940090384f3311b5229aaa5e7878516cd22d0c0da6ae44b9f81")
    request.setRequestHeader('Content-Type', "application/json")
    request.send(JSON.stringify({
        query,
    }));

    if (request.status === 200) {
        return JSON.parse(request.responseText)
    } else {
        return null;
    }

}