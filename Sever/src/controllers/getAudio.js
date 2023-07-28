
const getAudio = async (req, res) => {
    try {
        const audio = new Audio('../cancion/Sex-Pistols-Holidays-In-The-Sun.mp3');
        return res.status(200).response(audio);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    getAudio,
}