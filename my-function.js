exports.handler = async (event) => {
    // TODO implement
    var ip,op
    ip = event["keyword"];
    op = "Deepthi Mellam says "+ip;
    const response = {
        statusCode: 200,
        body: JSON.stringify(op),
    };
    return response;
};
