const postData = async (body: any) => {
  console.log(body);

  let response;
  let result = [];
  try {
    response = await fetch('./src/hoc/login/data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 204) {
      result = await response.json();
    }
  } catch (e: any) {
    result = e;
  }

  return result;
};

export default postData;
