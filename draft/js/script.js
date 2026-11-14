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
        button.setAttribute("aria-label", `${name} theme`);
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
        checkbox.setAttribute("aria-label", `Show ${site.label}`);

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
    $("#count").textContent = `${wantedSites.size} selected`;
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