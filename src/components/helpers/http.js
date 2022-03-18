const sendRequest = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res;
};

export default async dataObj => {
  const data = { ...dataObj };
  try {
    const res = await sendRequest(
      'https://hook.integromat.com/c4imvqj7kp8ixzlkkzzqarr5urqqm16y',
      data,
    );

    if (res.ok) {
      return {
        text: '送信しました。',
        success: true,
      };
    }

    const errorData = {
      location: 'OliAncho-LP',
      status: res.status,
      message: await res.text(),
      data,
    };
    sendRequest(
      'https://hook.integromat.com/gw1p8kleez6bnajn4ehglfrxo9kxjvcz',
      errorData,
    );
    throw new Error();
  } catch (err) {
    sendRequest(
      'https://hook.integromat.com/gw1p8kleez6bnajn4ehglfrxo9kxjvcz',
      err,
    );
    return {
      text:
        '何らかの理由で送信できませんでした。\n時間を置いて再度お送り頂くか、\nSNSを通じてご連絡ください。',
      success: false,
    };
  }
};
