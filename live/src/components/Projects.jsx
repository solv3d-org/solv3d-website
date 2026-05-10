import { createSignal, onMount, onCleanup, For, Show } from "solid-js";
import { t, PROJECTS } from "../data/content";
import "./Projects.css";

function VideoShowcase(props) {
  const [active, setActive] = createSignal(0);
  return (
    <div class="video-showcase">
      <div classList={{ "video-main": true, "video-main-landscape": props.aspect === "landscape" }}>
        <video src={props.videos[active()].src} autoplay loop muted playsinline key={active()} class={props.zoom ? "video-zoomed" : ""} />
      </div>
      <Show when={props.videos.length > 1}>
        <div class="video-tabs">
          <For each={props.videos}>
            {(v, i) => (
              <button classList={{ "video-tab": true, "is-active": i() === active() }} onClick={() => setActive(i())}>{v.label}</button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

function ImageGallery(props) {
  const [active, setActive] = createSignal(0);
  return (
    <div class="image-gallery">
      <div class="gallery-main">
        <img src={props.images[active()].src} alt={props.images[active()].alt} />
      </div>
      <div class="gallery-thumbs">
        <For each={props.images}>
          {(img, i) => (
            <button classList={{ "gallery-thumb": true, "is-active": i() === active() }} onClick={() => setActive(i())}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          )}
        </For>
      </div>
    </div>
  );
}

export default function Projects() {
  let wrapperRef, trackRef;
  onMount(() => {
    const updateScroll = () => {
      if (!wrapperRef || !trackRef) return;
      const rect = wrapperRef.getBoundingClientRect();
      const wrapperH = wrapperRef.offsetHeight;
      const viewH = window.innerHeight;
      const scrollable = wrapperH - viewH;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const maxTranslate = trackRef.scrollWidth - trackRef.offsetWidth;
      trackRef.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    updateScroll();
    onCleanup(() => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    });
  });
  const learned = PROJECTS.items[0];
  const fluent = PROJECTS.items[1];
  const dealbreaker = PROJECTS.items[2];
  const lightForm = PROJECTS.items[3];
  const handoff = PROJECTS.items[4];
  return (
    <section class="projects-wrapper" id="projects" ref={wrapperRef}>
      <div class="projects-sticky">
        <div class="projects-header shell">
          <div class="section-heading">
            <h2>{t().projects.title}</h2>
          </div>
        </div>
        <div class="projects-track" ref={trackRef}>
          <div class="project-slide">
            <div class="project-card">
              <div class="project-media">
                <VideoShowcase videos={lightForm.videos} aspect={lightForm.media?.aspect} />
              </div>
              <div class="project-info">
                <span class="project-type">{lightForm.type}</span>
                <h3>{lightForm.name}</h3>
                <p>{lightForm.description}</p>
                <div class="project-links">
                  <a href={lightForm.links.website} target="_blank" rel="noopener" class="project-link project-link-site">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.13a15.8 15.8 0 00-1.26-5.02A8.01 8.01 0 0119.93 11zM12 4.02c.88 1.14 1.95 3.26 2.54 6H9.46c.59-2.74 1.66-4.86 2.54-6zM8.46 5.98A15.8 15.8 0 007.2 11H4.07a8.01 8.01 0 014.39-5.02zM4.07 13H7.2c.21 1.82.65 3.54 1.26 5.02A8.01 8.01 0 014.07 13zm4.39 0h5.08c-.59 2.74-1.66 4.86-2.54 6.02-.88-1.16-1.95-3.28-2.54-6.02zM15.54 18.02A15.8 15.8 0 0016.8 13h3.13a8.01 8.01 0 01-4.39 5.02z"/></svg>
                    View Client Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project-slide">
            <div class="project-card">
              <div class="project-media">
                <VideoShowcase videos={handoff.videos} />
              </div>
              <div class="project-info">
                <span class="project-type">{handoff.type}</span>
                <h3>{handoff.name}</h3>
                <p>{handoff.description}</p>
                <div class="project-links">
                  <a href={handoff.links.github} target="_blank" rel="noopener" class="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project-slide">
            <div class="project-card">
              <div class="project-media">
                <VideoShowcase videos={learned.videos} zoom />
              </div>
              <div class="project-info">
                <span class="project-type">{learned.type}</span>
                <h3>{learned.name}</h3>
                <p>{learned.description}</p>
                <div class="project-links">
                  <a href={learned.links.github} target="_blank" rel="noopener" class="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project-slide">
            <div class="project-card">
              <div class="project-media">
                <VideoShowcase videos={fluent.videos} />
              </div>
              <div class="project-info">
                <span class="project-type">{fluent.type}</span>
                <h3>{fluent.name}</h3>
                <p>{fluent.description}</p>
                <div class="project-links">
                  <a href={fluent.links.github} target="_blank" rel="noopener" class="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a href={fluent.links.youtube} target="_blank" rel="noopener" class="project-link project-link-yt">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project-slide">
            <div class="project-card">
              <div class="project-media">
                <ImageGallery images={dealbreaker.images} />
              </div>
              <div class="project-info">
                <span class="project-type project-type-winner">{dealbreaker.type}</span>
                <h3>{dealbreaker.name}</h3>
                <p>{dealbreaker.description}</p>
                <Show when={dealbreaker.teamPhoto}>
                  <div class="team-win-photo">
                    <img src={dealbreaker.teamPhoto.src} alt={dealbreaker.teamPhoto.alt} loading="lazy" />
                  </div>
                </Show>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
