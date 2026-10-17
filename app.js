// ==========================================================================
// 3. DATOS EXACTOS DE LAS 13 FOTOS (TEXTUALMENTE SEGÚN ESPECIFICACIÓN)
// ==========================================================================
const photosData = [
  {
    id: 1,
    imageUrl: "/fotos/1.jpg",
    sector: "Sector 1: Los Inicios en Boxes",
    lapTitle: "Vuelta 1/13 - Cumpleaños de 12 y ADN Tricolor",
    quote: "Festejando los 12 con la torta del glorioso Club Nacional de Football. Regla número uno desde chiquitos: el único rojo permitido en esta mesa es el del Decano; donde aparezca un comunista lo sacamos corriendo.",
    badges: ["Edad: 12 Años", "Corazón: 100% Bolso", "Comunistas: 0% Tolerancia"]
  },
  {
    id: 2,
    imageUrl: "/fotos/2.jpg",
    sector: "Sector 1: Los Inicios en Boxes",
    lapTitle: "Vuelta 2/13 - Vigilancia en el Pasillo",
    quote: "La cara de desconfiado en el espejo, como terrateniente cuidando que ningún zurdo ni sindicalista le pise el alambrado de la estancia. Ya desde pendejos tirando facha.",
    badges: ["Aerodinámica: En desarrollo", "Mirada: Anti-impuestos", "Chasis: Original"]
  },
  {
    id: 3,
    imageUrl: "/fotos/3.jpg",
    sector: "Sector 1: Los Inicios en Boxes",
    lapTitle: "Vuelta 3/13 - Primeras Giras Nocturnas",
    quote: "Ranchando en la plaza de campera inflada cuando el presupuesto no daba ni para cambiar neumáticos. Todavía andábamos con un solo caballo de fuerza, pero ya amagábamos con romper la noche.",
    badges: ["Tracción: A sangre", "Presupuesto: Austero", "Pista: La Plaza"]
  },
  {
    id: 4,
    imageUrl: "/fotos/4.jpg",
    sector: "Sector 1: Los Inicios en Boxes",
    lapTitle: "Vuelta 4/13 - Operaciones Especiales",
    quote: "Uno encapuchado como para ir a cobrar una deuda y vos señalando la tele. Las juntas peligrosas antes de que descubrieras las camisas planchadas y el libre mercado.",
    badges: ["Sigilo: Dudoso", "Estrategia: Improvisada", "Amistad: De fierro"]
  },
  {
    id: 5,
    imageUrl: "/fotos/5.jpg",
    sector: "Sector 2: Campo, Asados y Capitalismo",
    lapTitle: "Vuelta 5/13 - La Mesa de Directorio",
    quote: "Asado, mate, Coca y tres cabezas de chancho en el porta-cuchillos. Más capitalista y campero que esta mesa no se consigue: el que no produce ni agarra la pala, acá no come.",
    badges: ["Combustible: Asado y Mate", "Ideología: Derecha Pura", "Tracción: Caballo criollo"]
  },
  {
    id: 6,
    imageUrl: "/fotos/6.jpg",
    sector: "Sector 2: Campo, Asados y Capitalismo",
    lapTitle: "Vuelta 6/13 - La Escudería en el Pasto",
    quote: "Fútbol, sol y la banda completa en la cancha. De domar potros en el campo a tirar paredes con los pibes: el equipo titular que no se vende ni por todo el oro de la FIA.",
    badges: ["Terreno: Césped", "Equipo: Titular indiscutido", "Estado: Pleno"]
  },
  {
    id: 7,
    imageUrl: "/fotos/7.jpg",
    sector: "Sector 2: Campo, Asados y Capitalismo",
    lapTitle: "Vuelta 7/13 - Boxes antes de la Qualy",
    quote: "Tirado en la cama haciendo cuernitos mientras el compañero de escudería clava lentes de sol adentro del cuarto. La calma chicha antes de ponerse la camisa de salir a hacer desastres.",
    badges: ["Modo: Pre-Qualy", "Descanso: Estratégico", "Facha: Cargando al 100%"]
  },
  {
    id: 8,
    imageUrl: "/fotos/8.jpg",
    sector: "Sector 2: Campo, Asados y Capitalismo",
    lapTitle: "Vuelta 8/13 - Despliegue de Camisas",
    quote: "Acá apareció el verdadero uniforme: rodeado de camisas a rayas y celestes con vaso en mano. Con esa pinta tenés más cara de ir a privatizar empresas públicas a las 3 AM que de ir a bailar.",
    badges: ["Outfit: Camisa Privatizadora", "Estilo: Gentleman Driver", "Hígado: Calentando"]
  },
  {
    id: 9,
    imageUrl: "/fotos/9.jpg",
    sector: "Sector 3: GP Nocturno y Sin Frenos",
    lapTitle: "Vuelta 9/13 - El Ascensor de la Muerte",
    quote: "Tu camisa celeste impecable, mi camisa a rayas y una botella de Coca cortada al medio llena de veneno en el ascensor. La dualidad perfecta entre un señor de campo y dos delincuentes yendo al baile.",
    badges: ["Vaso: Botella cortada", "Camisa: Impecable", "Destino: El barro mismo"]
  },
  {
    id: 10,
    imageUrl: "/fotos/10.jpg",
    sector: "Sector 3: GP Nocturno y Sin Frenos",
    lapTitle: "Vuelta 10/13 - Con el DRS Abierto",
    quote: "Copita de cóctel en mano y bien rodeados en la pista. En esta dupla los triunfos no se redistribuyen como quieren los zurdos, pero el trabajo de wingman en la barra se cumple a rajatabla.",
    badges: ["DRS: Activado", "Wingman: 10/10", "Efectividad: En el podio"]
  },
  {
    id: 11,
    imageUrl: "/fotos/11.jpg",
    sector: "Sector 3: GP Nocturno y Sin Frenos",
    lapTitle: "Vuelta 11/13 - Bandera Amarilla y Espuma",
    quote: "Gorrito naranja, nieve artificial y la telemetría completamente rota. A esta hora de la noche tu criterio tiene menos frenos que un Williams sin presupuesto en las calles de Mónaco.",
    badges: ["Frenos: Cortados", "Criterio: Ninguno", "Control de Tracción: Off"]
  },
  {
    id: 12,
    imageUrl: "/fotos/12.jpg",
    sector: "Sector 3: GP Nocturno y Sin Frenos",
    lapTitle: "Vuelta 12/13 - Parada Técnica en la Boutique",
    quote: "Tres caras de desvelados posando adelante de una vidriera llena de consoladores y un oso sadomasoquista en la Boutique Erótica. Ni Briatore en sus mejores épocas de F1 derrapó tanto en una noche.",
    badges: ["Ubicación: Boutique Erótica", "Derrape: Histórico", "Vergüenza: No se presentó"]
  },
  {
    id: 13,
    imageUrl: "/fotos/13.jpg",
    sector: "Final: Bandera a Cuadros",
    lapTitle: "Vuelta 13/13 - 06:52 AM en Mega Navidad",
    quote: "25 de diciembre, 6:52 de la mañana, sol de frente y vos cerrando el baile con la camisa a rayas abierta y pantalón blanco. ¡Feliz cumpleaños, hermano! Por toda una vida más saliendo de caravana y yendo al frente.",
    badges: ["Hora: 06:52 AM", "Camisa a rayas: Sobrevivió", "Contrato: De por vida"]
  }
];

// ==========================================================================
// METADATOS EXTRA DE TELEMETRÍA F1 POR VUELTA (PARA EL HUD)
// ==========================================================================
const lapTelemetryMeta = [
  { lapTime: "01:18.899", speed: "242 KM/H", gear: "5", tyre: "S", tyreLabel: "SOFT", drs: "ENABLED", rpm: 11200, delta: "-0.412s" },
  { lapTime: "01:17.402", speed: "265 KM/H", gear: "6", tyre: "S", tyreLabel: "SOFT", drs: "ENABLED", rpm: 11500, delta: "-0.580s" },
  { lapTime: "01:16.910", speed: "278 KM/H", gear: "6", tyre: "M", tyreLabel: "MEDIUM", drs: "ENABLED", rpm: 11800, delta: "-0.719s" },
  { lapTime: "01:15.640", speed: "291 KM/H", gear: "7", tyre: "M", tyreLabel: "MEDIUM", drs: "ENABLED", rpm: 12100, delta: "-0.894s" },
  { lapTime: "01:14.210", speed: "304 KM/H", gear: "7", tyre: "H", tyreLabel: "HARD", drs: "ENABLED", rpm: 12350, delta: "-1.105s" },
  { lapTime: "01:13.884", speed: "312 KM/H", gear: "7", tyre: "H", tyreLabel: "HARD", drs: "ENABLED", rpm: 12600, delta: "-1.340s" },
  { lapTime: "01:13.105", speed: "319 KM/H", gear: "8", tyre: "S", tyreLabel: "SOFT", drs: "ENABLED", rpm: 12800, delta: "-1.522s" },
  { lapTime: "01:12.450", speed: "328 KM/H", gear: "8", tyre: "S", tyreLabel: "PINSTRIPE", drs: "ENABLED", rpm: 13100, delta: "-1.890s" },
  { lapTime: "01:11.902", speed: "334 KM/H", gear: "8", tyre: "S", tyreLabel: "SOFT", drs: "ACTIVE", rpm: 13400, delta: "-2.140s" },
  { lapTime: "01:10.777", speed: "346 KM/H", gear: "8", tyre: "S", tyreLabel: "QUALY", drs: "OPEN MAX", rpm: 14100, delta: "-2.785s" },
  { lapTime: "01:11.333", speed: "339 KM/H", gear: "8", tyre: "W", tyreLabel: "ESPUMA", drs: "ENABLED", rpm: 13850, delta: "-2.410s" },
  { lapTime: "01:10.112", speed: "351 KM/H", gear: "8", tyre: "S", tyreLabel: "ULTRA", drs: "ACTIVE", rpm: 14400, delta: "-3.120s" },
  { lapTime: "01:06.520", speed: "362 KM/H", gear: "8", tyre: "S", tyreLabel: "RECORD", drs: "FULL SEND", rpm: 15000, delta: "PURPLE LAP" }
];

// Helper para resolver la ruta de la foto tanto en servidor HTTP (/fotos/1.jpg)
// como si se abre el archivo directamente o en subcarpeta (./fotos/1.jpg o ./1.jpg)
function resolveImageUrl(imageUrl, id) {
  if (imageUrl && imageUrl.startsWith("/")) {
    return `.${imageUrl}`;
  }
  return `./fotos/${id}.jpg`;
}

function handleImageError(imgElement, id) {
  const step = Number(imgElement.dataset.fallbackStep || "0");
  if (step === 0) {
    imgElement.dataset.fallbackStep = "1";
    imgElement.src = `./fotos/${id}.jpg`;
  } else if (step === 1) {
    imgElement.dataset.fallbackStep = "2";
    imgElement.src = `${id}.jpg`;
  }
}
window.handleImageError = handleImageError;

// ==========================================================================
// SINTETIZADOR DE SONIDO F1 (WEB AUDIO API - OPCIONAL Y SIN ARCHIVOS EXTERNOS)
// ==========================================================================
class F1TelemetrySound {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playBeep(freq = 880, duration = 0.14, type = "sine", gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (_) {
      // Ignore audio errors when autoplay is blocked
    }
  }

  playLaunchSequence() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Acorde de largada F1 + subida de RPM
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.45);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } catch (_) {}
  }

  playShiftBeep() {
    this.playBeep(1046.5, 0.06, "triangle", 0.045);
  }

  playCheckeredChord() {
    if (!this.enabled) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.28, "triangle", 0.07), i * 85);
    });
  }
}

const f1Sound = new F1TelemetrySound();

// ==========================================================================
// ESTADO GLOBAL DE LA EXPERIENCIA
// ==========================================================================
const state = {
  currentView: "splash", // 'splash' | 'telemetry' | 'podium'
  currentLapIndex: 0,    // 0..12
  slideDirection: "right",
  isLaunching: false,
  lightsCount: 0,
  lightsInterval: null,
  liveClockInterval: null,
  elapsedMs: 0,
  bentoOpen: false,
  lightboxPhoto: null
};

// ==========================================================================
// 1. SPLASH SCREEN: SEMÁFORO DE LARGADA F1
// ==========================================================================
function startF1LightsSequence() {
  const bulbs = document.querySelectorAll("[data-light-column]");
  const statusEl = document.getElementById("gantry-status-text");
  const launchBtn = document.getElementById("btn-launch-telemetry");

  state.lightsCount = 0;
  bulbs.forEach((col) => {
    col.querySelectorAll(".f1-bulb").forEach((b) => {
      b.classList.remove("is-lit", "lights-out");
    });
  });

  if (state.lightsInterval) clearInterval(state.lightsInterval);

  state.lightsInterval = setInterval(() => {
    if (state.isLaunching) return;
    if (state.lightsCount < 5) {
      const col = document.querySelector(`[data-light-column="${state.lightsCount + 1}"]`);
      if (col) {
        col.querySelectorAll(".f1-bulb").forEach((b) => b.classList.add("is-lit"));
      }
      state.lightsCount++;
      f1Sound.playBeep(440, 0.14, "sine", 0.06);
      if (statusEl) {
        statusEl.textContent =
          state.lightsCount < 5
            ? `SECUENCIA FIA EN CURSO: ${state.lightsCount}/5 LUCES ROJAS`
            : `5 LUCES ROJAS ENCENDIDAS • LISTO PARA LARGAR`;
      }
      if (state.lightsCount === 5 && launchBtn) {
        launchBtn.classList.add("ring-2", "ring-white/80");
      }
    } else {
      clearInterval(state.lightsInterval);
    }
  }, 620);
}

function triggerLightsOutAndStart() {
  if (state.isLaunching) return;
  state.isLaunching = true;
  if (state.lightsInterval) clearInterval(state.lightsInterval);

  // Asegurar que las 5 luces se apaguen al instante ("LIGHTS OUT AND AWAY WE GO!")
  const allBulbs = document.querySelectorAll(".f1-bulb");
  allBulbs.forEach((b) => {
    b.classList.remove("is-lit");
    b.classList.add("lights-out");
  });

  const statusEl = document.getElementById("gantry-status-text");
  if (statusEl) {
    statusEl.innerHTML = `<span class="text-[#00f59b] font-bold">LIGHTS OUT AND AWAY WE GO! • LARGADA OFICIAL</span>`;
  }

  f1Sound.playLaunchSequence();

  const splashEl = document.getElementById("splash-screen");
  const telemetryEl = document.getElementById("telemetry-screen");

  setTimeout(() => {
    splashEl.classList.add("opacity-0", "scale-105", "pointer-events-none");
    setTimeout(() => {
      splashEl.classList.add("hidden");
      telemetryEl.classList.remove("hidden");
      requestAnimationFrame(() => {
        telemetryEl.classList.remove("opacity-0");
      });
      state.currentView = "telemetry";
      renderCurrentLap("right");
      startLiveTelemetryClock();
      preloadAdjacentImages(0);
    }, 420);
  }, 380);
}

// ==========================================================================
// 2. VISOR DE TELEMETRÍA ("LAS 13 VUELTAS")
// ==========================================================================
function getSectorIndexForLap(lapNumber) {
  // Sector 1: Vueltas 1-4 | Sector 2: Vueltas 5-8 | Sector 3 + Final: Vueltas 9-13
  if (lapNumber <= 4) return 1;
  if (lapNumber <= 8) return 2;
  return 3;
}

function renderSectorProgressBar(currentIndex) {
  const currentPhoto = photosData[currentIndex];
  const lapNumber = currentPhoto.id;
  const activeSector = getSectorIndexForLap(lapNumber);

  // Actualizar etiquetas de los 3 sectores
  const sectorConfigs = [
    { id: 1, range: [1, 2, 3, 4], name: "S1 • INICIOS EN BOXES" },
    { id: 2, range: [5, 6, 7, 8], name: "S2 • CAMPO Y CAPITALISMO" },
    { id: 3, range: [9, 10, 11, 12, 13], name: "S3 • GP NOCTURNO Y FINAL" }
  ];

  const container = document.getElementById("sectors-progress-grid");
  if (!container) return;

  container.innerHTML = sectorConfigs
    .map((sec) => {
      const isCurrentSector = activeSector === sec.id;
      const isCompletedSector = activeSector > sec.id;

      const pillsHtml = sec.range
        .map((lapNum) => {
          const idx = lapNum - 1;
          const isCompleted = lapNum < lapNumber;
          const isCurrent = lapNum === lapNumber;

          let barColor = "bg-white/15 hover:bg-white/35";
          if (isCompleted) {
            barColor = "bg-[#0038A8] border border-blue-400/50 shadow-[0_0_8px_rgba(0,56,168,0.8)]";
          } else if (isCurrent) {
            barColor = "bg-[#E63946] border border-white/80 shadow-[0_0_12px_rgba(230,57,70,0.95)]";
          }

          return `
            <button
              type="button"
              onclick="goToLap(${idx})"
              title="Ir a Vuelta ${lapNum}/13"
              aria-label="Ir a Vuelta ${lapNum}"
              class="group relative flex-1 h-2.5 sm:h-3 rounded-sm transition-all duration-300 ${barColor} focus:outline-none"
            >
              <span class="sr-only">Vuelta ${lapNum}</span>
            </button>
          `;
        })
        .join("");

      const headerBadge = isCurrentSector
        ? "text-white font-bold"
        : isCompletedSector
        ? "text-blue-300"
        : "text-slate-400";

      const sectorStatusDot = isCurrentSector
        ? `<span class="inline-block w-2 h-2 rounded-full bg-[#E63946] animate-ping"></span>`
        : isCompletedSector
        ? `<span class="inline-block w-2 h-2 rounded-full bg-[#00f59b]"></span>`
        : `<span class="inline-block w-2 h-2 rounded-full bg-slate-600"></span>`;

      return `
        <div class="flex flex-col gap-1.5 bg-[#071330]/85 border ${
          isCurrentSector ? "border-white/35 shadow-[0_0_15px_rgba(0,56,168,0.45)]" : "border-white/10"
        } rounded-lg px-2.5 py-1.5 transition-all duration-300">
          <div class="flex items-center justify-between text-[10px] sm:text-xs font-f1 tracking-wider ${headerBadge}">
            <span class="flex items-center gap-1.5 truncate">
              ${sectorStatusDot}
              <span>${sec.name}</span>
            </span>
            <span class="font-mono-telemetry text-[10px] opacity-80">
              ${sec.range[0]}-${sec.range[sec.range.length - 1]}
            </span>
          </div>
          <div class="flex items-center gap-1">
            ${pillsHtml}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderCurrentLap(direction = "right") {
  const index = state.currentLapIndex;
  const photo = photosData[index];
  const meta = lapTelemetryMeta[index] || lapTelemetryMeta[0];
  const resolvedSrc = resolveImageUrl(photo.imageUrl, photo.id);

  // 1. Actualizar Barra Superior HUD
  const lapCounterHud = document.getElementById("hud-lap-counter");
  if (lapCounterHud) {
    lapCounterHud.textContent = `VUELTA ${photo.id}/13`;
  }

  const sectorHud = document.getElementById("hud-sector-label");
  if (sectorHud) {
    sectorHud.textContent = photo.sector.toUpperCase();
  }

  const drsBadgeHud = document.getElementById("hud-drs-badge");
  if (drsBadgeHud) {
    const isSuperDrs = photo.id === 10 || photo.id === 13;
    drsBadgeHud.innerHTML = `
      <span class="w-2 h-2 rounded-full ${isSuperDrs ? "bg-[#00f59b] animate-ping" : "bg-[#00f59b]"}"></span>
      <span>DRS ${meta.drs}</span>
    `;
  }

  const lapTimeHud = document.getElementById("hud-lap-time");
  if (lapTimeHud) lapTimeHud.textContent = meta.lapTime;

  const speedHud = document.getElementById("hud-speed");
  if (speedHud) speedHud.textContent = meta.speed;

  const gearHud = document.getElementById("hud-gear");
  if (gearHud) gearHud.textContent = `G${meta.gear}`;

  const tyreHud = document.getElementById("hud-tyre");
  if (tyreHud) {
    const tyreColors = {
      S: "border-[#E63946] text-[#E63946]",
      M: "border-amber-400 text-amber-300",
      H: "border-white text-white",
      W: "border-sky-400 text-sky-300"
    };
    tyreHud.className = `w-6 h-6 rounded-full border-2 flex items-center justify-center font-f1 font-bold text-xs ${
      tyreColors[meta.tyre] || tyreColors.S
    }`;
    tyreHud.textContent = meta.tyre;
  }

  // 2. Renderizar barra de 3 Sectores
  renderSectorProgressBar(index);

  // 3. Actualizar el contenedor de la Imagen (Tratamiento Crítico: object-contain + blur-xl opacity-50)
  const stageWrapper = document.getElementById("photo-stage-wrapper");
  if (stageWrapper) {
    const animClass = direction === "left" ? "animate-slide-left" : "animate-slide-right";
    stageWrapper.innerHTML = `
      <div class="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#030917] shadow-2xl ${animClass}">
        <!-- Fondo desenfocado con la misma imagen ampliada (blur-xl opacity-50) -->
        <img
          src="${resolvedSrc}"
          onerror="handleImageError(this, ${photo.id})"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50 pointer-events-none select-none"
        />

        <!-- Viñeteado tricolor/oscuro para contraste de telemetría -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#040d21]/90 via-transparent to-[#040d21]/45 pointer-events-none"></div>

        <!-- Líneas de mira de telemetría F1 en las esquinas -->
        <div class="absolute top-3 left-3 z-20 flex items-center gap-2 bg-[#040d21]/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
          <span class="w-2 h-2 rounded-full bg-[#E63946]"></span>
          <span class="font-mono-telemetry text-[11px] text-white/90 tracking-wider">CAM #${String(photo.id).padStart(2, "0")} • PADDOCK FEED</span>
        </div>

        <button
          type="button"
          onclick="openLightbox(${index})"
          title="Ampliar foto a pantalla completa"
          class="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-[#040d21]/80 hover:bg-[#0038A8] text-white/90 hover:text-white backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-xs font-f1 tracking-wider transition-all duration-200 cursor-pointer shadow-lg"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
          </svg>
          <span class="hidden sm:inline">VER FOTO 100%</span>
        </button>

        <!-- Imagen Principal Completa Centrada (object-contain) - JAMÁS SE RECORTA -->
        <img
          src="${resolvedSrc}"
          onerror="handleImageError(this, ${photo.id})"
          alt="${photo.lapTitle}"
          onclick="openLightbox(${index})"
          class="relative z-10 w-full h-full max-h-full object-contain p-2 sm:p-4 cursor-zoom-in transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_18px_35px_rgba(0,0,0,0.85)]"
        />

        <!-- Micro HUD inferior sobre la foto -->
        <div class="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none text-[11px] font-mono-telemetry text-white/80">
          <span class="bg-[#040d21]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
            ${meta.speed} • GEAR ${meta.gear} • ${meta.rpm} RPM
          </span>
          <span class="bg-[#0038A8]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 text-white font-semibold">
            ${meta.delta}
          </span>
        </div>
      </div>
    `;
  }

  // 4. Actualizar la "Ficha de Telemetría" (Glassmorphism + Pinstripe Gentleman Capitalista)
  const cardWrapper = document.getElementById("telemetry-card-wrapper");
  if (cardWrapper) {
    const badgesHtml = photo.badges
      .map((badge, bIdx) => {
        const badgeStyles = [
          "bg-[#0038A8]/75 border-blue-300/40 text-white",
          "bg-white/10 border-white/30 text-blue-100",
          "bg-[#E63946]/25 border-[#E63946]/60 text-red-100"
        ];
        const dotStyles = ["bg-blue-300", "bg-white", "bg-[#E63946]"];
        const style = badgeStyles[bIdx % badgeStyles.length];
        const dot = dotStyles[bIdx % dotStyles.length];

        return `
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-f1 font-semibold tracking-wide shadow-sm ${style}">
            <span class="w-1.5 h-1.5 rounded-full ${dot}"></span>
            <span>${badge}</span>
          </span>
        `;
      })
      .join("");

    const isFinalLap = photo.id === 13;

    cardWrapper.innerHTML = `
      <article class="pinstripe-shirt-card tricolor-border-glow rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full animate-card-up relative overflow-hidden">
        <!-- Barra Tricolor Superior del Club Nacional de Football -->
        <div class="absolute top-0 left-0 right-0 h-1.5 tricolor-bar"></div>

        <!-- Etiqueta sutil de Camisa Formal / Gentleman Driver -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/15">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded bg-[#E63946] text-white font-f1 font-bold text-xs tracking-widest uppercase shadow">
              VUELTA ${photo.id}/13
            </span>
            <span class="text-xs sm:text-sm font-f1 font-semibold text-blue-200 tracking-wide">
              ${photo.sector}
            </span>
          </div>
          <span class="font-mono-telemetry text-[11px] text-white/70 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
            TELEMETRÍA #${String(photo.id).padStart(2, "0")} • C.N.deF.
          </span>
        </div>

        <!-- Cuerpo Principal: lapTitle + quote exacto -->
        <div class="my-auto py-1 sm:py-2">
          <h2 class="font-f1 font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight mb-3 sm:mb-4 tracking-wide drop-shadow">
            ${photo.lapTitle}
          </h2>

          <div class="relative pl-3.5 sm:pl-4 border-l-4 border-[#E63946] bg-[#040d21]/55 rounded-r-xl p-3 sm:p-4 backdrop-blur-sm">
            <p class="text-sm sm:text-base lg:text-[17px] text-slate-100 leading-relaxed font-normal select-text">
              “${photo.quote}”
            </p>
          </div>
        </div>

        <!-- Badges de Telemetría + Controles de Vuelta -->
        <div class="mt-4 pt-3 border-t border-white/15 flex flex-col gap-4">
          <div>
            <div class="text-[11px] font-mono-telemetry uppercase tracking-widest text-blue-200/80 mb-2 flex items-center justify-between">
              <span>PARÁMETROS REGISTRADOS EN PISTA</span>
              <span class="text-[#00f59b]">● TELEMETRY OK</span>
            </div>
            <div class="flex flex-wrap gap-2">
              ${badgesHtml}
            </div>
          </div>

          <!-- Botonera de Navegación en la Ficha -->
          <div class="flex items-center justify-between gap-2.5 pt-1">
            <button
              type="button"
              onclick="prevLap()"
              ${index === 0 ? "disabled" : ""}
              class="flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-f1 font-bold text-xs sm:text-sm tracking-wider uppercase border transition-all duration-200 ${
                index === 0
                  ? "border-white/10 bg-white/5 text-white/30 cursor-not-allowed"
                  : "border-white/25 bg-[#040d21]/80 hover:bg-[#0038A8] text-white cursor-pointer active:scale-95"
              }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15 19l-7-7 7-7"/>
              </svg>
              <span>ANTERIOR</span>
            </button>

            <!-- Indicador rápido de puntos / vueltas -->
            <div class="hidden xl:flex items-center gap-1">
              ${photosData
                .map(
                  (p, i) => `
                <button
                  type="button"
                  onclick="goToLap(${i})"
                  title="Vuelta ${p.id}"
                  class="h-2 rounded-full transition-all duration-200 ${
                    i === index
                      ? "w-6 bg-[#E63946]"
                      : i < index
                      ? "w-2 bg-blue-400/75 hover:bg-white"
                      : "w-2 bg-white/20 hover:bg-white/50"
                  }"
                ></button>
              `
                )
                .join("")}
            </div>

            ${
              isFinalLap
                ? `
              <button
                type="button"
                onclick="openPodiumScreen()"
                class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-f1 font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#E63946] via-[#d62839] to-[#0038A8] text-white border border-white/40 shadow-[0_0_25px_rgba(230,57,70,0.75)] hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer animate-pulse"
              >
                <span>🏁 BANDERA A CUADROS / PODIO</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            `
                : `
              <button
                type="button"
                onclick="nextLap()"
                class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-f1 font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#E63946] hover:bg-[#f04754] text-white border border-white/25 shadow-[0_0_20px_rgba(230,57,70,0.5)] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>SIGUIENTE VUELTA (${photo.id + 1}/13)</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            `
            }
          </div>
        </div>
      </article>
    `;
  }

  preloadAdjacentImages(index);
}

function preloadAdjacentImages(index) {
  const indicesToPreload = [index + 1, index - 1, index + 2].filter(
    (i) => i >= 0 && i < photosData.length
  );
  indicesToPreload.forEach((i) => {
    const img = new Image();
    img.src = resolveImageUrl(photosData[i].imageUrl, photosData[i].id);
  });
}

function nextLap() {
  if (state.currentLapIndex < photosData.length - 1) {
    state.currentLapIndex++;
    f1Sound.playShiftBeep();
    renderCurrentLap("right");
  } else {
    openPodiumScreen();
  }
}

function prevLap() {
  if (state.currentLapIndex > 0) {
    state.currentLapIndex--;
    f1Sound.playShiftBeep();
    renderCurrentLap("left");
  }
}

function goToLap(index) {
  if (index < 0 || index >= photosData.length) return;
  const direction = index >= state.currentLapIndex ? "right" : "left";
  state.currentLapIndex = index;
  f1Sound.playShiftBeep();

  if (state.currentView === "podium") {
    closePodiumToLap(index);
    return;
  }
  renderCurrentLap(direction);
}

window.nextLap = nextLap;
window.prevLap = prevLap;
window.goToLap = goToLap;

// ==========================================================================
// CRONÓMETRO EN VIVO DEL DASHBOARD F1
// ==========================================================================
function startLiveTelemetryClock() {
  if (state.liveClockInterval) clearInterval(state.liveClockInterval);
  const startTime = performance.now();
  const clockEl = document.getElementById("hud-session-timer");

  state.liveClockInterval = setInterval(() => {
    const diff = performance.now() - startTime;
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    const ms = Math.floor(diff % 1000);
    if (clockEl) {
      clockEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${String(ms).padStart(3, "0")}`;
    }
  }, 47);
}

// ==========================================================================
// 3. SECCIÓN FINAL: EL PODIO / BANDERA A CUADROS + BENTO GRID / GALERÍA
// ==========================================================================
function openPodiumScreen() {
  const telemetryEl = document.getElementById("telemetry-screen");
  const podiumEl = document.getElementById("podium-screen");

  f1Sound.playCheckeredChord();

  telemetryEl.classList.add("hidden");
  podiumEl.classList.remove("hidden");
  state.currentView = "podium";

  renderBentoGrid();
  launchTricolorConfetti();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closePodiumToLap(lapIndex = 0) {
  const telemetryEl = document.getElementById("telemetry-screen");
  const podiumEl = document.getElementById("podium-screen");

  podiumEl.classList.add("hidden");
  telemetryEl.classList.remove("hidden");
  state.currentView = "telemetry";
  state.currentLapIndex = lapIndex;
  renderCurrentLap("right");
}

function scrollToBentoGallery() {
  const gallerySection = document.getElementById("bento-gallery-section");
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  }
}

window.openPodiumScreen = openPodiumScreen;
window.closePodiumToLap = closePodiumToLap;
window.scrollToBentoGallery = scrollToBentoGallery;

function renderBentoGrid() {
  const grid = document.getElementById("bento-gallery-grid");
  if (!grid) return;

  grid.innerHTML = photosData
    .map((photo, index) => {
      const resolvedSrc = resolveImageUrl(photo.imageUrl, photo.id);
      // Destacar vuelta 1, vuelta 8 (camisas) y vuelta 13 (final) en pantallas grandes
      const spanClass =
        photo.id === 1 || photo.id === 13
          ? "md:col-span-2 lg:col-span-2"
          : "col-span-1";

      const badgesHtml = photo.badges
        .map(
          (b) => `
          <span class="text-[11px] font-f1 font-semibold px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-blue-100">
            ${b}
          </span>
        `
        )
        .join("");

      return `
        <article
          class="${spanClass} group pinstripe-shirt-card rounded-2xl border border-white/15 hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
        >
          <!-- Barra superior tricolor -->
          <div class="h-1 w-full tricolor-bar"></div>

          <!-- Contenedor de Imagen con Tratamiento Crítico: object-contain + fondo blur-xl opacity-50 -->
          <div
            onclick="openLightbox(${index})"
            class="relative w-full h-64 sm:h-72 bg-[#030917] overflow-hidden flex items-center justify-center cursor-zoom-in border-b border-white/10"
          >
            <img
              src="${resolvedSrc}"
              onerror="handleImageError(this, ${photo.id})"
              alt=""
              aria-hidden="true"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-50 pointer-events-none"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#040d21]/80 via-transparent to-[#040d21]/30"></div>

            <img
              src="${resolvedSrc}"
              onerror="handleImageError(this, ${photo.id})"
              alt="${photo.lapTitle}"
              loading="lazy"
              class="relative z-10 w-full h-full object-contain p-2.5 transition-transform duration-300 group-hover:scale-[1.03]"
            />

            <div class="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-[#E63946] text-white font-f1 font-bold text-xs tracking-wider shadow">
              VUELTA ${photo.id}/13
            </div>

            <button
              type="button"
              onclick="event.stopPropagation(); closePodiumToLap(${index})"
              class="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-lg bg-[#0038A8]/90 hover:bg-[#0038A8] text-white font-f1 text-xs font-semibold border border-white/25 shadow transition"
            >
              IR A TELEMETRÍA →
            </button>
          </div>

          <!-- Texto íntegro de la vuelta -->
          <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
            <div>
              <div class="text-xs font-f1 font-semibold text-blue-300 uppercase tracking-wider mb-1">
                ${photo.sector}
              </div>
              <h3 class="font-f1 font-bold text-lg text-white mb-2 leading-snug">
                ${photo.lapTitle}
              </h3>
              <p class="text-sm text-slate-200 leading-relaxed select-text">
                “${photo.quote}”
              </p>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
              ${badgesHtml}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// ==========================================================================
// LIGHTBOX DE PANTALLA COMPLETA (PARA INSPECCIONAR CUALQUIER FOTO AL 100%)
// ==========================================================================
function openLightbox(index) {
  const photo = photosData[index];
  if (!photo) return;
  state.lightboxPhoto = index;

  const modal = document.getElementById("photo-lightbox-modal");
  const imgBlur = document.getElementById("lightbox-img-blur");
  const imgMain = document.getElementById("lightbox-img-main");
  const titleEl = document.getElementById("lightbox-title");
  const quoteEl = document.getElementById("lightbox-quote");

  const resolvedSrc = resolveImageUrl(photo.imageUrl, photo.id);

  if (imgBlur) {
    imgBlur.dataset.fallbackStep = "0";
    imgBlur.onerror = () => handleImageError(imgBlur, photo.id);
    imgBlur.src = resolvedSrc;
  }
  if (imgMain) {
    imgMain.dataset.fallbackStep = "0";
    imgMain.onerror = () => handleImageError(imgMain, photo.id);
    imgMain.src = resolvedSrc;
    imgMain.alt = photo.lapTitle;
  }
  if (titleEl) titleEl.textContent = photo.lapTitle;
  if (quoteEl) quoteEl.textContent = `“${photo.quote}”`;

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeLightbox() {
  const modal = document.getElementById("photo-lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  state.lightboxPhoto = null;
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// ==========================================================================
// CONFETI TRICOLOR (AZUL #0038A8, BLANCO #FFFFFF, ROJO #E63946)
// ==========================================================================
function launchTricolorConfetti() {
  const canvas = document.getElementById("tricolor-confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#0038A8", "#FFFFFF", "#E63946", "#1d5fe0", "#FFFFFF", "#E63946"];
  const particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 11 + 6,
    h: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 3.5,
    vy: Math.random() * 4.2 + 2.4,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.16
  }));

  let frameCount = 0;
  const maxFrames = 320;

  function renderFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frameCount++;
    if (frameCount < maxFrames) {
      requestAnimationFrame(renderFrame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(renderFrame);
}

window.launchTricolorConfetti = launchTricolorConfetti;

// ==========================================================================
// EVENTOS: TECLADO, SWIPE TÁCTIL EN CELULAR Y BOTONES
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Iniciar secuencia de las 5 luces rojas en el Splash Screen
  startF1LightsSequence();

  // Botón "LARGAR TELEMETRÍA"
  const launchBtn = document.getElementById("btn-launch-telemetry");
  if (launchBtn) {
    launchBtn.addEventListener("click", triggerLightsOutAndStart);
  }

  // Toggle de sonido
  const soundBtn = document.getElementById("btn-toggle-sound");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      f1Sound.enabled = !f1Sound.enabled;
      soundBtn.textContent = f1Sound.enabled ? "🔊 AUDIO FIA: ON" : "🔇 AUDIO FIA: OFF";
    });
  }

  // Navegación con flechas de teclado y Escape
  window.addEventListener("keydown", (e) => {
    if (state.lightboxPhoto !== null) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && state.lightboxPhoto < photosData.length - 1) {
        openLightbox(state.lightboxPhoto + 1);
      }
      if (e.key === "ArrowLeft" && state.lightboxPhoto > 0) {
        openLightbox(state.lightboxPhoto - 1);
      }
      return;
    }

    if (state.currentView === "splash" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      triggerLightsOutAndStart();
      return;
    }

    if (state.currentView === "telemetry") {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextLap();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevLap();
      }
    }
  });

  // Soporte Swipe Táctil en celular para el carrusel
  const swipeArea = document.getElementById("telemetry-swipe-area");
  let touchStartX = 0;
  let touchStartY = 0;

  if (swipeArea) {
    swipeArea.addEventListener(
      "touchstart",
      (e) => {
        if (!e.touches || e.touches.length === 0) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    swipeArea.addEventListener(
      "touchend",
      (e) => {
        if (!e.changedTouches || e.changedTouches.length === 0) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;

        // Verificar que sea un gesto horizontal intencional
        if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
          if (deltaX < 0) {
            nextLap();
          } else {
            prevLap();
          }
        }
      },
      { passive: true }
    );
  }
});
