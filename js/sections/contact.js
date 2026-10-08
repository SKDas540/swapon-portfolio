import { renderSectionHeading } from "../components/section-heading.js";

export function renderContact(data) {
  const section = document.querySelector("#contact");
  if (!section) return;

  section.innerHTML = `
    <div class="container section contact__layout">
      <div class="contact__details">
        ${renderSectionHeading(data.contact, "contact-title")}
        <a class="contact__email" href="mailto:${data.personal.email}">${data.personal.email}<span aria-hidden="true">↗</span></a>
        <p class="contact__location"><span>${data.contact.locationLabel}</span>${data.personal.location}</p>
      </div>
      <form class="contact-form fade-up" id="contact-form" aria-labelledby="contact-title">
        <div class="form-field">
          <label for="contact-name">Your name</label>
          <input id="contact-name" name="name" autocomplete="name" required maxlength="100">
        </div>
        <div class="form-field">
          <label for="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="254">
        </div>
        <div class="form-field">
          <label for="contact-message">How can I help?</label>
          <textarea id="contact-message" name="message" rows="5" minlength="10" maxlength="3000" required></textarea>
        </div>
        <button class="btn btn-primary contact-form__submit" type="submit">Open email draft <span aria-hidden="true">↗</span></button>
        <p class="contact-form__note">This form opens your email app. It does not send or store your message here.</p>
        <p class="contact-form__status" role="status" aria-live="polite" data-form-status></p>
      </form>
    </div>
  `;

  const form = section.querySelector("#contact-form");
  const status = section.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const subject = `Portfolio inquiry from ${fields.get("name").trim()}`;
    const body = `${fields.get("message").trim()}\n\nFrom: ${fields.get("name").trim()}\nReply to: ${fields.get("email").trim()}`;
    status.textContent = "Opening a prefilled email draft. Your message is not sent by this website.";
    window.location.href = `mailto:${data.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
