function capitalizeWords(str) {
    return str.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}

