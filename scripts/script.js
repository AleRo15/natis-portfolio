/* =========================================================
   PIXEL ARCHIVE
   GAME SYSTEM
========================================================= */


/* =========================================================
   DATOS DE IMÁGENES
========================================================= */

const imagenes = {

    /* =========================
       TEMPLATES
    ========================= */

    packs: [
        "./assets/edits/images/packs/pack1.gif",
        "./assets/edits/images/packs/pack2.gif",
        "./assets/edits/images/packs/pack3.gif",
        "./assets/edits/images/packs/pack4.gif",
        "./assets/edits/images/packs/pack5.gif",
        "./assets/edits/images/packs/pack6.gif",
        "./assets/edits/images/packs/pack7.gif",
        "./assets/edits/images/packs/pack8.gif",
        "./assets/edits/images/packs/pack9.gif",
        "./assets/edits/images/packs/pack10.gif",
        "./assets/edits/images/packs/pack11.gif",
        "./assets/edits/images/packs/pack12.gif",
        "./assets/edits/images/packs/pack13.gif",
        "./assets/edits/images/packs/pack14.gif",
        "./assets/edits/images/packs/pack15.png"
    ],

    minipacks: [
        "./assets/edits/images/mini-packs/mini1.gif",
        "./assets/edits/images/mini-packs/mini2.gif",
        "./assets/edits/images/mini-packs/mini3.gif",
        "./assets/edits/images/mini-packs/mini4.gif",
        "./assets/edits/images/mini-packs/mini5.gif",
        "./assets/edits/images/mini-packs/mini6.png",
        "./assets/edits/images/mini-packs/mini7.gif",
        "./assets/edits/images/mini-packs/mini8.gif"
    ],

    themes: [
        "./assets/edits/images/themes/theme1.gif",
        "./assets/edits/images/themes/theme2.png",
        "./assets/edits/images/themes/theme3.png",
        "./assets/edits/images/themes/theme4.gif",
        "./assets/edits/images/themes/theme5.png",
        "./assets/edits/images/themes/theme6.gif",
        "./assets/edits/images/themes/theme7.gif",
        "./assets/edits/images/themes/theme8.gif",
        "./assets/edits/images/themes/theme9.png",
        "./assets/edits/images/themes/theme10.png",
        "./assets/edits/images/themes/theme11.png",
        "./assets/edits/images/themes/theme12.png",
        "./assets/edits/images/themes/theme13.gif",
        "./assets/edits/images/themes/theme14.png",
        "./assets/edits/images/themes/theme15.png",
        "./assets/edits/images/themes/theme16.png",
        "./assets/edits/images/themes/theme17.png",
        "./assets/edits/images/themes/theme18.gif"
    ],

    sepspcs: [
        "./assets/edits/images/seps-pcs/sep1.gif",
        "./assets/edits/images/seps-pcs/sep2.gif"
    ],


    /* =========================
       OTRAS CATEGORÍAS
    ========================= */

    portadas: [
        "./assets/edits/portadas/portada1.gif",
        "./assets/edits/portadas/portada2.gif",
        "./assets/edits/portadas/portada3.gif",
        "./assets/edits/portadas/portada4.gif",
        "./assets/edits/portadas/portada5.gif"
    ],

    blog: [
        "./assets/edits/blog/blog1.gif",
        "./assets/edits/blog/blog2-1.gif",
        "./assets/edits/blog/blog2-2.gif",
        "./assets/edits/blog/blog2-3.gif"
    ],

    perfil: [
        "./assets/edits/perfil/perfil1.gif",
        "./assets/edits/perfil/perfil2.gif",
        "./assets/edits/perfil/fdp3.gif",
        "./assets/edits/perfil/banner3.gif",
        "./assets/edits/perfil/wikis3.gif",
        "./assets/edits/perfil/perfil4.gif",
        "./assets/edits/perfil/fdp5.gif",
        "./assets/edits/perfil/banner5.gif",
        "./assets/edits/perfil/fdp6.gif",
        "./assets/edits/perfil/banner6.gif",
        "./assets/edits/perfil/perfil7.gif",
        "./assets/edits/perfil/perfil8.gif",
        "./assets/edits/perfil/perfil9.gif",
        "./assets/edits/perfil/perfil10.gif",
        "./assets/edits/perfil/perfil11.gif",
        "./assets/edits/perfil/perfil12.gif",

        "./assets/edits/perfil/pic1.gif",
        "./assets/edits/perfil/pic2.gif",
        "./assets/edits/perfil/pic3.gif",
        "./assets/edits/perfil/pic4.gif",
        "./assets/edits/perfil/pic5.gif",
        "./assets/edits/perfil/pic6.gif"
    ],

    banners: [
        "./assets/edits/banners/banner1.gif",
        "./assets/edits/banners/banner2.gif"
    ],

    commthemes: [
        "./assets/edits/commthemes/comm-theme1.gif",
        "./assets/edits/commthemes/comm-theme2.gif",
        "./assets/edits/commthemes/comm-theme3.gif",
        "./assets/edits/commthemes/comm-theme4.gif",
        "./assets/edits/commthemes/comm-theme5.png",
        "./assets/edits/commthemes/comm-theme6.gif"
    ],

    chatthemes: [
        "./assets/edits/chatthemes/chat-theme1-1.gif",
        "./assets/edits/chatthemes/chat-theme1-2.gif"
    ],

    setthemes: [
        "./assets/edits/setthemes/set-theme1.gif",
        "./assets/edits/setthemes/set-theme2.png",
        "./assets/edits/setthemes/set-theme3.png",
        "./assets/edits/setthemes/set-theme4.png",
        "./assets/edits/setthemes/set-theme5.png",
        "./assets/edits/setthemes/set-theme6.png",
        "./assets/edits/setthemes/set-theme7.jpg",
        "./assets/edits/setthemes/set-theme8.jpg",
        "./assets/edits/setthemes/set-theme9.png",
        "./assets/edits/setthemes/set-theme10.jpg",
        "./assets/edits/setthemes/set-theme11.png",
        "./assets/edits/setthemes/set-theme12.gif"
    ]
};


/* =========================================================
   INFORMACIÓN DE ASSETS

   TEMPLATES:
   FILE
   TYPE
   COLOR
   IMAGES
   MESSAGE

   NORMALES:
   FILE
   TYPE
   STATUS
   QUALITY
   MESSAGE

   NO SEQUENCE
========================================================= */

const informacionAssets = {

    /* =====================================================
       TEMPLATES
    ===================================================== */

    packs: {

        0: {
            file: "EMO",
            color: "CUSTOMIZABLE / B&W",
            images: "04-05 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        1: {
            file: "HALLOWEEN",
            color: "CUSTOMIZABLE",
            images: "03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        2: {
            file: "SOFT",
            color: "NON-CUSTOMIZABLE",
            images: "03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        3: {
            file: "EMO CHIDO",
            color: "CUSTOMIZABLE / B&W",
            images: "03-04 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        4: {
            file: "VINTAGE",
            color: "NON-CUSTOMIZABLE",
            images: "04-05 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        5: {
            file: "CRUELLA",
            color: "NON-CUSTOMIZABLE",
            images: "04-05 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE.\nCOLLABORATION WITH @PAU."
        },

        6: {
            file: "ROCKSTAR",
            color: "CUSTOMIZABLE / B&W",
            images: "03-04 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        7: {
            file: "EMO PRO",
            color: "NON-CUSTOMIZABLE",
            images: "04-05 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        8: {
            file: "HOT",
            color: "ORANGE / B&W",
            images: "05-06 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        9: {
            file: "EMOSAD",
            color: "NON-CUSTOMIZABLE",
            images: "04-05 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        10: {
            file: "CARTÚN",
            color: "NON-CUSTOMIZABLE",
            images: "03-04 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        11: {
            file: "EMOESPUKI",
            color: "NON-CUSTOMIZABLE",
            images: "04-05 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        12: {
            file: "CASTIEL GÓTICO",
            color: "CUSTOMIZABLE",
            images: "05-06 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        13: {
            file: "GOTHIC COQUETTE",
            color: "NON-CUSTOMIZABLE",
            images: "01-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        14: {
            file: "PRIDE",
            color: "CUSTOMIZABLE LGBTQ+ PRIDE FLAG",
            images: "01-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        }

    },


    minipacks: {

        0: {
            file: "MANGA",
            color: "NON-CUSTOMIZABLE",
            images: "03-04 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        1: {
            file: "LOVISLOV",
            color: "CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        2: {
            file: "FOTOEMO",
            color: "CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        3: {
            file: "ROCKEMO",
            color: "CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        4: {
            file: "DRUNK",
            color: "CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES.\nCOLLABORATION WITH @ELEVEN."
        },

        5: {
            file: "LGBT",
            color: "CUSTOMIZABLE LGBTQ+ PRIDE FLAG",
            images: "01-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        6: {
            file: "DARKETO",
            color: "CUSTOMIZABLE / B&W",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        7: {
            file: "YABIENES",
            color: "CUSTOMIZABLE / B&W",
            images: "02-03 IMAGES AND 2 RENDERS/PNGS",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        }

    },


    themes: {

        0: {
            file: "EMOKIUT",
            color: "NON-CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        1: {
            file: "KITTY",
            color: "NON-CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        2: {
            file: "NEWJEANS",
            color: "NON-CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        3: {
            file: "VINTASH",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        4: {
            file: "GINGERBREAD",
            color: "NON-CUSTOMIZABLE",
            images: "03-04 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE.\nCOLLABORATION WITH @KIBU."
        },

        5: {
            file: "ULALÁ",
            color: "CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        6: {
            file: "ST. LOVE",
            color: "CUSTOMIZABLE / B&W",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES.\nCOLLABORATION WITH @LEO."
        },

        7: {
            file: "FRESITA",
            color: "NON-CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        8: {
            file: "CHK. LOVE 2",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        9: {
            file: "COZY CAT",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        10: {
            file: "TAYLOR",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        11: {
            file: "SUNSET DRAGONS",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        12: {
            file: "DREAM WINGS",
            color: "NON-CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        13: {
            file: "ZOMBIE SCHOOL",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        14: {
            file: "SEASCAPE",
            color: "NON-CUSTOMIZABLE",
            images: "02-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        15: {
            file: "SCC",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        16: {
            file: "SAPITO",
            color: "NON-CUSTOMIZABLE",
            images: "01-03 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        },

        17: {
            file: "HEAVEN",
            color: "NON-CUSTOMIZABLE",
            images: "01-02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        }

    },


    sepspcs: {

        0: {
            file: "PRO EMO",
            color: "NON-CUSTOMIZABLE",
            images: "01 IMAGE",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE AVAILABLE INSTEAD OF STATIC IMAGES."
        },

        1: {
            file: "MÍO",
            color: "CUSTOMIZABLE / B&W",
            images: "02 IMAGES",
            message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!\nGIF SEQUENCE NOT AVAILABLE."
        }

    },


    /* =====================================================
       CATEGORÍAS NORMALES
    ===================================================== */

    portadas: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        2: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        3: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        4: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    },

    blog: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        2: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        3: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    },

    perfil: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        2: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        3: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        4: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        5: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        6: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        7: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        8: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        9: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        10: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        11: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        12: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        13: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        14: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        15: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        16: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        17: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        18: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        19: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        20: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        21: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    },

    banners: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    },

    commthemes: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        2: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        3: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        4: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        5: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    },

    chatthemes: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    },

    setthemes: {
        0: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        1: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        2: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        3: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        4: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        5: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        6: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        7: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        8: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        9: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        10: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" },
        11: { status: "ARCHIVED", quality: "HIGH", message: "CLICK THE IMAGE TO VIEW IT FULLSCREEN!" }
    }

};


/* =========================================================
   CATEGORÍAS TEMPLATE
========================================================= */

const categoriasTemplates = [
    "packs",
    "minipacks",
    "themes",
    "sepspcs"
];


/* =========================================================
   ELEMENTOS PRINCIPALES
========================================================= */

const intro = document.getElementById("intro");
const menu = document.getElementById("menu");
const templatesMenu = document.getElementById("templatesMenu");
const gallery = document.getElementById("gallery");
const galleryGrid = document.getElementById("galleryGrid");
const galleryTitle = document.getElementById("galleryTitle");
const galleryCount = document.getElementById("galleryCount");
const loadingScreen = document.getElementById("loadingScreen");
const loadingProgress = document.getElementById("loadingProgress");
const loadingText = document.getElementById("loadingText");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const templatesBackBtn = document.getElementById("templatesBackBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreElement = document.getElementById("score");


/* =========================================================
   SONIDOS
========================================================= */

const soundStart = new Audio("./assets/sounds/start.mp3");
const soundOpen = new Audio("./assets/sounds/open.mp3");
const soundEnter = new Audio("./assets/sounds/enter.mp3");
const soundBack = new Audio("./assets/sounds/back.mp3");

soundStart.volume = 0.4;
soundOpen.volume = 0.4;
soundEnter.volume = 0.4;
soundBack.volume = 0.4;


function playSound(sound) {

    if (!sound) {
        return;
    }

    try {

        sound.currentTime = 0;

        const promise = sound.play();

        if (promise !== undefined) {

            promise.catch(() => {
                console.log("Audio blocked.");
            });

        }

    } catch (error) {

        console.log("Audio error:", error);

    }

}


/* =========================================================
   VARIABLES DE NAVEGACIÓN
========================================================= */

let categoriaActual = null;
let imagenActual = 0;
let origenGaleria = "menu";


/* =========================================================
   NOMBRES
========================================================= */

const nombresCategorias = {

    packs: "PACKS",
    minipacks: "MINI PACKS",
    themes: "THEMES",
    sepspcs: "SEPS / PCS",

    portadas: "COVERS",
    blog: "BLOG PACK",
    perfil: "PROFILE EDITS",
    banners: "BANNERS",
    commthemes: "COMM. THEMES",
    chatthemes: "CHATROOM THEMES",
    setthemes: "SET THEMES"

};


/* =========================================================
   STAGES
========================================================= */

const stageNumbers = {

    packs: "STAGE 01-01",
    minipacks: "STAGE 01-02",
    themes: "STAGE 01-03",
    sepspcs: "STAGE 01-04",

    portadas: "STAGE 02",
    blog: "STAGE 03",
    perfil: "STAGE 04",
    banners: "STAGE 05",
    commthemes: "STAGE 06",
    chatthemes: "STAGE 07",
    setthemes: "STAGE 08"

};


/* =========================================================
   SCORE
========================================================= */

let score = 8420;


function aumentarScore(amount) {

    score += amount;

    if (scoreElement) {

        scoreElement.textContent =
            String(score).padStart(6, "0");

    }

}


/* =========================================================
   START
========================================================= */

function startGame() {

    playSound(soundStart);

    if (!menu) {
        return;
    }

    menu.scrollIntoView({
        behavior: "smooth"
    });

}


if (startBtn) {

    startBtn.addEventListener(
        "click",
        startGame
    );

}


/* =========================================================
   ENTER PARA START
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            window.scrollY <
                window.innerHeight * 0.5 &&
            templatesMenu &&
            gallery &&
            !templatesMenu.classList.contains("active") &&
            !gallery.classList.contains("active")
        ) {

            startGame();

        }

    }
);


/* =========================================================
   ABRIR SUBMENÚ TEMPLATES
========================================================= */

function abrirTemplates() {

    playSound(soundEnter);

    if (intro) {
        intro.style.display = "none";
    }

    if (menu) {
        menu.style.display = "none";
    }

    if (gallery) {

        gallery.style.display = "none";
        gallery.classList.remove("active");

    }

    if (templatesMenu) {

        templatesMenu.style.display = "block";
        templatesMenu.classList.add("active");

    }

    document.body.style.overflow = "";

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


document.querySelectorAll(
    ".abrir-template"
).forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();
            event.stopPropagation();

            aumentarScore(100);

            abrirTemplates();

        }
    );

});


/* =========================================================
   ABRIR GALERÍA
========================================================= */

function abrirGaleria(
    tipo,
    origen = "menu"
) {

    if (
        !imagenes[tipo] ||
        imagenes[tipo].length === 0
    ) {

        console.warn(
            "No hay imágenes para:",
            tipo
        );

        return;

    }

    categoriaActual = tipo;
    imagenActual = 0;
    origenGaleria = origen;


    if (intro) {
        intro.style.display = "none";
    }

    if (menu) {
        menu.style.display = "none";
    }

    if (templatesMenu) {

        templatesMenu.classList.remove("active");
        templatesMenu.style.display = "none";

    }


    if (gallery) {

        gallery.style.display = "block";
        gallery.classList.add("active");

    }

    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";


    if (galleryTitle) {

        galleryTitle.textContent =
            nombresCategorias[tipo];

    }


    const stageElement =
        document.querySelector(".gallery-stage");

    if (stageElement) {

        stageElement.textContent =
            stageNumbers[tipo] || "STAGE";

    }


    if (galleryGrid) {
        galleryGrid.innerHTML = "";
    }


    if (loadingScreen) {
        loadingScreen.classList.add("active");
    }

    if (loadingProgress) {
        loadingProgress.style.width = "0%";
    }

    if (loadingText) {
        loadingText.textContent = "INITIALIZING...";
    }


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });


    cargarGaleria(tipo);

}


/* =========================================================
   CARGAR GALERÍA
========================================================= */

function cargarGaleria(tipo) {

    const lista = imagenes[tipo];

    if (!lista) {
        return;
    }

    let progress = 0;

    const interval = setInterval(() => {

        progress += 10;

        if (loadingProgress) {

            loadingProgress.style.width =
                progress + "%";

        }


        if (progress < 40) {

            if (loadingText) {
                loadingText.textContent =
                    "LOADING MEMORY...";
            }

        }

        else if (progress < 70) {

            if (loadingText) {
                loadingText.textContent =
                    "READING ASSETS...";
            }

        }

        else if (progress < 100) {

            if (loadingText) {
                loadingText.textContent =
                    "RENDERING PIXELS...";
            }

        }

        else {

            clearInterval(interval);

            if (loadingText) {
                loadingText.textContent =
                    "ASSETS READY.";
            }

            setTimeout(() => {

                if (loadingScreen) {

                    loadingScreen.classList.remove(
                        "active"
                    );

                }

                renderGaleria(lista);

            }, 350);

        }

    }, 50);

}


/* =========================================================
   RENDER GALERÍA
========================================================= */

function renderGaleria(lista) {

    if (!galleryGrid) {
        return;
    }

    galleryGrid.innerHTML = "";


    if (galleryCount) {

        galleryCount.textContent =
            `00 / ${String(lista.length).padStart(2, "0")}`;

    }


    lista.forEach(
        (src, index) => {

            const card =
                document.createElement("article");

            card.className =
                "asset-card";

            card.style.animationDelay =
                `${index * 80}ms`;


            const img =
                document.createElement("img");

            img.className =
                "asset-image";

            img.src = src;
            img.dataset.src = src;

            img.alt =
                `${nombresCategorias[categoriaActual]} ${index + 1}`;

            img.loading = "lazy";


            img.addEventListener(
                "error",
                () => {

                    console.error(
                        "No se pudo cargar la imagen:",
                        src
                    );

                    card.classList.add(
                        "asset-error"
                    );

                }
            );


            const number =
                document.createElement("span");

            number.className =
                "asset-number";

            number.textContent =
                `#${String(index + 1).padStart(2, "0")}`;


            const footer =
                document.createElement("div");

            footer.className =
                "asset-footer";


            const name =
                document.createElement("span");

            name.className =
                "asset-name";

            name.textContent =
                `ASSET_${String(index + 1).padStart(3, "0")}`;


            const type =
                document.createElement("span");

            type.className =
                "asset-type";

            type.textContent = "EDIT";


            footer.appendChild(name);
            footer.appendChild(type);

            card.appendChild(img);
            card.appendChild(number);
            card.appendChild(footer);


            card.addEventListener(
                "click",
                () => {

                    abrirModal(
                        src,
                        index
                    );

                }
            );


            galleryGrid.appendChild(card);

        }
    );


    configurarHover();

}


/* =========================================================
   BOTONES DE CATEGORÍAS NORMALES
========================================================= */

document.querySelectorAll(
    ".stage-card:not(.locked):not([data-cat='plantillas'])"
).forEach(card => {

    const button =
        card.querySelector(".abrir");

    if (!button) {
        return;
    }

    const tipo =
        card.dataset.cat;


    button.addEventListener(
        "click",
        event => {

            event.preventDefault();
            event.stopPropagation();

            playSound(soundOpen);

            aumentarScore(100);

            abrirGaleria(
                tipo,
                "menu"
            );

        }
    );

});


/* =========================================================
   BOTONES DEL SUBMENÚ TEMPLATES
========================================================= */

document.querySelectorAll(
    ".template-open"
).forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();
            event.stopPropagation();

            const card =
                button.closest(".template-card");

            if (!card) {
                return;
            }

            const tipo =
                card.dataset.template;


            if (!imagenes[tipo]) {

                console.warn(
                    "Template no encontrado:",
                    tipo
                );

                return;

            }

            playSound(soundEnter);

            aumentarScore(100);

            abrirGaleria(
                tipo,
                "templates"
            );

        }
    );

});


/* =========================================================
   VOLVER DESDE TEMPLATES
========================================================= */

function volverDesdeTemplates() {

    playSound(soundBack);


    if (templatesMenu) {

        templatesMenu.classList.remove(
            "active"
        );

        templatesMenu.style.display =
            "none";

    }


    if (menu) {
        menu.style.display = "";
    }

    if (intro) {
        intro.style.display = "";
    }


    document.body.style.overflow = "";


    if (menu) {

        window.scrollTo({

            top: menu.offsetTop,

            behavior: "smooth"

        });

    }

}


if (templatesBackBtn) {

    templatesBackBtn.addEventListener(
        "click",
        volverDesdeTemplates
    );

}

/* =========================================================
   MODAL
========================================================= */

let modal =
    document.getElementById("imageModal");

let modalWindow =
    document.querySelector(".modal-window");

let modalOverlay =
    document.querySelector(".modal-overlay");


if (!modal && modalWindow) {

    modal =
        document.createElement("div");

    modal.id = "imageModal";
    modal.className = "modal";

    document.body.appendChild(modal);

    if (modalOverlay) {

        modal.appendChild(
            modalOverlay
        );

    }

    modal.appendChild(
        modalWindow
    );

}


/* =========================================================
   ELEMENTOS DEL MODAL
========================================================= */

const modalImage =
    document.getElementById("modalImage");

const modalFile =
    document.getElementById("modalFile");

const modalName =
    document.getElementById("modalName");

const modalType =
    document.getElementById("modalType");

const modalColor =
    document.getElementById("modalColor");

const modalSequence =
    document.getElementById("modalSequence");

const modalMessage =
    document.getElementById("modalMessage");

const modalStatus =
    document.getElementById("modalStatus");

const modalQuality =
    document.getElementById("modalQuality");

const closeModal =
    document.getElementById("closeModal");


/* =========================================================
   BUSCAR CONTENEDOR DE UN CAMPO
========================================================= */

function obtenerContenedorModal(elemento) {

    if (!elemento) {
        return null;
    }

    return elemento.closest(
        ".modal-info-row, .modal-detail, .info-row, .modal-field"
    );

}


/* =========================================================
   CAMBIAR LABEL DEL CAMPO
========================================================= */

function cambiarLabelModal(
    elemento,
    texto
) {

    if (!elemento) {
        return;
    }

    const container =
        obtenerContenedorModal(elemento);

    if (!container) {
        return;
    }

    const label =
        container.querySelector(
            "label, .modal-label, .detail-label, .info-label, .field-label"
        );

    if (label) {

        label.textContent =
            texto;

    }

}


/* =========================================================
   OCULTAR CAMPO
========================================================= */

function ocultarCampoModal(elemento) {

    const container =
        obtenerContenedorModal(elemento);

    if (container) {

        container.style.display =
            "none";

    }

}


/* =========================================================
   MOSTRAR CAMPO
========================================================= */

function mostrarCampoModal(elemento) {

    const container =
        obtenerContenedorModal(elemento);

    if (container) {

        container.style.display =
            "";

    }

}


/* =========================================================
   FULLSCREEN VIEWER
========================================================= */

let fullscreenViewer =
    document.querySelector(".fullscreen-overlay");

let fullscreenImage =
    document.getElementById("fullscreenImage");

let closeFullscreen =
    document.getElementById("closeFullscreen");


if (!fullscreenViewer) {

    fullscreenViewer =
        document.createElement("div");

    fullscreenViewer.className =
        "fullscreen-overlay";

    fullscreenViewer.setAttribute(
        "aria-hidden",
        "true"
    );


    fullscreenImage =
        document.createElement("img");

    fullscreenImage.id =
        "fullscreenImage";

    fullscreenImage.alt =
        "Vista completa";


    closeFullscreen =
        document.createElement("button");

    closeFullscreen.id =
        "closeFullscreen";

    closeFullscreen.type =
        "button";

    closeFullscreen.setAttribute(
        "aria-label",
        "Cerrar vista completa"
    );

    closeFullscreen.innerHTML =
        "×";


    fullscreenViewer.appendChild(
        closeFullscreen
    );

    fullscreenViewer.appendChild(
        fullscreenImage
    );

    document.body.appendChild(
        fullscreenViewer
    );

}


if (
    fullscreenViewer &&
    !fullscreenImage
) {

    fullscreenImage =
        document.createElement("img");

    fullscreenImage.id =
        "fullscreenImage";

    fullscreenImage.alt =
        "Vista completa";

    fullscreenViewer.appendChild(
        fullscreenImage
    );

}


if (
    fullscreenViewer &&
    !closeFullscreen
) {

    closeFullscreen =
        document.createElement("button");

    closeFullscreen.id =
        "closeFullscreen";

    closeFullscreen.type =
        "button";

    closeFullscreen.setAttribute(
        "aria-label",
        "Cerrar vista completa"
    );

    closeFullscreen.innerHTML =
        "×";


    fullscreenViewer.insertBefore(
        closeFullscreen,
        fullscreenViewer.firstChild
    );

}


/* =========================================================
   ESTILOS FULLSCREEN
========================================================= */

if (
    fullscreenViewer &&
    !document.getElementById(
        "pixelArchiveFullscreenStyle"
    )
) {

    const fullscreenStyle =
        document.createElement("style");

    fullscreenStyle.id =
        "pixelArchiveFullscreenStyle";


    fullscreenStyle.textContent = `

        .fullscreen-overlay {

            position: fixed;

            inset: 0;

            width: 100vw;

            height: 100vh;

            background:
                rgba(0, 0, 0, 0.96);

            display: none;

            align-items: center;

            justify-content: center;

            z-index: 99999;

            padding: 40px;

            box-sizing: border-box;

            cursor: zoom-out;

        }


        .fullscreen-overlay.active {

            display: flex;

        }


        .fullscreen-overlay img {

            display: block;

            max-width: 95vw;

            max-height: 92vh;

            width: auto;

            height: auto;

            object-fit: contain;

            image-rendering: auto;

            cursor: default;

            user-select: none;

        }


        #closeFullscreen {

            position: absolute;

            top: 20px;

            right: 25px;

            width: 48px;

            height: 48px;

            padding: 0;

            border: 2px solid #00f6ff;

            background:
                rgba(0, 0, 0, 0.75);

            color: #00f6ff;

            font-family: Arial, sans-serif;

            font-size: 36px;

            line-height: 42px;

            text-align: center;

            cursor: pointer;

            z-index: 100000;

            transition:
                transform 0.15s ease,
                background 0.15s ease,
                color 0.15s ease;

        }


        #closeFullscreen:hover {

            background: #00f6ff;

            color: #000;

            transform: scale(1.08);

        }

    `;


    document.head.appendChild(
        fullscreenStyle
    );

}


/* =========================================================
   FUNCIÓN AUXILIAR
   ACTUALIZAR ELEMENTO DEL MODAL
========================================================= */

function actualizarModalElemento(
    elemento,
    valor,
    fallback = "—"
) {

    if (!elemento) {
        return;
    }

    elemento.textContent =
        valor !== undefined &&
        valor !== null &&
        valor !== ""
            ? valor
            : fallback;

}


/* =========================================================
   ABRIR MODAL
========================================================= */

function abrirModal(
    src,
    index
) {

    if (
        !modal ||
        !modalImage
    ) {

        console.error(
            "No se encontró correctamente el modal."
        );

        return;

    }


    imagenActual =
        index;


    const categoria =
        categoriaActual;


    const datosCategoria =
        informacionAssets[categoria];


    const datos =
        datosCategoria
            ? datosCategoria[index]
            : null;


    const esTemplate =
        categoriasTemplates.includes(
            categoria
        );


    const nombreAsset =
        `ASSET_${String(index + 1).padStart(3, "0")}`;


    modalImage.src =
        src;

    modalImage.alt =
        `${nombresCategorias[categoria] || "ASSET"} ${index + 1}`;


    actualizarModalElemento(
        modalFile,
        nombreAsset,
        nombreAsset
    );


    /* =====================================================
       TEMPLATE
    ===================================================== */

    if (esTemplate) {

        if (modalTemplateInfo) {

            modalTemplateInfo.style.display =
                "";

        }


        if (modalDefaultInfo) {

            modalDefaultInfo.style.display =
                "none";

        }


        actualizarModalElemento(
            modalTemplateFile,
            datos?.file,
            nombreAsset
        );


        let tipoTemplate =
            "TEMPLATE";


        if (categoria === "packs") {

            tipoTemplate =
                "PACK";

        }

        else if (
            categoria === "minipacks"
        ) {

            tipoTemplate =
                "MINI PACK";

        }

        else if (
            categoria === "themes"
        ) {

            tipoTemplate =
                "THEME";

        }

        else if (
            categoria === "sepspcs"
        ) {

            tipoTemplate =
                "SEPS / PCS";

        }


        actualizarModalElemento(
            modalTemplateType,
            tipoTemplate,
            "TEMPLATE"
        );


        actualizarModalElemento(
            modalColor,
            datos?.color,
            "CUSTOMIZABLE / B&W"
        );


        actualizarModalElemento(
            modalImages,
            datos?.images,
            "—"
        );


        actualizarModalElemento(
            modalMessage,
            datos?.message,
            "ASSET SUCCESSFULLY LOADED."
        );

    }


    /* =====================================================
       CATEGORÍA NORMAL
    ===================================================== */

    else {

        if (modalTemplateInfo) {

            modalTemplateInfo.style.display =
                "none";

        }


        if (modalDefaultInfo) {

            modalDefaultInfo.style.display =
                "";

        }


        actualizarModalElemento(
            modalDefaultFile,
            nombreAsset,
            nombreAsset
        );


        actualizarModalElemento(
            modalDefaultType,
            "DIGITAL EDIT",
            "DIGITAL EDIT"
        );


        actualizarModalElemento(
            modalStatus,
            datos?.status,
            "ARCHIVED"
        );

        /* ARCHIVED EN VERDE */
        if (modalStatus) {

            modalStatus.style.color = "#00ff66";

        }


        actualizarModalElemento(
            modalQuality,
            datos?.quality,
            "HIGH"
        );


        actualizarModalElemento(
            modalMessage,
            datos?.message,
            "CLICK THE IMAGE TO VIEW IT FULLSCREEN."
        );

    }


    modal.classList.add(
        "active"
    );


    if (modalOverlay) {

        modalOverlay.classList.add(
            "active"
        );

    }


    if (modalWindow) {

        modalWindow.classList.add(
            "active"
        );

    }


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   ABRIR VISTA COMPLETA
========================================================= */

function abrirVistaCompleta() {

    if (
        !modalImage ||
        !fullscreenViewer ||
        !fullscreenImage
    ) {

        console.warn(
            "No se encontraron los elementos de vista completa."
        );

        return;

    }


    if (
        !modalImage.src ||
        modalImage.naturalWidth === 0
    ) {

        console.warn(
            "La imagen del modal todavía no está cargada."
        );

        return;

    }


    fullscreenImage.src =
        modalImage.currentSrc ||
        modalImage.src;


    fullscreenImage.alt =
        modalImage.alt ||
        "Vista completa";


    fullscreenViewer.classList.add(
        "active"
    );


    fullscreenViewer.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    if (closeFullscreen) {

        closeFullscreen.style.display =
            "block";

    }

}


/* =========================================================
   CERRAR VISTA COMPLETA
========================================================= */

function cerrarVistaCompleta() {

    if (fullscreenViewer) {

        fullscreenViewer.classList.remove(
            "active"
        );

        fullscreenViewer.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (fullscreenImage) {

        fullscreenImage.removeAttribute(
            "src"
        );

    }


    if (
        modal &&
        modal.classList.contains("active")
    ) {

        document.body.style.overflow =
            "hidden";

    }

    else if (
        gallery &&
        gallery.classList.contains("active")
    ) {

        document.body.style.overflowY =
            "auto";

        document.body.style.overflowX =
            "hidden";

    }

    else {

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarModal() {

    cerrarVistaCompleta();


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }


    if (modalOverlay) {

        modalOverlay.classList.remove(
            "active"
        );

    }


    if (modalWindow) {

        modalWindow.classList.remove(
            "active"
        );

    }


    if (
        gallery &&
        gallery.classList.contains("active")
    ) {

        document.body.style.overflowY =
            "auto";

        document.body.style.overflowX =
            "hidden";

    }

    else {

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
   CLICK IMAGEN DEL MODAL
========================================================= */

if (modalImage) {

    modalImage.addEventListener(
        "click",
        event => {

            event.preventDefault();

            event.stopPropagation();

            abrirVistaCompleta();

        }
    );

}


/* =========================================================
   BOTÓN X FULLSCREEN
========================================================= */

if (closeFullscreen) {

    closeFullscreen.addEventListener(
        "click",
        event => {

            event.preventDefault();

            event.stopPropagation();

            cerrarVistaCompleta();

        }
    );

}


/* =========================================================
   CLICK FONDO FULLSCREEN
========================================================= */

if (fullscreenViewer) {

    fullscreenViewer.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                fullscreenViewer
            ) {

                event.preventDefault();

                cerrarVistaCompleta();

            }

        }
    );

}


/* =========================================================
   BOTÓN X MODAL
========================================================= */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        event => {

            event.preventDefault();

            event.stopPropagation();

            cerrarModal();

        }
    );

}


/* =========================================================
   CLICK OVERLAY MODAL
========================================================= */

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modalOverlay
            ) {

                event.preventDefault();

                cerrarModal();

            }

        }
    );

}


/* =========================================================
   NAVEGACIÓN DE IMÁGENES
========================================================= */

function cambiarImagen(
    direccion
) {

    if (!categoriaActual) {
        return;
    }


    const lista =
        imagenes[categoriaActual];


    if (
        !lista ||
        lista.length === 0
    ) {

        return;

    }


    if (
        fullscreenViewer &&
        fullscreenViewer.classList.contains("active")
    ) {

        cerrarVistaCompleta();

    }


    imagenActual +=
        direccion;


    if (imagenActual < 0) {

        imagenActual =
            lista.length - 1;

    }


    if (
        imagenActual >=
        lista.length
    ) {

        imagenActual =
            0;

    }


    abrirModal(
        lista[imagenActual],
        imagenActual
    );

}


/* =========================================================
   PREVIOUS / NEXT
========================================================= */

const modalFooter =
    document.querySelector(
        ".modal-footer"
    );


if (modalFooter) {

    const modalButtons =
        modalFooter.children;


    if (
        modalButtons.length >= 3
    ) {

        modalButtons[0].addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();

                cambiarImagen(-1);

            }
        );


        modalButtons[2].addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();

                cambiarImagen(1);

            }
        );

    }

}


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /* =================================================
           ESC - FULLSCREEN
        ================================================= */

        if (
            event.key === "Escape" &&
            fullscreenViewer &&
            fullscreenViewer.classList.contains("active")
        ) {

            event.preventDefault();

            cerrarVistaCompleta();

            return;

        }


        /* =================================================
           ESC - MODAL
        ================================================= */

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            event.preventDefault();

            cerrarModal();

            return;

        }


        /* =================================================
           MODAL - FLECHA IZQUIERDA
        ================================================= */

        if (
            modal &&
            modal.classList.contains("active")
        ) {

            if (
                event.key === "ArrowLeft"
            ) {

                event.preventDefault();

                cambiarImagen(-1);

                return;

            }


            /* =============================================
               MODAL - FLECHA DERECHA
            ============================================= */

            if (
                event.key === "ArrowRight"
            ) {

                event.preventDefault();

                cambiarImagen(1);

                return;

            }

        }


        /* =================================================
           ESC - GALERÍA
        ================================================= */

        if (
            event.key === "Escape" &&
            gallery &&
            gallery.classList.contains("active")
        ) {

            volverMenu();

            return;

        }


        /* =================================================
           ESC - TEMPLATES
        ================================================= */

        if (
            event.key === "Escape" &&
            templatesMenu &&
            templatesMenu.classList.contains("active")
        ) {

            volverDesdeTemplates();

        }

    }
);


/* =========================================================
   VOLVER DESDE GALERÍA
========================================================= */

function volverMenu() {

    playSound(soundBack);


    /* =====================================================
       FULLSCREEN
    ===================================================== */

    if (
        fullscreenViewer &&
        fullscreenViewer.classList.contains("active")
    ) {

        cerrarVistaCompleta();

    }


    /* =====================================================
       MODAL
    ===================================================== */

    if (
        modal &&
        modal.classList.contains("active")
    ) {

        cerrarModal();

    }


    /* =====================================================
       GALERÍA
    ===================================================== */

    if (gallery) {

        gallery.classList.remove(
            "active"
        );

        gallery.style.display =
            "none";

    }


    if (loadingScreen) {

        loadingScreen.classList.remove(
            "active"
        );

    }


    document.body.style.overflow =
        "";


    /* =====================================================
       GALERÍA DESDE TEMPLATES
    ===================================================== */

    if (
        origenGaleria ===
        "templates"
    ) {

        if (templatesMenu) {

            templatesMenu.style.display =
                "block";

            templatesMenu.classList.add(
                "active"
            );

        }


        if (menu) {

            menu.style.display =
                "none";

        }


        if (intro) {

            intro.style.display =
                "none";

        }


        window.scrollTo({

            top: 0,

            behavior: "auto"

        });


        return;

    }


    /* =====================================================
       GALERÍA NORMAL
    ===================================================== */

    if (menu) {
        menu.style.display = "";
    }

    if (intro) {
        intro.style.display = "";
    }


    if (menu) {

        window.scrollTo({

            top:
                menu.offsetTop,

            behavior:
                "smooth"

        });

    }

}


if (backBtn) {

    backBtn.addEventListener(
        "click",
        volverMenu
    );

}

/* =========================================================
   CURSOR PIXEL
========================================================= */

const cursor =
    document.getElementById(
        "pixelCursor"
    );


if (cursor) {

    document.addEventListener(
        "mousemove",
        event => {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

        }
    );

}


/* =========================================================
   HOVER
========================================================= */

function configurarHover() {

    const hoverElements =
        document.querySelectorAll(
            "button, a, .stage-card, .template-card, .asset-card"
        );


    hoverElements.forEach(
        element => {

            if (
                element.dataset.hoverConfigured ===
                "true"
            ) {

                return;

            }


            element.dataset.hoverConfigured =
                "true";


            element.addEventListener(
                "mouseenter",
                () => {

                    document.body.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    document.body.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        }
    );

}


configurarHover();


/* =========================================================
   PARTÍCULAS
========================================================= */

const canvas =
    document.getElementById(
        "particles"
    );


if (canvas) {

    const ctx =
        canvas.getContext("2d");


    let particles = [];


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    function crearParticulas() {

        particles = [];


        const cantidad =
            window.innerWidth < 700
                ? 45
                : 100;


        for (
            let i = 0;
            i < cantidad;
            i++
        ) {

            particles.push({

                x:
                    Math.random() *
                    canvas.width,

                y:
                    Math.random() *
                    canvas.height,

                size:
                    Math.random() > 0.7
                        ? 2
                        : 1,

                speedX:
                    (
                        Math.random() -
                        0.5
                    ) * 0.25,

                speedY:
                    (
                        Math.random() -
                        0.5
                    ) * 0.25,

                alpha:
                    Math.random() *
                    0.6 +
                    0.2

            });

        }

    }


    resizeCanvas();

    crearParticulas();


    window.addEventListener(
        "resize",
        () => {

            resizeCanvas();

            crearParticulas();

        }
    );


    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(
            p => {

                p.x +=
                    p.speedX;

                p.y +=
                    p.speedY;


                if (p.x < 0) {
                    p.x = canvas.width;
                }


                if (
                    p.x >
                    canvas.width
                ) {

                    p.x = 0;

                }


                if (p.y < 0) {
                    p.y = canvas.height;
                }


                if (
                    p.y >
                    canvas.height
                ) {

                    p.y = 0;

                }


                ctx.globalAlpha =
                    p.alpha;

                ctx.fillStyle =
                    "#00f6ff";


                ctx.fillRect(

                    Math.floor(p.x),

                    Math.floor(p.y),

                    p.size,

                    p.size

                );

            }
        );


        ctx.globalAlpha = 1;


        requestAnimationFrame(
            animateParticles
        );

    }


    animateParticles();

}


/* =========================================================
   RESTART
========================================================= */

if (restartBtn) {

    restartBtn.addEventListener(
        "click",
        () => {

            playSound(soundBack);


            cerrarVistaCompleta();

            cerrarModal();


            if (gallery) {

                gallery.classList.remove(
                    "active"
                );

                gallery.style.display =
                    "none";

            }


            if (templatesMenu) {

                templatesMenu.classList.remove(
                    "active"
                );

                templatesMenu.style.display =
                    "none";

            }


            if (menu) {
                menu.style.display = "";
            }


            if (intro) {
                intro.style.display = "";
            }


            document.body.style.overflow =
                "";


            categoriaActual =
                null;

            imagenActual =
                0;

            origenGaleria =
                "menu";


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   GLITCH ALEATORIO
========================================================= */

setInterval(
    () => {

        const logo =
            document.querySelector(
                ".logo"
            );


        if (!logo) {
            return;
        }


        if (
            Math.random() > 0.7
        ) {

            logo.style.transform =
                `translateX(${
                    Math.random() * 8 - 4
                }px)`;


            setTimeout(
                () => {

                    logo.style.transform =
                        "";

                },
                80
            );

        }

    },
    2500
);


/* =========================================================
   CONSOLA
========================================================= */

console.log(`
╔══════════════════════════════════╗
║        PIXEL ARCHIVE             ║
║        SYSTEM ONLINE             ║
║                                  ║
║        PLAYER 01                 ║
║        GRAPHICS READY            ║
║        MEMORY OK                 ║
╚══════════════════════════════════╝
`);
