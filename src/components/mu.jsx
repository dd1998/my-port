
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
cursor.style.left = `${e.pageX}px`; // ตำแหน่งแกน X
cursor.style.top = `${e.pageY}px`;  // ตำแหน่งแกน Y
});
