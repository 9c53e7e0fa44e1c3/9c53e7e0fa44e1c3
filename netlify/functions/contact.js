exports.handler = async function(event, context) {
  // 检查请求方法是否为 GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,  // 如果不是 GET 请求，返回 405 Method Not Allowed
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  // 处理 GET 请求，返回简单的响应
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, this is a GET request response!' }),
  };
};