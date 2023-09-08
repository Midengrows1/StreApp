import { Form, Input, Button, Checkbox, Alert, Space } from "antd";
import { useDispatch } from "react-redux";
import { authUser } from "../store/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
const metaUrl = import.meta.env.VITE_TEST_VAR;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const getLS = localStorage.getItem("userToken");
  useEffect(() => {
    if (getLS) {
      dispatch(authUser(getLS));
      navigate("/");
    }
  });

  const isAuthUser = async (username, password) => {
    try {
      const { data } = await axios.post(`${metaUrl}auth/login`, {
        username: username,
        password: password,
      });
      dispatch(authUser(data.token));
      localStorage.setItem("userToken", data.token);
      navigate("/");
    } catch (error) {
      if (error) {
        console.log("Ошибка дружок");
        toast("Ошибка дружок");
      }
    }
  };

  const onFinish = (values) => {
    isAuthUser(values.username, values.password);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="kminchelle"
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите логин!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="0lelplR"
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
      <Toaster />
    </Form>
  );
};

export default LoginPage;
