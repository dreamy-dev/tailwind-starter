const TrimText = (text, cutValue = 160) => {
    const trimmedString = text.length > cutValue ?
        text.substring(0, cutValue - 3) + "..." :
        text;

    return trimmedString;
}

export default TrimText;