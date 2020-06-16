export default (baseUrl, url) => {
    var isInternal = new RegExp('^(\/)|([a-z]+:\/\/|\/\/)?('+ baseUrl +')', 'i');

    return isInternal.test(url);
}