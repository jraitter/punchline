export default class Gamedata {
    constructor(data) {
        this.type = data.type;
        this.setup = data.setup;
        this.punchline = data.punchline;
    }

    get Template() {
        return this.type
    }
}