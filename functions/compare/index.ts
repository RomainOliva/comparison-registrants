import { Handler } from '@netlify/functions';
// import parser from 'lambda-multipart-parser';
import axios from 'axios';

const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
};

export const handler: Handler = async event => {
  const queryParams = event.queryStringParameters || {};
  if (!queryParams.codeEvent) {
    return getErrorReturn(
      422,
      '"codeEvent" query param is missing'
    );
  }
  
  const { data: internationalRegistrants } = await axios.get(
    `https://es3-api.fei.org/user/shows/${queryParams.codeEvent}/entries?page=1&items_per_page=5000&no_pagination=1`,
    {
      headers: {
        'Accept-language': 'en',
        Authorization: "Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6MTAyNzkxNTAsImhhc1Bob3RvIjpmYWxzZSwic291cmNlU2Vzc2lvblVzZXIiOm51bGwsImNvbXBldEZvck5mTm9jIjpudWxsLCJzb3VyY2VVc2VyIjp7InVzZXJuYW1lIjoid2ViX2FwcCJ9LCJmaXJzdG5hbWUiOiJEb3JpYW4iLCJmYW1pbHluYW1lIjoiR0FJTExBQyIsImdlbmRlciI6Ik0iLCJhZG1OZk5vYyI6bnVsbCwiaXNDb25zdWx0IjpmYWxzZSwiY2FuQWN0QXMiOlsib2MiXSwicGVybWlzc2lvbnMiOlsiT0NfRVNfQURNIl0sImFjdEFzIjoib2MiLCJleHAiOjE2NTQyNTU1NzYsImlhdCI6MTY1MzM5MTU3Nn0.dE-2KL7bZDodwxXZEs7BGLnE5q6o1350hPoYvL0F8dH4DUk9_V1sqLyi0eXPMg16ETrQ20GtfJkP902l6OE_gtuRD6cKOyk9NRsmGhJdcsiR0PN2orS5FQywt-BZ0_W_jh6_q2fok4OeOXyo-8tlkTxrrIXF9X39vILF6G9TYY84Bx001uUsIRlllOW7_6E01PAqncu39xY_BEZccLCJI0kWh5lY4dD9SyrYJvNR_fHA83Tc6t5EVyvZSFwxytyzHc2J7R1am5kc6ideldV0Gbw7OdMqEHH3E5ckRQlKmSP2SyCKJSn5if9IxGy3-uXygfaXuosBpaqo8xrKEl8z3FA94slw3QwJxbIijs4IMlBLxsMxBx46_cVuXuqLjjmQTNa-ismCroBvn6LkhcP00bI9bH0XfvypRi6WdXBEstyqUaqOauU71KwViOAq-5lVkkqDDJLoJ1m5mnGQDUGr7dpplxohAq0HoNx8Nbi6k1SAEiBAr86n1-2LHBSOS3rIF56LmKnad4nYMnWbVZOZnvvbQY4hw5asvmF6pKWIWQdPEw8aLFScacxAQzT-V7iv_sQKJ6_D0VTQjMBKbgvFrVg_8XVRxY1_BzLs8dw-3T5RKoYTNwr5HKSyRFCLIRHH883zIgAO2xNxG6ejqUMIz52ASka9_p4X-hn5sj8Qwjo",
      },
    },
  );
  const atlhetes = internationalRegistrants.map((regristrant: any) => {
    return {
      lastname: regristrant.entry_athletes.athlete.familyname,
      firstname: regristrant.entry_athletes.athlete.firstname,
    }
  })
  console.log("🚀 ~ file: index.ts ~ line 30 ~ internationalRegistrants", atlhetes)

  // Call mongo service to get profile
  try {

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify('toto'),
    };
  } catch (error: any) {
    const statusCode = error.statusCode ? error.statusCode : 400;
    const message = error.message ? error.message : error;
    return getErrorReturn(statusCode, message);
  }
};

async function getErrorReturn(
  status: number,
  message: string,
) {
  return {
    statusCode: status,
    headers: HEADERS,
    body: message,
  };
}
