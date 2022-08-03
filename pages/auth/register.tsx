//  import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useForm } from "react-hook-form";

// import { useSelector } from 'react-redux';
import {registerFunc } from "@/redux/auth/register.slice";
import { useAppDispatch } from "@/redux/store";
import { RegisterForm } from "@/models/auth.model";

const Register: NextPage = ({ }) => {
  const { t } = useTranslation('home');
  //redux
  const dispatch = useAppDispatch();
  // const { data,status,message } = useSelector(registerSelector);
  //hook form
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
  const onSubmit = handleSubmit(data => {
    dispatch(registerFunc(data)).unwrap()
      .then(async response => {
        console.log(response, 'Register');
      })
      .catch(err => {
        alert(err);
      });

  });
  return (


    <div>
      <h1> Register {t('home')}</h1>

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
        <div>
          <label>Line ID</label>
          <input {...register("line_id", { required: true })} />
          {errors.line_id?.type === 'required' && "Line ต้องไม่ว่างเปล่า"}
        </div>
        <div>
          <label>ชื่อ-นามสกุล</label>
          <input {...register("full_name", { required: true })} />
          {errors.full_name?.type === 'required' && "ชื่อ-นามสกุล ต้องไม่ว่างเปล่า"}
        </div>
        <div>
          <label>ชื่อบัญชี</label>
          <input {...register("bank_account", { required: true })} />
          {errors.bank_account?.type === 'required' && "ชื่อบัญชี ต้องไม่ว่างเปล่า"}
        </div>

        <div>
          <label>เลขที่บัญชี</label>
          <input {...register("bank_number", { required: true })} />
          {errors.bank_number?.type === 'required' && "ชื่อบัญชี ต้องไม่ว่างเปล่า"}
        </div>
        <div>
          <label>ธนาคาร</label>
          <select
            {...register("bank_code", { required: true })}
            style={{ width: "180px" }}
          >
            <option value="">เลือกธนาคาร</option>
            <option value="002">ธนาคารกรุงเทพ จำกัด(มหาชน)</option>
            <option value="004">บริษัทธนาคารกสิกรไทย จำกัด (มหาชน)</option>
          </select>
          {errors.bank_code && <span>This field is required</span>}

        </div>



        <button type="submit" >
          Register
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


