const centrePage = () => {
    let centre = document.getElementById('centre');
    window.scrollTo(centre.offsetLeft - 100, 0);
}
// document.onload(centrePage);

const focusOnPickButton = () => {

    document.getElementById("pick-form").focus();
}

// pickButton.focus();
// }