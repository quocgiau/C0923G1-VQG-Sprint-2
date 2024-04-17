import "../Css/Index.css"
import "./FooterCss.css"
function Footer() {
    return (
        <>
            <footer className="bg-background">
                <div className="container">
                    <div
                        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-gutter gap-y-6 pt-6 pb-3  md:pt-[var(--spacing-10)] md:pb-[var(--spacing-12)]"
                    >
                        <div className="footer-col">

                            <a className="footer-logo mb-3 block" href="/" title="logo EGA Gear">
                                <img
                                    className="object-contain"
                                    loading="lazy"
                                    src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/logo-footer.png?1712722184442"
                                    alt="logo EGA Gear"
                                    width="172"
                                    height="44"
                                ></img>
                            </a>


                            <div className="contact-group mb-5">
                                <div className="flex gap-1 items-start mb-3">
                                    <i className="icon icon-location text-neutral-200"></i>
                                    <div className="">
                                        <p className="text-forground">Địa chỉ</p>
                                        <p className="font-semibold">
                                            <span>70 Lu Gia, District 11, Ho Chi Minh City</span>

                                        </p>
                                    </div>
                                </div>
                                <div className="xl:flex grid gap-2 dis-1">
                                    <div className="flex gap-1 items-start">
                                        <i className="icon icon-call text-neutral-200"></i>
                                        <div className="">
                                            <p className="text-forground">Hotline</p>
                                            <a
                                                className="font-semibold text-primary link"
                                                href="tel:19006750"
                                                title="19006750"
                                            >
                                                19006750 </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 items-start">
                                        <i className="icon icon-sms text-neutral-200"></i>
                                        <div className="">
                                            <p className="text-forground">Email</p>
                                            <a className="font-semibold link"
                                               title="support@sapo.vn"
                                               href="mailto:support@sapo.vn">
                                                support@sapo.vn </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="social-icons">
                                <p className="font-semibold mb-3">Mạng xã hội</p>
                                <div className="flex gap-3">

                                    <div
                                        className="facebook  border border-neutral-50 rounded-sm flex items-center justify-center w-[3.6rem] h-[3.6rem] hover:bg-neutral-50">
                                        <a href="https://www.facebook.com/egany.tech" target="_blank"
                                           aria-label="Facebook"
                                           title="Facebook">
                                            <img
                                                src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/facebook.png?1712722184442"
                                                width="20"
                                                height="20"
                                                alt="facebook footer"
                                                loading="lazy"
                                            ></img>
                                        </a>
                                    </div>


                                    <div
                                        className="youtube border border-neutral-50 rounded-sm flex items-center justify-center w-[3.6rem] h-[3.6rem] hover:bg-neutral-50">
                                        <a
                                            href="https://www.youtube.com/channel/UCh5jj4Q-vqQMdEhwRZAeZMA"
                                            target="_blank"
                                            title="Youtube"
                                            aria-label="Youtube"
                                        >
                                            <img
                                                src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/youtube.png?1712722184442"
                                                width="20"
                                                height="20"
                                                alt="youtube footer"
                                                loading="lazy"
                                            ></img>
                                        </a>
                                    </div>


                                    <div
                                        className="tiktok border border-neutral-50 rounded-sm flex items-center justify-center w-[3.6rem] h-[3.6rem] hover:bg-neutral-50">
                                        <a href="https://www.tiktok.com/" target="_blank" title="Tiktok"
                                           aria-label="Tiktok">
                                            <img
                                                src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/tiktok.png?1712722184442"
                                                width="20"
                                                height="20"
                                                alt="tiktok footer"
                                                loading="lazy"
                                            ></img>
                                        </a>
                                    </div>


                                    <div
                                        className="instgram border border-neutral-50 rounded-sm flex items-center justify-center w-[3.6rem] h-[3.6rem] hover:bg-neutral-50">
                                        <a href="https://www.instagram.com/" target="_blank" title="Instgram"
                                           aria-label="Instgram">
                                            <img
                                                src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/instagram.png?1712722184442"
                                                width="20"
                                                height="20"
                                                alt="instgram footer"
                                                loading="lazy"
                                            ></img>
                                        </a>
                                    </div>


                                    <div
                                        className="instgram border border-neutral-50 rounded-sm flex items-center justify-center w-[3.6rem] h-[3.6rem] hover:bg-neutral-50">
                                        <a href="https://zalo.me/" target="_blank" title="Zalo" aria-label="Zalo">
                                            <img
                                                src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/zalo.png?1712722184442"
                                                width="20"
                                                height="20"
                                                alt="zalo footer"
                                                loading="lazy"
                                            ></img>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="footer-col">
                            <details open className="footer-details">
                                <summary className="text-base font-semibold mb-2 flex items-center justify-between">
                                    Hỗ trợ khách hàng
                                    <i className="icon icon-carret-right inline-block md:hidden"></i>

                                </summary>


                                <ul className="list-menu space-y-4  list-disc pl-3.5">

                                    <li className="li_menu">
                                        <a className="link" href="/he-thong-cua-hang" title="Hệ thống cửa hàng">Hệ thống
                                            cửa hàng</a>
                                    </li>

                                    <li className="li_menu">
                                        <a className="link" href="/cau-hoi-thuong-gap" title="Câu hỏi thường gặp">Câu
                                            hỏi thường gặp</a>
                                    </li>

                                    <li className="li_menu">
                                        <a className="link" href="/apps/kiem-tra-don-hang" title="Kiểm tra đơn hàng">Kiểm
                                            tra đơn
                                            hàng</a>
                                    </li>

                                    <li className="li_menu">
                                        <a className="link" href="/lien-he" title="Liên hệ">Liên hệ</a>
                                    </li>

                                </ul>

                            </details>

                        </div>
                        <div className="footer-col ">
                            <details open className="footer-details">
                                <summary className="text-base font-semibold mb-2 flex items-center justify-between">
                                    Chính sách

                                    <i className="icon icon-carret-right inline-block md:hidden"></i>


                                </summary>


                                <ul className="list-menu space-y-4  list-disc pl-3.5">

                                    <li className="li_menu">
                                        <a className="link" href="/chinh-sach-bao-hanh" title="Chính sách bảo hành">Chính
                                            sách bảo
                                            hành</a>
                                    </li>

                                    <li className="li_menu">
                                        <a className="link" href="/chinh-sach-doi-tra" title="Chính sách đổi trả">Chính
                                            sách đổi trả</a>
                                    </li>

                                    <li className="li_menu">
                                        <a className="link" href="/chinh-sach-bao-mat" title="Chính sách bảo mật">Chính
                                            sách bảo mật</a>
                                    </li>

                                    <li className="li_menu">
                                        <a className="link" href="/chinh-sach-tra-gop" title="Chính sách trả góp">Chính
                                            sách trả góp</a>
                                    </li>

                                </ul>

                            </details>

                            <div className="mt-6">
                                <p className="text-base font-semibold mb-2">
                                    Tổng đài hỗ trợ
                                </p>
                                <ul className=" list-menu space-y-4  list-disc pl-3.5">

                                    <li>
                                        <a className="link" href="tel:19006750" title="Gọi mua hàng: 19006750 (8h-20h)">
                                            Gọi mua hàng: 19006750 (8h-20h)
                                        </a>
                                    </li>


                                    <li>
                                        <a className="link" href="tel:19006750" title="Gọi bảo hành: 19006750 (8h-20h)">
                                            Gọi bảo hành: 19006750 (8h-20h)
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="footer-col">

                            <div className="email-subscribe flex flex-col gap-2">
                                <p className="font-semibold">Đăng ký nhận ưu đãi</p>
                                <p className=" mb-1">
                                    Bạn muốn nhận khuyến mãi đặc biệt? Đăng kí tham gia ngay cộng động hơn 68.000+ người
                                    theo dõi
                                    của chúng tôi để cập nhật khuyến mãi ngay lập tức
                                </p>
                                <form id="mc-form" className="newsletter-form  flex gap-1 items-center w-full">
                                    <div className="flex gap-1 w-full">
                                        <input type="email" name="email" id="email" className="form-input rounded-full dis-2" placeholder="Email của bạn..."></input>
                                        <button type="submit"
                                                className="button_subscribe subscribe btn bg-primary text-white rounded-full shrink-0">
                                            Đăng ký
                                        </button>
                                    </div>

                                </form>
                                <div className="mailchimp-alerts mt-2 ">
                                    <div className="mailchimp-submitting"></div>
                                    <div
                                        className="hidden mailchimp-success alert bg-relative rounded-sm text-success my-2 p-2 "></div>

                                    <div
                                        className="hidden mailchimp-error alert bg-relative rounded-sm text-error my-2 p-2 "></div>

                                </div>
                            </div>


                            <div className="trust-badges mt-6">
                                <p className="font-semibold mb-3">PHƯƠNG THỨC THANH TOÁN</p>
                                <a href="/" title="PHƯƠNG THỨC THANH TOÁN" target="_blank">
                                    <img
                                        className="h-auto"
                                        src="//bizweb.dktcdn.net/thumb/grande/100/502/483/themes/941751/assets/footer-trustbadge.png?1712722184442"
                                        alt=""
                                        width="246"
                                        height="53"
                                        loading="lazy"
                                    ></img>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;