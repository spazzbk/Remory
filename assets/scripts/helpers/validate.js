const regExpDic = {
    login: /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
};

export function  validate(el) {
    const regExpName = el.dataset.required;
    console.log(regExpName);
}