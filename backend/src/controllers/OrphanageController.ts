import { Request, Response } from 'express'

import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'
import orphanageView from '../views/orphanage_view'
import * as Yup from 'yup'

export default {

    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })
        return response.json(orphanageView.renderMany(orphanages))
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        const orphanagesRepository = getRepository(Orphanage)
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })
        return response.json(orphanageView.render(orphanage))
    },

    async create(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage);
    
        const requestImages = req.files as Express.Multer.File[];
    
        const images = requestImages.map((image) => {
          return { path: image.filename };
        });
    
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          latitude: Yup.number().required(),
          longitude: Yup.number().required(),
          about: Yup.string().required().max(300),
          instructions: Yup.string().required(),
          opening_hours: Yup.string().required(),
          open_on_weekends: Yup.boolean().required(),
          images: Yup.array(
            Yup.object().shape({
              path: Yup.string().required(),
            })
          ),
        });
    
        let { open_on_weekends } = req.body;
        open_on_weekends = open_on_weekends.toLowerCase() === 'true';
    
        await schema.validate(
          { ...req.body, open_on_weekends, images },
          { abortEarly: false }
        );
    
        const orphanage = orphanagesRepository.create({
          ...req.body,
          open_on_weekends,
          images,
        });
    
        await orphanagesRepository.save(orphanage);
    
        return res.status(201).json(orphanage);
      },
}