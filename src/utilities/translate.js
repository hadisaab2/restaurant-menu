const googleTranslate = require("@vitalets/google-translate-api").default;

export const translateForm = async (formData, targetLang = "ar") => {
    const translatedComponents = await Promise.all(
        formData.components.map(async (component) => {
            const translatedLabel = await googleTranslate(component.label, { to: targetLang });

            const translatedValues = component.values
                ? await Promise.all(
                    component.values.map(async (value) => ({
                        ...value,
                        label: (await googleTranslate(value.label, { to: targetLang })).text
                    }))
                )
                : component.values;

            return {
                ...component,
                label: translatedLabel.text,
                values: translatedValues
            };
        })
    );

    return { ...formData, components: translatedComponents };
};
