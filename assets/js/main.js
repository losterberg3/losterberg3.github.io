document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".task-card").forEach((card) => {
    const buttons = card.querySelectorAll(".tab-btn");
    const slot = card.querySelector(".video-slot");
    const taskName = card.dataset.task || "";

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const condLabel = btn.dataset.label || btn.textContent.trim();
        if (slot) {
          slot.querySelector(".vs-title").textContent = `${taskName} — ${condLabel}`;
        }
      });
    });
  });

  const copyBtn = document.querySelector(".copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = document.querySelector(".bibtex-box code").textContent;
      navigator.clipboard.writeText(text).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = original), 1500);
      });
    });
  }
});
