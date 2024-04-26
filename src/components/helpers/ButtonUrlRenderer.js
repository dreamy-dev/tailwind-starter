const ButtonUrlRenderer = (data) => {
    if (data.linktype == "story") {
        return data?.story?.full_slug || "/"
    }
    if (data.linktype == "url") {
        return data?.url || "/"
    }
    if (data.linktype == "asset") {

    }
    if (data.linktype == "email") {

    }
};

export default ButtonUrlRenderer;
