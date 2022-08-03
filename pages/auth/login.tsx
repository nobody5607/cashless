import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { LoginForm, RegisterForm, ResultLogin, User } from "@/models/auth.model";
import { loginFunc } from "@/redux/auth/login.slice";

const Register: NextPage = ({ }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('home');
  const router = useRouter();
  //redux
  const dispatch = useAppDispatch();
  //hook form
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const onSubmit = handleSubmit(data => {
    dispatch(loginFunc(data)).unwrap()
      .then(async response => {
        const result: ResultLogin = response;

        if (result.status === 'ok') {

          localStorage.setItem('token', result.token);
          const user_id = result.data?.user_id ? result.data?.user_id : '';
          const full_name = result.data?.full_name ? result.data?.full_name : '';

          localStorage.setItem('id', user_id.toString());
          localStorage.setItem('full_name', full_name.toString());

          console.log(result.data);
          router.push('/dashboard');

        } else {
          console.log('login fai');
          //login fai
        }
        // router.push(href)
      })
      .catch(err => {
        alert(err);
      });

  });

  React.useEffect(() => {
    setValue('phone', '09739849584');
    setValue('password', '123456');
  });
  return (


    <div>
      <h1> Login {t('home')}</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label>เบอร์โทรศัพท</label>
          <input {...register("phone", { required: true })} />
          {errors.phone?.type === 'required' && "เบอร์โทรศัพท ต้องไม่ว่างเปล่า"}
        </div>
        <div>
          <label>รหัสผ่าน</label>
          <input {...register("password", { required: true })} />
          {errors.password?.type === 'required' && "รหัสผ่าน ต้องไม่ว่างเปล่า"}
        </div>
        <button type="submit" >
          Login
        </button>
      </form>
    </div>


  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home']))
    }
  };
};
export default Register;


