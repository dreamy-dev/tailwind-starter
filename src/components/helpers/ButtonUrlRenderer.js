const ButtonUrlRenderer = (data) => {
    if (data.linktype == "story") {
        const anchor = data.anchor ? `#${data.anchor}` : ''
        return `/${data?.story?.full_slug}${anchor}` || "/"
    }
    if (data.linktype == "url") {
        return data?.url || "/"
    }
    if (data.fieldtype == "asset") {
        return data?.filename
    }
    if (data.linktype == "asset") {

    }
    if (data.linktype == "email") {

    }
    return data
};

export default ButtonUrlRenderer;
