export default () => {
    const getPodcastData = async () => {
        await fetch('/api-podcast')
            .then(response => response.json());
    }
}
