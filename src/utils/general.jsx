export const toggleFill = (element) => {
    if (element.tagName === "path") {
        element = element.parentElement; // Отримуємо `svg`, якщо клік був на `path`
    }

    if (element.getAttribute("fill") === "currentColor") {
        element.setAttribute("fill", "none");
        element.setAttribute("stroke", "white"); // Додаємо чорний контур
        element.setAttribute("stroke-width", "1.5"); // Товщина контуру
    } else {
        element.setAttribute("fill", "currentColor");
        element.removeAttribute("stroke"); // Видаляємо контур при заповненні
    }
};
