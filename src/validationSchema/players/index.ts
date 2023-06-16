import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  performance: yup.string(),
  skills: yup.string(),
  growth: yup.string(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
});
