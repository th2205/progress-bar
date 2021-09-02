class ProgressBar {
  private _body: HTMLBodyElement | null;
  private _isRun: boolean;

  constructor() {
    this._body = document.querySelector("body");
    this._isRun = false;
  }

  private init() {
    const $container = document.createElement("div");
    const $progressBar = document.createElement("div");

    $container.style.position = "absolute";
  }

  start() {}

  end() {}
}

export default new ProgressBar();
