runAfterLoad(function() {
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

    elements.sodium_hydroxide = {
        color: "#ffffff",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        reactions: {
            water: { elem1: "sodium_hydroxide_solution", elem2: null }
        }
    };

    elements.sodium_hydroxide_solution = {
        color: "#c0ffff",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid"
    };
});
