export const formatTitle = (title) => {
    const lowerCaseTitle = title.toLowerCase();
    return `${lowerCaseTitle.charAt(0).toUpperCase()}${lowerCaseTitle.slice(1)}`;
};

export const removeItemFromArray = (array, id) => {
    if (id && array.length > 0) {
        return array.filter((element) => element.id !== id);
    }
};