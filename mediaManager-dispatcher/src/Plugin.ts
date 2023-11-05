
/**
 * 
 * a abstract class for plugin
 * 
 * 
 */
export default class Plugin {
    private readonly _name: string;
    private readonly _config: any;

    constructor(name: string, config: any) {
        this._name = name;
        this._config = config;
    }

    // getters and setters

    get name() {
        return this._name;
    }

    get config() {
        return this._config;
    }


    // methods

    public async init() {
        console.log("Plugin init");
    }

    call(event: string, data: any) {
        console.log("Plugin call");
    }
}
