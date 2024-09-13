// const admin = require('firebase-admin');
// admin.initializeApp();

// const db = admin.firestore();

// exports.handler = async function(event, context) {
//   const data = JSON.parse(event.body);
//   await db.collection('contacts').add(data);

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Form submission received and saved!" })
//   };
// };

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

// exports.handler = async function (event, context) {
//   // 检查请求方法，确保是POST请求
//   if (event.httpMethod !== "POST") {
//     return {
//       statusCode: 405,
//       body: JSON.stringify({ message: "Method Not Allowed" }),
//     };
//   }

//   // 解析传递的数据
//   const formData = JSON.parse(event.body);

//   // 简单打印表单数据（可以替换为其他处理逻辑，如存储到数据库）
//   console.log("Received Form Data:", formData);

//   // 返回响应，表示数据接收成功
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Form submission received!" }),
//   };
// };
