// Utilidad para el manejo del movimiento del mouse
export const handleMouseMove = (evt, container) => {
    const { clientX, clientY } = evt;
    const { top, left, width, height } = container.getBoundingClientRect();

    const xRotation = -((clientY - top - height / 2) / height) * 5;
    const yRotation = ((clientX - left - width / 2) / width) * 5;
    const transformStyle = `
        perspective(500px)
        scale(1.01)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;

    container.style.transform = transformStyle;
};

export const handleMouseOut = (container) => {
    container.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`;
};
