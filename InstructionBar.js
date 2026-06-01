// InstructionBar.js

export default class InstructionBar {
  constructor(text = "Instruction Bar Active") {
    this.id = "instruction-bar";
    this.text = text;
    this.originalPadding = null;
    this.create();
  }

  create() {
    if (document.getElementById(this.id)) return;

    const bar = document.createElement("div");
    bar.id = this.id;
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.right = "0";
    bar.style.zIndex = "9999";
    bar.style.display = "flex";
    bar.style.alignItems = "center";
    bar.style.justifyContent = "space-between";
    bar.style.padding = "10px 16px";
    bar.style.background = "#0f0f0f";
    bar.style.color = "#ffffff";
    bar.style.fontFamily = "system-ui, sans-serif";
    bar.style.fontSize = "15px";
    bar.style.boxShadow = "0 2px 6px rgba(0,0,0,0.4)";

    const textSpan = document.createElement("span");
    textSpan.id = this.id + "-text";
    textSpan.textContent = this.text;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.color = "#fff";
    closeBtn.style.fontSize = "18px";
    closeBtn.style.cursor = "pointer";

    closeBtn.onclick = () => this.remove();

    bar.appendChild(textSpan);
    bar.appendChild(closeBtn);

    this.originalPadding = document.body.style.paddingTop;
    document.body.style.paddingTop = "45px";

    document.body.appendChild(bar);
  }

  setText(newText) {
    const el = document.getElementById(this.id + "-text");
    if (el) el.textContent = newText;
  }

  remove() {
    const bar = document.getElementById(this.id);
    if (bar) bar.remove();
    document.body.style.paddingTop = this.originalPadding || "0px";
  }
}