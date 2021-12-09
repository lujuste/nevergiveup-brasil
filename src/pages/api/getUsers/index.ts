// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';

type Data = {
  name: string;
};

export default async function GetUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }

  const body = req.body;

  await fauna.query(
    q.Create(q.Collection('Users'), {
      data: {
        name: body.name,
        email: body.email,
        whatsapp: body.whatsapp,
        cpf: body.cpf,
        data: body.date,
        estado: body.estado,
        bairro: body.bairro,
      },
    })
  );

  return res.status(200).json({ message: 'deu bom!' });
}
