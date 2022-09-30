import { Formik } from "formik";
import { useState} from "react";
import { Form } from "react-router-dom";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    username: Yup.string().email().required(),
    password: Yup.string().min(6).max(10).required(),
})
export const Login = () => {
    const [form, setForm] = useState({username:'',password:''});
    
    return (
        <div className="container">
            <Formik
            initialValues={form}
            enableReinitialize={true}
            validationSchema={loginSchema}
            onSubmit={value => {

            }}
            >
                {
                    ({ Errors

                    })
                }
            <Form>
                <Field name="username" type="text"></Field>
                <ErrorMessage component="div" className="text-danger"></ErrorMessage>
            </Form>
            </Formik>
                       
        </div>
    )
    
}
export default Login;
