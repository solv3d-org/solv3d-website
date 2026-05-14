import { For } from "solid-js";
import { CLIENTS, t } from "../data/content";
import "./Clients.css";

export default function Clients() {
  return (
    <section class="section clients-section" id="clients">
      <div class="shell clients-shell">
        <div class="section-heading clients-heading">
          <h2>{t().clients.title}</h2>
          <p>{t().clients.intro}</p>
        </div>
        <div class="clients-grid">
          <For each={CLIENTS.items}>
            {(client) => (
              <a
                class="client-card"
                href={client.url}
                target="_blank"
                rel="noopener"
                aria-label={`Visit ${client.name} on Instagram`}
              >
                <div class="client-logo-frame">
                  <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
                </div>
                <div class="client-copy">
                  <span>Client</span>
                  <h3>{client.name}</h3>
                  <p>{client.description}</p>
                </div>
                <span class="client-link-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </a>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
