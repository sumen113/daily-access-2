(() => {
    "use strict";


    if (location.hostname !== "da.gihs.sa.edu.au") return;

    const PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0e1726">
    <link rel="icon" type="image/png" href="https://i.ibb.co/FbsvGQ7L/lgo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet">
    <title>Daily Access+</title>
    <style>
/* FINALLY CSS MY FAVOURITE YES YES */








                :root {
                    --background: #0e1726;
                    --card: #16233a;
                    --accent: #f2c14e;
                    --text: #f8f7f5;
                    --muted: color-mix(in srgb, var(--text) 58%, transparent);
                    --border: color-mix(in srgb, var(--text) 14%, transparent);
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                [hidden] {
                    display: none !important;
                }

                html,
                body {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                body {
                    background: var(--background);
                    color: var(--text);
                    font-family: "Bricolage Grotesque", sans-serif;
                    font-size: 15px;
                    font-weight: 500;
                }

                button {
                    font: inherit;
                    cursor: pointer;
                }

                button:focus-visible,
                a:focus-visible,
                input:focus-visible {
                    outline: 2px solid var(--accent);
                    outline-offset: 4px;
                }

                h1,
                h2 {
                    font-weight: 700;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                }

                h1 {
                    font-size: clamp(34px, 7vw, 64px);
                }

                h2 {
                    font-size: clamp(24px, 4vw, 34px);
                }








                /* ugh why is making a comment so hard, anyway i needed to put my images online because I just remembered that I will be making this a thing for js executors or smth */

                .background {
                    position: fixed;
                    inset: 0;
                    background-image: url("https://i.ibb.co/B2sdSxMh/Glenunga-International-High-School-Excellence-Opportunity-Harmony-International-Mindedness.jpg");
                    background-position: center;
                    background-size: cover;
                    pointer-events: none;
                }

                .background::after {
                    position: absolute;
                    inset: 0;
                    background: var(--background);
                    content: "";
                    opacity: 0.88;
                }

                .screen {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    visibility: hidden;
                }

                .page-wrap {
                    width: 100%;
                    max-width: 1040px;
                    flex: 1;
                    margin: 0 auto;
                    padding: 56px 6vw 48px;
                }

                .section-heading {
                    margin-bottom: 32px;
                    text-align: center;
                }

                .section-heading p {
                    margin-top: 8px;
                    color: var(--muted);
                }









                .hero {
                    align-items: center;
                    justify-content: center;
                    gap: 40px;
                    padding: 24px;
                    text-align: center;
                }

                .logo {
                    position: relative;
                    width: 190px;
                }

                .logo img {
                    display: block;
                    width: 100%;
                }

                .logo-tip {
                    position: absolute;
                    bottom: calc(100% + 10px);
                    left: 50%;
                    width: max-content;
                    max-width: 260px;
                    padding: 8px 12px;
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    background: var(--card);
                    font-size: 12px;
                    pointer-events: none;
                }

                .eyebrow {
                    display: block;
                    margin-bottom: 10px;
                    color: var(--accent);
                    font-size: 13px;
                }

                .subtitle {
                    margin-top: 14px;
                    color: var(--muted);
                    font-size: clamp(10px, 3.4vw, 15px);
                }

                .hold-button {
                    --progress: 0;
                    position: relative;
                    width: min(320px, 80vw);
                    height: 60px;
                    overflow: hidden;
                    border: 1px solid var(--accent);
                    border-radius: 6px;
                    background: transparent;
                    color: var(--text);
                    font-weight: 600;
                    touch-action: none;
                    user-select: none;
                    -webkit-user-select: none;
                }

                .hold-fill {
                    position: absolute;
                    inset: 0;
                    background: var(--accent);
                    transform: scaleX(var(--progress, 0));
                    transform-origin: left;
                }

                .hold-label {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    place-items: center;
                }

                .hold-label-filled {
                    color: var(--background);
                    clip-path: inset(0 calc((1 - var(--progress, 0)) * 100%) 0 0);
                }










                .site-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
                    gap: 12px;
                }

                .site-tile {
                    position: relative;
                    display: flex;
                    aspect-ratio: 1;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    width: 100%;
                    padding: 16px;
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    background: var(--card);
                    color: var(--muted);
                    font-family: inherit;
                    font-size: 13px;
                    font-weight: 600;
                    text-align: center;
                    text-decoration: none;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                }

                .site-tile::after {
                    position: absolute;
                    top: 8px;
                    right: 12px;
                    content: attr(data-mark);
                    font-size: 14px;
                }

                .site-tile img {
                    width: 56px;
                    height: 56px;
                    object-fit: contain;
                    transition: transform 0.25s;
                }

                .site-tile:hover {
                    border-color: var(--accent);
                    color: var(--text);
                }

                .site-tile:hover img {
                    transform: scale(1.08);
                }

                .site-tile.is-selected {
                    border-color: var(--accent);
                    color: var(--text);
                }

                .site-tile.is-selected::after {
                    color: var(--accent);
                    content: "✓";
                }

                .dashboard-content .site-tile {
                    color: var(--text);
                }

                .site-tile.is-pending {
                    opacity: 0.5;
                    cursor: default;
                }








                /* stupid bars :( */


                .bottom-bar {
                    position: sticky;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    padding: 16px;
                    border-top: 1px solid var(--border);
                    background: var(--background);
                }

                .button {
                    border-radius: 6px;
                    font-weight: 700;
                }

                .button-primary {
                    padding: 13px 40px;
                    border: 0;
                    background: var(--accent);
                    color: var(--background);
                }

                .button-primary:disabled {
                    cursor: not-allowed;
                    opacity: 0.3;
                }

                .top-bar {
                    position: sticky;
                    top: 0;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 6vw;
                    border-bottom: 1px solid var(--border);
                    background: var(--background);
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--text);
                    font-size: 17px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .brand img {
                    width: 32px;
                }

                .button-ghost {
                    padding: 8px 16px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--muted);
                    font-size: 13px;
                    transition: border-color 0.2s, color 0.2s;
                }

                .button-ghost:hover {
                    border-color: var(--accent);
                    color: var(--accent);
                }

                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    padding: 70px 20px;
                    color: var(--muted);
                }












                .drawer-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 5;
                    visibility: hidden;
                    border: 0;
                    background: rgba(0, 0, 0, 0.6);
                    opacity: 0;
                }

                .settings-drawer {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 6;
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    width: min(380px, 92vw);
                    padding: 24px;
                    overflow-y: auto;
                    border-left: 1px solid var(--border);
                    background: var(--card);
                    visibility: hidden;
                }

                .drawer-heading {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 17px;
                }

                .drawer-heading h2 {
                    font-size: inherit;
                    letter-spacing: normal;
                }

                .settings-section h3 {
                    margin-bottom: 12px;
                    color: var(--muted);
                    font-size: 13px;
                    font-weight: 600;
                }






                .theme-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 12px;
                }

                .theme-swatch {
                    aspect-ratio: 1;
                    border: 0;
                    border-radius: 6px;
                }

                .theme-swatch.is-active {
                    outline: 2px solid var(--text);
                    outline-offset: 3px;
                }






                .site-setting {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 0;
                    border-bottom: 1px solid var(--border);
                    cursor: pointer;
                }

                .site-setting img {
                    width: 28px;
                }

                .site-setting span {
                    flex: 1;
                }

                .site-setting input {
                    width: 18px;
                    height: 18px;
                    accent-color: var(--accent);
                }

/* Extension version: native browser animations replace the remote GSAP script. */
@property --background { syntax: "<color>"; inherits: true; initial-value: #0e1726; }
@property --card { syntax: "<color>"; inherits: true; initial-value: #16233a; }
@property --accent { syntax: "<color>"; inherits: true; initial-value: #f2c14e; }

:root {
    transition: --background 0.5s ease, --card 0.5s ease, --accent 0.5s ease;
}

.screen {
    opacity:  0;
    pointer-events: none;
    transform: translateY(8px);
}

.screen.is-active {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.logo-tip {
    left: 50%;
    transform: translate(-50%, 8px);
    opacity: 0;
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.logo:hover .logo-tip {
    transform: translate(-50%, 0);
    opacity: 1;
}

.drawer-backdrop {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.drawer-backdrop.is-open {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
}

.settings-drawer {
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.4s ease;
}

.settings-drawer.is-open {
    visibility: visible;
    transform: translateX(0);
}

.hold-fill {
    will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
    }
}

    </style>
</head>
<body><div class="background" aria-hidden="true"></div>

            <main><section class="screen hero" id="hero" aria-hidden="true"><div class="logo"><img src="https://i.ibb.co/FbsvGQ7L/lgo.png" alt="Daily Access logo">
                <div class="logo-tip" id="tip">amazing logo made by my friend</div>
                </div>

                <div class="hero-copy">
                    <span class="eyebrow">made for my crecent project but doesn't make it any less useful in school</span>
                    <h1>daily access+</h1>
                    <p class="subtitle">hand crafted by the students at GIHS</p>
                </div>

                <button class="hold-button" id="hold" type="button"><span class="hold-fill" aria-hidden="true"></span>
                    <span class="hold-label">hold</span>
                    <span class="hold-label hold-label-filled" aria-hidden="true">hold</span>
                </button>
                </section>

                <section class="screen" id="pick" aria-hidden="true"><div class="page-wrap"><header class="section-heading"><h2>choose your destinations</h2>
                            <p>choose your sites with no useless junk if you dont want it</p>
                            <span class="selection-count" id="count" aria-live="polite"></span>
                        </header>

                        <div class="site-grid" id="grid"></div>
                    </div>

                    <footer class="bottom-bar"><button class="button button-primary" id="next" type="button" disabled>continue
                        </button>
                    </footer>
                </section>

                <section class="screen" id="dash" aria-hidden="true"><header class="top-bar"><div class="brand"><img src="https://i.ibb.co/FbsvGQ7L/lgo.png" alt="">
                            <span>daily access+</span>
                        </div>
                        <button class="button button-ghost" id="open" type="button">settings</button>
                    </header>
                    <div class="page-wrap dashboard-content"><header class="section-heading"><h2>sites right here</h2>
                            <p>way better website than GIHS daily access haha</p>
                        </header>

                        <div class="site-grid" id="cards"></div>

                        <div class="empty-state" id="none" hidden>
                            <p>what are you doing, not very slick</p>
                            <button class="button button-primary" id="again" type="button">open settings
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        <button class="drawer-backdrop" id="veil" type="button" aria-label="Close settings"></button>

        <aside class="settings-drawer" id="pane" role="dialog" aria-modal="true" aria-label="Settings" aria-hidden="true"><header class="drawer-heading">
                <h2>settings</h2>
                <button class="button button-ghost" id="shut" type="button">close</button>
            </header>

            <section class="settings-section"><h3>pick theme</h3>
                <div class="theme-grid" id="themes"></div>
            </section>

            <section class="settings-section"><h3>your sites</h3>
                <div id="rows"></div>
            </section>
        </aside>

        </body>
</html>`;

    function initialiseExtensionPage() {
        const parsedPage = new DOMParser().parseFromString(PAGE_HTML, "text/html");
        const root = document.documentElement;
        root.replaceChildren(
            document.importNode(parsedPage.head, true),
            document.importNode(parsedPage.body, true)
        );
        for (const attribute of [...root.attributes]) {
            root.removeAttribute(attribute.name);
        }
        for (const attribute of [...parsedPage.documentElement.attributes]) {
            root.setAttribute(attribute.name, attribute.value);
        }

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const sites = [
        { id: "daymap", label: "Daymap", image: "https://i.ibb.co/zHRsqb0B/Daymap2.png", url: "https://gihs.daymap.net/daymap/student/dayplan.aspx" },
        { id: "classroom", label: "Google Classroom", image: "https://i.ibb.co/sJKrkvsq/Google-Classroom.png", url: "https://classroom.google.com/a/gihs.sa.edu.au" },
        { id: "drive", label: "Google Drive", image: "https://i.ibb.co/1G6src0d/Google-Drive.png", url: "https://drive.google.com/a/gihs.sa.edu.au" },
        { id: "sites", label: "Google Sites", image: "https://i.ibb.co/27MYDJPb/Google-Sites.png", url: "https://sites.google.com" },
        { id: "learner", label: "Learner Profile", image: "https://i.ibb.co/jsqwrCm/Learner-Profile.png", url: "https://app.powerbi.com/groups/me/apps/0d9babca-7f9e-45cb-bd2c-19641bb8ec05" },
        { id: "hub", label: "Learning Hub", image: "https://i.ibb.co/JwNkrrVM/Learning-Hub.png", url: "https://da.gihs.sa.edu.au/library.html" },
        { id: "outlook", label: "Outlook", image: "https://i.ibb.co/4gSWhbXm/Outlook.png", url: "https://outlook.cloud.microsoft/mail/?realm=schools.sa.edu.au#path=/mail" },
        { id: "studentinfo", label: "Student Info", image: "https://i.ibb.co/M5SFZKNW/Student-Info.png", url: "http://learnercouncil.gihs.sa.edu.au/" }
    ];

    const themes = {
        navy: ["#0e1726", "#16233a", "#f2c14e"],
        sand: ["#15130e", "#201d15", "#e8c468"],
        tide: ["#0c1416", "#142126", "#4fd1c5"],
        rose: ["#160b0f", "#231319", "#ff5c85"],
        fern: ["#0d1310", "#16201a", "#6fdc8c"],
        lime: ["#10130a", "#1a2010", "#c9ea4b"],
        sky: ["#0b111a", "#131c2b", "#5aa9ff"],
        plum: ["#130d17", "#1f1626", "#c98ae8"]
    };

    const SELECTED_KEY = "da_selected";
    const THEME_KEY = "da_theme";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionScale = reduceMotion ? 0 : 1;

    function readStorage(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch (error) {
            console.warn("Daily Access+: local storage is unavailable.", error);
            return fallback;
        }
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn("Daily Access+: could not save a setting.", error);
        }
    }

    function getSelectedSites() {
        try {
            const stored = JSON.parse(readStorage(SELECTED_KEY, "[]"));
            const validIds = new Set(sites.map(site => site.id));
            if (!Array.isArray(stored)) return new Set();
            return new Set(stored.filter(id => validIds.has(id)));
        } catch (error) {
            return new Set();
        }
    }

    function saveSelectedSites(selected) {
        writeStorage(SELECTED_KEY, JSON.stringify([...selected]));
    }

    function hasFinishedSetup() {
        return readStorage(SELECTED_KEY) !== null;
    }

    function animate(element, keyframes, options = {}) {
        if (!element || reduceMotion || typeof element.animate !== "function") return null;
        return element.animate(keyframes, {
            duration: options.duration ?? 450,
            delay: options.delay ?? 0,
            easing: options.easing ?? "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: options.fill ?? "both"
        });
    }

    function animateTiles(selector, delay = 0) {
        $$(selector).forEach((element, index) => {
            animate(element, [
                { opacity: 0, transform: "translateY(16px)" },
                { opacity: 1, transform: "translateY(0)" }
            ], { duration: 500, delay: delay * 1000 + index * 50 });
        });
    }

    function changeScreen(currentSelector, nextSelector) {
        const current = $(currentSelector);
        const next = $(nextSelector);
        if (!current || !next || current === next) return;

        current.setAttribute("aria-hidden", "true");
        next.setAttribute("aria-hidden", "false");
        next.classList.add("is-active");

        animate(current, [
            { opacity: 1, transform: "translateY(0)" },
            { opacity: 0, transform: "translateY(-16px)" }
        ], { duration: 350, easing: "ease-in" });

        animate(next, [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" }
        ], { duration: 500, delay: 80 });

        window.setTimeout(() => current.classList.remove("is-active"), reduceMotion ? 0 : 360);
    }

    function applyTheme(themeName, instant = false) {
        const theme = Object.hasOwn(themes, themeName) ? themeName : "navy";
        const [background, card, accent] = themes[theme];
        const root = document.documentElement;

        if (instant) root.style.transition = "none";
        root.style.setProperty("--background", background);
        root.style.setProperty("--card", card);
        root.style.setProperty("--accent", accent);
        if (instant) requestAnimationFrame(() => { root.style.transition = ""; });

        writeStorage(THEME_KEY, theme);

        $$(".theme-swatch").forEach(button => {
            const active = button.dataset.theme === theme;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }

    function createThemeButtons() {
        const container = $("#themes");
        container.replaceChildren();

        Object.entries(themes).forEach(([name, colours]) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "theme-swatch";
            button.dataset.theme = name;
            button.title = name;
            button.setAttribute("aria-label", `${name} theme`);
            button.setAttribute("aria-pressed", "false");
            button.style.backgroundColor = colours[2];
            button.addEventListener("click", () => applyTheme(name));
            container.append(button);
        });
    }

    function createSiteCard(site) {
        const card = document.createElement("a");
        card.className = "site-tile";
        card.dataset.mark = "↗";
        card.href = site.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const image = document.createElement("img");
        image.src = site.image;
        image.alt = "";
        image.loading = "lazy";

        const label = document.createElement("span");
        label.textContent = site.label;
        card.append(image, label);
        return card;
    }

    function renderDashboard(shouldAnimate = false) {
        const selected = getSelectedSites();
        const chosen = sites.filter(site => selected.has(site.id));
        const cards = $("#cards");
        cards.replaceChildren(...chosen.map(createSiteCard));
        cards.hidden = chosen.length === 0;
        $("#none").hidden = chosen.length !== 0;
        if (shouldAnimate && chosen.length) animateTiles("#cards .site-tile", 0.1);
    }

    function renderSiteSettings() {
        const selected = getSelectedSites();
        const rows = $("#rows");
        rows.replaceChildren();

        sites.forEach(site => {
            const label = document.createElement("label");
            label.className = "site-setting";

            const image = document.createElement("img");
            image.src = site.image;
            image.alt = "";
            image.loading = "lazy";

            const name = document.createElement("span");
            name.textContent = site.label;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.dataset.siteId = site.id;
            checkbox.checked = selected.has(site.id);
            checkbox.setAttribute("aria-label", `Show ${site.label}`);

            label.append(image, name, checkbox);
            rows.append(label);
        });
    }

    $("#rows").addEventListener("change", event => {
        const checkbox = event.target;
        if (!(checkbox instanceof HTMLInputElement) || !checkbox.matches("input[type='checkbox'][data-site-id]")) return;

        const selected = getSelectedSites();
        const siteId = checkbox.dataset.siteId;
        if (checkbox.checked) selected.add(siteId);
        else selected.delete(siteId);

        saveSelectedSites(selected);
        renderDashboard();
    });

    function openSettings() {
        $("#veil").classList.add("is-open");
        $("#pane").classList.add("is-open");
        $("#veil").setAttribute("aria-hidden", "false");
        $("#pane").setAttribute("aria-hidden", "false");
        $("#shut").focus();
    }

    function closeSettings() {
        $("#veil").classList.remove("is-open");
        $("#pane").classList.remove("is-open");
        $("#veil").setAttribute("aria-hidden", "true");
        $("#pane").setAttribute("aria-hidden", "true");
    }

    $("#open").addEventListener("click", openSettings);
    $("#again").addEventListener("click", openSettings);
    $("#shut").addEventListener("click", closeSettings);
    $("#veil").addEventListener("click", closeSettings);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeSettings();
    });

    const logo = $(".logo");
    const logoImage = $(".logo img");
    logo.addEventListener("pointerenter", () => {
        animate(logoImage, [
            { transform: "rotate(0deg) scale(1)" },
            { transform: "rotate(4deg) scale(1.06)" }
        ], { duration: 400, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" });
    });
    logo.addEventListener("pointerleave", () => {
        animate(logoImage, [
            { transform: "rotate(4deg) scale(1.06)" },
            { transform: "rotate(0deg) scale(1)" }
        ], { duration: 350 });
    });

    const holdButton = $("#hold");
    const holdLabels = $$(".hold-label", holdButton);
    let isHolding = false;
    let hasEntered = false;
    let holdStartedAt = 0;
    let holdFrame = 0;
    let finishTimer = 0;
    const HOLD_DURATION = 1750;

    function updateHoldText(text) {
        holdLabels.forEach(label => { label.textContent = text; });
    }

    function setHoldProgress(progress) {
        holdButton.style.setProperty("--progress", String(Math.max(0, Math.min(1, progress))));
    }

    function finishHolding() {
        if (hasEntered) return;
        isHolding = false;
        hasEntered = true;
        setHoldProgress(1);
        updateHoldText("cool loading screen");
        finishTimer = window.setTimeout(() => {
            changeScreen("#hero", "#pick");
            animateTiles("#grid .site-tile", 0.2);
        }, reduceMotion ? 0 : 500);
    }

    function tickHold(now) {
        if (!isHolding) return;
        const progress = Math.min(1, (now - holdStartedAt) / HOLD_DURATION);
        setHoldProgress(progress);
        if (progress >= 1) finishHolding();
        else holdFrame = requestAnimationFrame(tickHold);
    }

    function startHolding(event) {
        if (hasEntered || isHolding || event.button > 0) return;
        event.preventDefault();
        isHolding = true;
        holdStartedAt = performance.now();
        updateHoldText("embrace for the better");
        holdFrame = requestAnimationFrame(tickHold);
    }

    function stopHolding(message = "hold") {
        if (hasEntered || !isHolding) return;
        isHolding = false;
        cancelAnimationFrame(holdFrame);
        setHoldProgress(0);
        updateHoldText(message);
    }

    holdButton.addEventListener("pointerdown", startHolding);
    holdButton.addEventListener("pointerup", () => stopHolding("not hard to hold for 2 seconds btw"));
    holdButton.addEventListener("pointerleave", () => stopHolding("hold"));
    holdButton.addEventListener("pointercancel", () => stopHolding("hold"));
    holdButton.addEventListener("contextmenu", event => event.preventDefault());

    const wantedSites = getSelectedSites();

    function updateSelectionCount() {
        $("#count").textContent = `${wantedSites.size} selected`;
        $("#next").disabled = wantedSites.size === 0;
    }

    function renderSitePicker() {
        const grid = $("#grid");
        grid.replaceChildren();

        sites.forEach(site => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "site-tile";
            button.dataset.siteId = site.id;
            button.dataset.mark = "+";
            button.classList.toggle("is-selected", wantedSites.has(site.id));
            button.setAttribute("aria-pressed", String(wantedSites.has(site.id)));

            const image = document.createElement("img");
            image.src = site.image;
            image.alt = "";
            image.loading = "lazy";

            const label = document.createElement("span");
            label.textContent = site.label;
            button.append(image, label);
            grid.append(button);
        });
    }

    $("#grid").addEventListener("click", event => {
        const tile = event.target.closest(".site-tile[data-site-id]");
        if (!tile) return;

        const siteId = tile.dataset.siteId;
        const selectedNow = !wantedSites.has(siteId);
        if (selectedNow) wantedSites.add(siteId);
        else wantedSites.delete(siteId);

        tile.classList.toggle("is-selected", selectedNow);
        tile.setAttribute("aria-pressed", String(selectedNow));
        updateSelectionCount();

        animate(tile, [
            { transform: "scale(0.95)" },
            { transform: "scale(1)" }
        ], { duration: 350, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" });
    });

    $("#next").addEventListener("click", () => {
        saveSelectedSites(wantedSites);
        renderDashboard(true);
        renderSiteSettings();
        changeScreen("#pick", "#dash");
    });

    function startApp() {
        createThemeButtons();
        renderSitePicker();
        renderSiteSettings();
        updateSelectionCount();
        applyTheme(readStorage(THEME_KEY, "navy"), true);

        if (hasFinishedSetup()) {
            $("#dash").setAttribute("aria-hidden", "false");
            $("#dash").classList.add("is-active");
            renderDashboard(true);
        } else {
            $("#hero").setAttribute("aria-hidden", "false");
            $("#hero").classList.add("is-active");
            animate($("#hero"), [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" }
            ], { duration: 700, delay: 80 });
        }
    }

    startApp();
    }
    function hideOriginalPage() {
        if (!document.documentElement) return false;
        document.documentElement.style.setProperty("visibility", "hidden", "important");
        return true;
    }

    let rootObserver = null;
    if (!hideOriginalPage()) {
        rootObserver = new MutationObserver(() => {
            if (hideOriginalPage()) {
                rootObserver.disconnect();
                rootObserver = null;
            }
        });
        rootObserver.observe(document, { childList: true });
    }

    const runReplacement = () => {
        if (rootObserver) {
            rootObserver.disconnect();
            rootObserver = null;
        }
        initialiseExtensionPage();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runReplacement, { once: true });
    } else {
        runReplacement();
    }
})();
