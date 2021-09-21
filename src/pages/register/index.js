import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField } from '@material-ui/core';

const Register = ({ setName }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo Obrigatório'),
    password: yup
      .string()
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!'
      )
      .required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas devem ser iguais')
      .required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    setName(data.name);
    history.push('/home');
  };

  return (
    <div className="divForm">
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            label="Name"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
        <div>
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div>
          <TextField
            label="Password"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div>
          <TextField
            label="Confirm password"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
        </div>
        <div className="divButton">
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
