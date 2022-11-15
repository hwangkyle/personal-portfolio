import '../css/Title.css';

export default function Title({ text }) {
    return (
        <div className="Title" id={text}>
            <h1>{text}</h1>
        </div>
    );
}

function resizeMargin() {
    const els = document.querySelectorAll('.Title');
    els.forEach(el => el.style.margin = `0 ${el.offsetWidth/4 + 10}px`);
}

window.addEventListener('load', resizeMargin);
window.addEventListener('resize', resizeMargin);