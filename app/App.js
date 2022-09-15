// import { ValuesController } from "./Controllers/ValuesController.js";

import { GiphyController } from "./Controllers/GiphyController.js";
import { SandboxGifsController } from "./Controllers/SandboxGifsController.js";

class App {
  // valuesController = new ValuesController();
  sandboxGifsController = new SandboxGifsController();
  giphyController = new GiphyController();
}

window["app"] = new App();
