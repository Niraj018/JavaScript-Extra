for (var domElement of document.querySelectorAll('*'));{
    domElement.addEventListener('click', () => {
        alert(`Capturing: ${domElement.tagName}`)},true);

        domElement.addEventListener('click', () => {
        alert(`Bubbling: ${domElement.tagName}`)},false);
}