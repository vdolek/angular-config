export class ConfigurationBase {
  [_: string]: string;

  public constructor(json: ConfigurationJson) {
    for (const prop in json) {
      if (json.hasOwnProperty(prop)) {
        this[prop] = json[prop];
      }
    }
  }
}

export interface ConfigurationJson {
  [_: string]: string
}
