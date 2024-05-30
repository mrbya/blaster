import axios from "axios";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function akafuka(): Promise<void> {
  while(true) {
    axios({
      method: 'post',
      url: 'http://10.188.9.178:1880/blinkity',
      responseType: 'text'
    }).then(function (response) {
      console.log(response.status);
    });

    await sleep(100);
  }
}

akafuka();
