const ButtonUrlRenderer = (data) => {
    // console.log("ButtonUrlRenderer", data)
    if (!data) {
        return '/';
    }
    if (data.linktype && data.linktype == 'story') {
        const anchor = data.anchor ? `#${data.anchor}` : '';
        return `/${data?.story?.full_slug}${anchor}` || '/';
    }
    if (data.linktype && data.linktype == 'asset') {
        if (data.url) {
            return data?.url;
        }
        if (data.fieldtype) {
            return data?.filename;
        }
    }
    if (data.linktype && data.linktype == 'url') {
        return data?.url || '/';
    }
    // if (data.linktype && data.fieldtype == 'asset') {
    //     return data?.filename;
    // }
    // if (data.fieldtype && data.fieldtype == 'asset') {
    //     return data?.filename;
    // }
    if (data.linktype && data.linktype == 'email') {
        return data?.url;
    }
    return '/';
};

export default ButtonUrlRenderer;
