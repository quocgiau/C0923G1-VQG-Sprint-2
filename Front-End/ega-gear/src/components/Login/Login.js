import {Helmet} from "react-helmet";
import HeaderUser from "../Header/HeaderUser";
import Footer from "../Footer/Footer";
import "../Css/Index.css"
import "./LoginCss.css"
function Login(){
    return(
        <>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <HeaderUser/>
            <div>
                <section className="section section-main-login">
                    <div className="container">
                        <div className="grid grid-cols-1  lg:grid-cols-custom justify-center gap-gutter log-in-1">
                            <div className="bg-background rounded-lg px-3 py-4 md:p-6 mb-6">
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <h1 className="text-h4 font-semibold mb-2">Đăng nhập tài khoản</h1>
                                        <p className="mb-0">
                                            Bạn chưa có tài khoản ?
                                            <a href="Reg.html" className="link log-in-2"> Đăng ký tại
                                                đây</a>
                                        </p>
                                    </div>
                                    <div>
                                        <div id="login" className="space-y-3">
                                            <form method="post" action="/account/login" id="customer_login" acceptCharset="UTF-8">
                                                <input name="FormType" type="hidden" value="customer_login"></input><input name="utf8"
                                                                                                                   type="hidden"
                                                                                                                           value="true"></input>


                                                    <div className="form-signup space-y-4">
                                                        <fieldset className="form-group">
                                                            <label className="label block mb-1">Email <span className="required">*</span></label>
                                                            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                                   className="form-input " value="" name="email" id="customer_email"
                                                                   placeholder="Email" required=""></input>
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <label className="label block mb-1">Mật khẩu <span className="required">*</span>
                                                            </label>
                                                            <input type="password" className="form-input " value="" name="password"
                                                                   id="customer_password" placeholder="Mật khẩu" required=""></input>
                                        <span className="block mt-2">Quên mật khẩu?
                      <a href="#" className="link underline" onClick="showRecoverPasswordForm();return false;">
                        Nhấn vào đây
                      </a></span>
                                                        </fieldset>

                                                        <div className="mb-3 text-center pt-3">
                                                            <button className="btn bg-primary text-white btn-login w-full font-semibold max-w-[32rem]"
                                                                    type="submit" value="Đăng nhập">
                                                                Đăng nhập
                                                            </button>
                                                        </div>
                                                    </div>
                                            </form>
                                        </div>

                                        <div id="recover-password" className="form-signup page-login text-center log-in-3">
                                            <div className="mb-3">
                                                <h2 className="text-base font-semibold mb-2">Đặt lại mật khẩu</h2>
                                                <p>Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.</p>
                                            </div>

                                            <form method="post" action="/account/recover" id="recover_customer_password"
                                                  acceptCharset="UTF-8"><input name="FormType" type="hidden"
                                                                               value="recover_customer_password"></input><input name="utf8"
                                                                                                                         type="hidden"
                                                                                                                                 value="true"></input>

                                                <div className="form-signup clearfix">
                                                    <fieldset className="form-group">
                                                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                               className="form-input" value="" name="Email" id="recover-email"
                                                               placeholder="Email" required=""></input>
                                                    </fieldset>
                                                </div>

                                                <div className="action_bottom my-3 flex flex-col justify-center items-center gap-3 mt-5">
                                                    <button className="btn bg-primary text-white w-full font-semibold max-w-[32rem] btn-recover "
                                                            type="submit">
                                                        Lấy lại mật khẩu
                                                    </button>
                                                    <a href="#" className="link underline block"
                                                       onClick="hideRecoverPasswordForm();return false;">Quay lại</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export default Login;