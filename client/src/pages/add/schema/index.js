import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  imgUrl: Yup.string()
      .min(2, 'Too Short!')
      .max(280, 'Too Long!')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      position: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
  });