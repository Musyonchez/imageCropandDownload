// api/getImage.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://2022.creativesocialintranet.com/images/bigproduct/shutterstock_3185962342_20220603_092312.jpg', {
      responseType: 'arraybuffer',
    });

    const base64 = Buffer.from(response.data, 'binary').toString('base64');
    const dataUrl = `data:${response.headers['content-type']};base64,${base64}`;

    res.status(200).json({ dataUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
