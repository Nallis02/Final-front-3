import { FaqsType, faqsData } from 'dh-marvel/components/faqs/faqsData';
import { NextApiRequest, NextApiResponse } from 'next';

type data = FaqsType[] | {message: string};

export default async function handler(req: NextApiRequest, res: NextApiResponse<data>) {
  if (req.method === 'GET') {
    res.status(200).json(faqsData)
  }else{
    res.status(400).json({message: 'No estas autorizado para ver esta informacion'})
  }
}