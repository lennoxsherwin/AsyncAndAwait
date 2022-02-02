

let isFriendReady = true;

const watchMovie = new Promise((resolve, reject) => {
    if (isFriendReady) {
        return resolve('You are going to watch Fast Furious 8');
    } else {
        var reason = new Error('Your friend is not Ready');
        return reject(reason);
    }
});
const askFriend = async() => {
    const result = await watchMovie;
    return result;
}
askFriend()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    })