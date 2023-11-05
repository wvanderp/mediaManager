import config from "../config"
import Plugin from './Plugin';

interface Config {
    plugins: Plugin[];
}

/**
 * @class Dispatcher
 * 
 * the dispatcher receives tasks from plugins
 * and dispatches them to the appropriate worker
 * then diceminates the results back to the plugins
 * 
 * 
 */
export default class Dispatcher {
  private readonly _config: any;

  constructor() {
    this._config = config;
  }

  public async init() {
    console.log("Dispatcher init");
  }
}
