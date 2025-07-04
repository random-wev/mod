// === Asit ve Baz Modu ===

// Hidroflorik Asit
elements.hydrofluoric_acid = {
    color: "#8ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    boilingPoint: 200,
    reactions: {
        glass: { elem1: null, elem2: "steam" }
    },
    tempHigh: 200,
    stateHigh: "steam"
};

// Nitrik Asit
elements.nitric_acid = {
    color: "#a0d0ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    boilingPoint: 200,
    reactions: {
        meat: { elem1: null },
        iron: { elem1: null },
        copper: { elem1: null }
    },
    tempHigh: 200,
    stateHigh: "steam"
};

// Sülfürik Asit
elements.sulfuric_acid = {
    color: "#c0c000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    boilingPoint: 190,
    reactions: {
        plastic: { elem1: null },
        paper: { elem1: null },
        fabric: { elem1: null },
        soap: { elem1: null },
        wood: { elem1: null }
    },
    tempHigh: 190,
    stateHigh: "steam"
};

// Hidrojen Peroksit
elements.hydrogen_peroxide = {
    color: "#d0f0f0",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    boilingPoint: 170,
    reactions: {
        blood: { elem2: "strong_acid" },
        dirty_water: { elem2: "strong_acid" },
        rust: { elem2: "strong_acid" },
        infection: { elem2: "strong_acid" }
    },
    tempHigh: 170,
    stateHigh: "steam"
};

// Sodyum Hidroksit (Katı)
elements.sodium_hydroxide = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    reactions: {
        water: { elem1: "sodium_hydroxide_solution", elem2: null }
    }
};

// Sıvı Sodyum Hidroksit
elements.sodium_hydroxide_solution = {
    color: "#c0ffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    reactions: {
        aluminum: { elem1: null, elem2: "hydrogen" },
        plant: { elem1: null },
        grass: { elem1: null },
        flower: { elem1: null }
    }
};

// Güçlü Asit (Peroksit Tepkimesi)
elements.strong_acid = {
    color: "#ff0000",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    reactions: {
        iron: { elem1: null },
        copper: { elem1: null },
        wood: { elem1: null },
        plastic: { elem1: null }
    }
};