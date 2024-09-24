// 회원가입 페이지
import React, { useState } from "react";
import Logo from "../common/Logo";

function JoinPage() {
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    email: "",
    name: "",
    phone: "",
    ageConsent: false,
    termsAgree: false,
    dataConsent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.id) newErrors.id = "ID is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.passwordConfirm)
      newErrors.passwordConfirm = "Passwords do not match";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.ageConsent)
      newErrors.ageConsent = "You must be at least 14 years old";
    if (!form.termsAgree) newErrors.termsAgree = "You must agree to the terms";
    if (!form.dataConsent)
      newErrors.dataConsent = "You must agree to data processing";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log("Form submitted:", form);
    }
  };

  return (
    <div className="mb-16 mt-5 flex h-screen items-center justify-center">
      <div className="">
        <a href="/">
          <Logo />
        </a>
        <form
          onSubmit={handleSubmit}
          className="w-[330px] rounded-lg bg-white p-5 shadow-md"
        >
          <h2 className="mb-2 text-lg font-medium text-black">회원가입</h2>
          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              placeholder="아이디"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.id && <p className="error-text">{errors.id}</p>}
          </div>

          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="password"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={handleChange}
              placeholder="비밀번호 확인"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.passwordConfirm && (
              <p className="error-text">{errors.passwordConfirm}</p>
            )}
          </div>

          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="text"
              name="birth"
              value={form.birth}
              onChange={handleChange}
              placeholder="생년월일"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="mb-4 h-10 overflow-hidden rounded border border-gray-300">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="휴대폰 번호"
              className="box-border h-full w-full p-2 text-sm text-black"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <h2 className="mb-2 font-medium text-black">이용약관 동의</h2>

          <div className="h-200 mb-4 justify-center overflow-hidden rounded border border-gray-300 bg-gray-100 p-2">
            <div className="flex h-5 w-full items-center justify-end text-black">
              <input
                type="checkbox"
                name="allCheck"
                id="allCheck"
                checked={form.allCheck} // 전체동의 체크박스를 누르면 모든 체크박스 체크
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label htmlFor="allCheck" className="w-full p-2 text-xs">
                전체동의
              </label>
            </div>
            <hr className="boder-t my-2 border-gray-300" />
            <div className="flex h-5 w-full items-center justify-end text-gray-500">
              <input
                type="checkbox"
                name="years_14_more"
                id="years_14_more"
                checked={form.allCheck}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label htmlFor="years_14_more" className="w-full p-2 text-xs">
                만 14세 이상입니다
                <label className="text-xs text-red-500"> (필수)</label>
              </label>
            </div>
            <hr className="boder-t my-2 border-gray-300" />
            <div className="flex h-5 w-full items-center justify-end text-gray-500">
              <input
                type="checkbox"
                name="use_terms_agree"
                id="use_terms_agree"
                checked={form.allCheck}
                onChange={handleChange}
                className="h-5 w-5"
              />
              <label htmlFor="use_terms_agree" className="w-full p-2 text-xs">
                만 14세 이상입니다
                <label className="text-xs text-red-500"> (필수)</label>
              </label>
              <a
                href="/"
                className="ml-auto whitespace-nowrap text-xs text-gray-500 underline"
              >
                내용보기
              </a>
            </div>
            <hr className="boder-t my-2 border-gray-300" />
            <div className="flex h-5 w-full items-center justify-end text-gray-500">
              <input
                type="checkbox"
                name="personal_info_agree"
                id="personal_info_agree"
                checked={form.allCheck}
                onChange={handleChange}
                className="h-5 w-5"
              />
              <label
                htmlFor="personal_info_agree"
                className="w-full p-2 text-xs"
              >
                개인정보 수집·이용 동의
                <label className="text-xs text-red-500"> (필수)</label>
              </label>
              <a
                href="/"
                className="ml-auto whitespace-nowrap text-xs text-gray-500 underline"
              >
                내용보기
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded border-none bg-gray-700 p-2 text-white"
          >
            가입완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinPage;
