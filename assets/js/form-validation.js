const form = document.forms.namedItem("idopontkeres");
const messages = {
  nev: "Adjon meg egy fiktív nevet.",
  telefon: "Adjon meg egy 7–24 karakter hosszú fiktív telefonszámot.",
  email: "Adjon meg e-mail-formátumú fiktív címet, vagy hagyja üresen a mezőt.",
  ok: "Válassza ki a kapcsolatfelvétel okát.",
  visszahivas: "Adjon meg egy napot vagy idősávot.",
  hozzajarulas: "A beküldéshez jelölje be a hozzájárulást."
};

const fields = Object.keys(messages).map((name) => {
  const input = form.elements.namedItem(name);
  return {
    input,
    help: input.getAttribute("aria-describedby"),
    error: document.getElementById(name + "-error")
  };
});

function validate({ input, help, error }) {
  const invalid = !input.validity.valid ||
    (input.required && input.type === "text" && !input.value.trim());
  error.textContent = invalid ? messages[input.name] : "";
  error.hidden = !invalid;
  if (invalid) input.setAttribute("aria-invalid", "true");
  else input.removeAttribute("aria-invalid");

  const description = [help, invalid ? error.id : null].filter(Boolean).join(" ");
  if (description) input.setAttribute("aria-describedby", description);
  else input.removeAttribute("aria-describedby");
  return !invalid;
}

for (const field of fields) {
  const updateError = () => {
    if (field.input.hasAttribute("aria-invalid")) validate(field);
  };
  field.input.addEventListener("input", updateError);
  field.input.addEventListener("change", updateError);
}

form.addEventListener("submit", (event) => {
  const invalid = fields.filter((field) => !validate(field));
  if (invalid.length) {
    event.preventDefault();
    invalid[0].input.focus();
  }
});

form.noValidate = true;
