module.exports = ({ request, method = 'get', params = {}, option = {} }) => {
  let options = Object.assign(option, {
    headers: {
      referer: `https://y.qq.com/n/yqq/singer/${params.singermid}.html`,
      host: 'y.qq.com',
    },
    params,
  });
  return request('/cgi-bin/musicu.fcg', method, options, true);
}