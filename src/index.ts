class ProgressBar {
  private $body: HTMLBodyElement | null;
  private $progressBar: HTMLDivElement | null;
  private progress: number;
  private timmer: NodeJS.Timer | null;

  constructor() {
    this.$body = document.querySelector("body");
    this.$progressBar = null;
    this.progress = 0;
    this.timmer = null;

    this.init();
  }

  private init() {
    const $container = document.createElement("div");
    const $progressBar = document.createElement("div");

    $container.className = "progress-bar-container";
    $container.style.position = "fixed";
    $container.style.top = "0";
    $container.style.left = "0";
    $container.style.width = "100%";
    $progressBar.className = "progress-bar";
    $progressBar.style.width = "10%";
    $progressBar.style.height = "5px";
    $progressBar.style.backgroundColor = "red";
    $container.appendChild($progressBar);

    if (this.$body) {
      this.$body.appendChild($container);

      this.$progressBar = $progressBar;
    } else {
      throw new Error("Error!!");
    }
  }

  start() {
    this.timmer = setInterval(() => {
      if (this.progress === 100 && this.timmer) {
        console.log("===================");
        return this.clearTimmer();
      }

      if (this.$progressBar) {
        this.$progressBar.style.width = `${this.progress}%`;
        this.progress += 1;
        console.log(this.progress);
        if (this.progress === 50) {
          this.end();
          this.clearTimmer();
        }
      }
    }, 10);
  }

  end() {
    if (this.$progressBar) {
      this.$progressBar.style.width = "100%";
      this.progress = 0;
      this.$progressBar.style.height = "0px";
    }
  }

  private clearTimmer() {
    if (this.timmer) {
      clearInterval(this.timmer);
    }
  }
}

export default new ProgressBar();
