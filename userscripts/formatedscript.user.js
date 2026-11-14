// i formatted this using beautifier.io

// ==UserScript==
// @name         Daily Access 2
// @namespace    Daily Access 2
// @version      1.0
// @description  A better daily access for GIHS students
// @match        https://da.gihs.sa.edu.au/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    document.open();

    document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#0e1726">
            <link rel="icon" type="image/png" href="https://i.ibb.co/FbsvGQ7L/lgo.png">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>

            <title>Daily Access 2</title>

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
            </style>

            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    //uhh idk much abt java script so ig i have to learn a lot for this


                    const $ = (selector) => document.querySelector(selector);


                    // why on earth does every language have different comment ways, like MAKE IT UNIVERSALL

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


                    // local storage, daily access gihs could NEVER


                    function getSelectedSites() {
                        try {
                            const savedSites = JSON.parse(localStorage.getItem(SELECTED_KEY) || "[]");
                            const validIds = new Set(sites.map((site) => site.id));

                            if (!Array.isArray(savedSites)) {
                                return new Set();
                            }

                            return new Set(savedSites.filter((id) => validIds.has(id)));
                        } catch (error) {
                            return new Set();
                        }
                    }

                    function saveSelectedSites(selectedSites) {
                        localStorage.setItem(SELECTED_KEY, JSON.stringify([...selectedSites]));
                    }

                    function hasFinishedSetup() {
                        return localStorage.getItem(SELECTED_KEY) !== null;
                    }

                    // #animation lover


                    function changeScreen(currentScreen, nextScreen) {
                        $(currentScreen).setAttribute("aria-hidden", "true");
                        $(nextScreen).setAttribute("aria-hidden", "false");

                        return gsap.timeline()
                            .to(currentScreen, {
                                autoAlpha: 0,
                                y: -16,
                                duration: 0.35,
                                ease: "power2.in"
                            })
                            .fromTo(nextScreen,
                                { autoAlpha: 0, y: 16 },
                                {
                                    autoAlpha: 1,
                                    y: 0,
                                    duration: 0.5,
                                    ease: "power3.out"
                                }
                            );
                    }

                    function animateTiles(selector, delay = 0) {
                        gsap.from(selector, {
                            y: 16,
                            autoAlpha: 0,
                            stagger: 0.05,
                            duration: 0.5,
                            delay,
                            ease: "power3.out"
                        });
                    }


                    // THEMES


                    function applyTheme(themeName, instant = false) {
                        const theme = themes[themeName] ? themeName : "navy";
                        const [background, card, accent] = themes[theme];
                        const root = document.documentElement;
                        const themeColours = {
                            "--background": background,
                            "--card": card,
                            "--accent": accent
                        };

                        if (instant) {
                            gsap.set(root, themeColours);
                        } else {
                            gsap.to(root, {
                                ...themeColours,
                                duration: 0.5
                            });
                        }

                        localStorage.setItem(THEME_KEY, theme);

                        document.querySelectorAll(".theme-swatch").forEach((button) => {
                            button.classList.toggle("is-active", button.dataset.theme === theme);
                            button.setAttribute("aria-pressed", String(button.dataset.theme === theme));
                        });
                    }

                    function createThemeButtons() {
                        Object.entries(themes).forEach(([name, colours]) => {
                            const button = document.createElement("button");
                            button.type = "button";
                            button.className = "theme-swatch";
                            button.dataset.theme = name;
                            button.title = name;
                            button.setAttribute("aria-label", \`\${name} theme\`);
                            button.setAttribute("aria-pressed", "false");
                            button.style.backgroundColor = colours[2];
                            button.addEventListener("click", () => applyTheme(name));

                            $("#themes").append(button);
                        });
                    }








                    function createSiteCard(site) {
                        const card = site.url
                            ? document.createElement("a")
                            : document.createElement("div");

                        card.className = "site-tile";
                        card.dataset.mark = site.url ? "↗" : "";

                        if (site.url) {
                            card.href = site.url;
                            card.target = "_blank";
                            card.rel = "noopener noreferrer";
                        } else {
                            card.classList.add("is-pending");
                            card.title = "link coming soon";
                        }

                        const image = document.createElement("img");
                        image.src = site.image;
                        image.alt = "";

                        const label = document.createElement("span");
                        label.textContent = site.label;

                        card.append(image, label);
                        return card;
                    }

                    function renderDashboard(animate = false) {
                        const selectedSites = getSelectedSites();
                        const chosenSites = sites.filter((site) => selectedSites.has(site.id));
                        const cards = $("#cards");

                        cards.replaceChildren(...chosenSites.map(createSiteCard));
                        cards.hidden = chosenSites.length === 0;
                        $("#none").hidden = chosenSites.length !== 0;

                        if (animate && chosenSites.length) {
                            animateTiles("#cards .site-tile", 0.3);
                        }
                    }







                    function renderSiteSettings() {
                        const selectedSites = getSelectedSites();
                        const rows = $("#rows");

                        rows.replaceChildren();

                        sites.forEach((site) => {
                            const label = document.createElement("label");
                            label.className = "site-setting";

                            const image = document.createElement("img");
                            image.src = site.image;
                            image.alt = "";

                            const name = document.createElement("span");
                            name.textContent = site.label;

                            const checkbox = document.createElement("input");
                            checkbox.type = "checkbox";
                            checkbox.dataset.siteId = site.id;
                            checkbox.checked = selectedSites.has(site.id);
                            checkbox.setAttribute("aria-label", \`Show \${site.label}\`);

                            label.append(image, name, checkbox);
                            rows.append(label);
                        });
                    }

                    $("#rows").addEventListener("change", (event) => {
                        const checkbox = event.target;

                        if (!checkbox.matches("input[type='checkbox'][data-site-id]")) {
                            return;
                        }

                        const selectedSites = getSelectedSites();
                        const siteId = checkbox.dataset.siteId;

                        if (checkbox.checked) {
                            selectedSites.add(siteId);
                        } else {
                            selectedSites.delete(siteId);
                        }

                        saveSelectedSites(selectedSites);
                        renderDashboard();
                    });







                    gsap.set("#pane", { xPercent: 100, autoAlpha: 0 });

                    const settingsDrawer = gsap.timeline({
                        paused: true,
                        defaults: {
                            duration: 0.4,
                            ease: "power3.out"
                        }
                    });

                    settingsDrawer
                        .to("#veil", { autoAlpha: 1 }, 0)
                        .to("#pane", { xPercent: 0, autoAlpha: 1 }, 0);

                    function openSettings() {
                        $("#pane").setAttribute("aria-hidden", "false");
                        settingsDrawer.play();
                    }

                    function closeSettings() {
                        $("#pane").setAttribute("aria-hidden", "true");
                        settingsDrawer.reverse();
                    }

                    $("#open").addEventListener("click", openSettings);
                    $("#again").addEventListener("click", openSettings);
                    $("#shut").addEventListener("click", closeSettings);
                    $("#veil").addEventListener("click", closeSettings);

                    document.addEventListener("keydown", (event) => {
                        if (event.key === "Escape") {
                            closeSettings();
                        }
                    });






                    const logo = $(".logo");

                    gsap.set("#tip", {
                        xPercent: -50,
                        y: 8,
                        autoAlpha: 0
                    });

                    function animateLogo(isHovered) {
                        gsap.to(".logo img", {
                            rotate: isHovered ? 4 : 0,
                            scale: isHovered ? 1.06 : 1,
                            duration: 0.4,
                            ease: "back.out(2)"
                        });

                        gsap.to("#tip", {
                            autoAlpha: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 8,
                            duration: 0.3
                        });
                    }

                    logo.addEventListener("pointerenter", () => animateLogo(true));
                    logo.addEventListener("pointerleave", () => animateLogo(false));









                    const holdButton = $("#hold");
                    const holdLabels = holdButton.querySelectorAll(".hold-label");

                    let isHolding = false;
                    let hasEntered = false;

                    function updateHoldText(text) {
                        holdLabels.forEach((label) => {
                            label.textContent = text;
                        });
                    }

                    function finishHolding() {
                        hasEntered = true;
                        updateHoldText("cool loading screen");

                        gsap.delayedCall(0.5, () => {
                            changeScreen("#hero", "#pick");
                            animateTiles("#grid .site-tile", 0.45);
                        });
                    }

                    function startHolding() {
                        if (hasEntered || isHolding) {
                            return;
                        }

                        isHolding = true;
                        updateHoldText("embrace for the better");

                        gsap.to(holdButton, {
                            "--progress": 1,
                            duration: 1.75,
                            ease: "none",
                            onComplete: finishHolding
                        });
                    }

                    function stopHolding(message) {
                        if (hasEntered || !isHolding) {
                            return;
                        }

                        isHolding = false;
                        updateHoldText(message);

                        gsap.to(holdButton, {
                            "--progress": 0,
                            duration: 0.35,
                            overwrite: true
                        });
                    }

                    holdButton.addEventListener("pointerdown", startHolding);
                    holdButton.addEventListener("pointerup", () => {
                        stopHolding("not hard to hold for 2 seconds btw");
                    });
                    holdButton.addEventListener("pointerleave", () => stopHolding("hold"));
                    holdButton.addEventListener("pointercancel", () => stopHolding("hold"));
                    holdButton.addEventListener("contextmenu", (event) => event.preventDefault());









                    const wantedSites = getSelectedSites();

                    function updateSelectionCount() {
                        $("#count").textContent = \`\${wantedSites.size} selected\`;
                        $("#next").disabled = wantedSites.size === 0;
                    }

                    function renderSitePicker() {
                        const grid = $("#grid");
                        grid.replaceChildren();

                        sites.forEach((site) => {
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

                            const label = document.createElement("span");
                            label.textContent = site.label;

                            button.append(image, label);
                            grid.append(button);
                        });
                    }

                    $("#grid").addEventListener("click", (event) => {
                        const tile = event.target.closest(".site-tile");

                        if (!tile) {
                            return;
                        }

                        const siteId = tile.dataset.siteId;
                        const isSelected = wantedSites.has(siteId);

                        if (isSelected) {
                            wantedSites.delete(siteId);
                        } else {
                            wantedSites.add(siteId);
                        }

                        tile.classList.toggle("is-selected", !isSelected);
                        tile.setAttribute("aria-pressed", String(!isSelected));
                        updateSelectionCount();

                        gsap.fromTo(tile,
                            { scale: 0.95 },
                            { scale: 1, duration: 0.4, ease: "back.out(3)" }
                        );
                    });

                    $("#next").addEventListener("click", () => {
                        saveSelectedSites(wantedSites);
                        renderDashboard(true);
                        renderSiteSettings();
                        changeScreen("#pick", "#dash");
                    });









                    function startApp() {
                        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                            gsap.globalTimeline.timeScale(20);
                        }

                        createThemeButtons();
                        renderSitePicker();
                        renderSiteSettings();
                        updateSelectionCount();
                        applyTheme(localStorage.getItem(THEME_KEY), true);

                        if (hasFinishedSetup()) {
                            $("#dash").setAttribute("aria-hidden", "false");
                            gsap.set("#dash", { autoAlpha: 1 });
                            renderDashboard(true);
                        } else {
                            $("#hero").setAttribute("aria-hidden", "false");
                            gsap.set("#hero", { autoAlpha: 1 });
                            gsap.from("#hero > *", {
                                y: 24,
                                autoAlpha: 0,
                                stagger: 0.12,
                                duration: 0.7,
                                ease: "power3.out"
                            });
                        }
                    }

                    startApp();
                });
            <\/script>
        </head>

        <body><div class="background" aria-hidden="true"></div>

            <main><section class="screen hero" id="hero" aria-hidden="true"><div class="logo"><img src="https://i.ibb.co/FbsvGQ7L/lgo.png" alt="Daily Access logo">
                <div class="logo-tip" id="tip">amazing logo made by my friend</div>
                </div>

                <div class="hero-copy">
                    <span class="eyebrow">made for my crecent project but doesn't make it any less useful in school</span>
                    <h1>daily access 2</h1>
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
                            <span>daily access 2</span>
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

        </html>`);

    document.close();
})();