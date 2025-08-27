document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code.language-mermaid").forEach((code) => {
    const pre = code.parentElement;
    const div = document.createElement("div");
    div.className = "mermaid";
    div.textContent = code.textContent;
    pre.replaceWith(div);
  });

  // Re-run Mermaid after converting the blocks
  if (window.mermaid) {
    mermaid.initialize({ startOnLoad: false, securityLevel: "loose" });
    mermaid.init(); // render all .mermaid blocks
  }
});
