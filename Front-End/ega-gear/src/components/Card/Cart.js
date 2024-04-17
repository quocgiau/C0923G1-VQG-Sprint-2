import {Helmet} from "react-helmet";
import HeaderUser from "../Header/HeaderUser";
import Footer from "../Footer/Footer";
import "../Css/Index.css"
function Cart(){
    return(
        <>
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>
            <HeaderUser/>
            <section className="section section-main-cart cart-dis-1">
                <div className="container">
                    <cart-form className="">
                        <form className="cart-form" action="Pay.html" method="post">
                            <div className="cart  flex lg:bg-background flex-wrap lg:px-6 rounded-sm gap-5  md:gap--[var(--cart-gap)] justify-between items-start relative">
                                <div className="cart-left lg:rounded-0 rounded-sm  px-3 lg:px-0 bg-background flex-[0_0_100%] lg:flex-[0_0_var(--cart-left-column)] py-6">
                                    <h1 className="text-h4 mb-5 font-semibold">Giỏ hàng</h1>
                                    <div className="cart-table">
                                        <div className="cart-header hidden  lg:grid md:grid-cols-[var(--cart-template)] gap-[var(--table-gap)] border-t border-b border-neutral-50 font-semibold text-center">
                                            <div className="py-3">Sản phẩm</div>
                                            <div className="py-3">Đơn giá</div>
                                            <div className="py-3">Số lượng</div>
                                            <div className="py-3">Tạm tính</div>
                                        </div>
                                        <div className="cart-items divide-y divide-neutral-50">
                                            <div
                                                className="cart-item grid lg:grid-cols-[var(--cart-template)] gap-[var(--table-gap)] relative"
                                                data-line-index={1}
                                            >
                                                <div className="lg:px-3 lg:py-4 flex gap-3 cart-product-col">
                                                    <a
                                                        className="cart-item__image flex items-center rounded-sm border-neutral-50 border overflow-hidden"
                                                        href="/pc-asus-rog-strix-g35dx-vn003w-r7"
                                                        title="PC Asus ROG Strix G35DX-VN003W R7"
                                                    >
                                                        <img
                                                            src="//bizweb.dktcdn.net/thumb/small/100/502/483/products/pc-asus-rog-strix-g35dx-vn003w-nguyenvustore-3.jpg?v=1702868758600"
                                                            className="aspect-square object-contain"
                                                            alt="PC Asus ROG Strix G35DX-VN003W R7"
                                                        />
                                                    </a>
                                                    <div>
                                                        <p className="cart-item__name font-semibold  ">
                                                            <a
                                                                href="/pc-asus-rog-strix-g35dx-vn003w-r7"
                                                                title="PC Asus ROG Strix G35DX-VN003W R7"
                                                                className="link"
                                                            >
                                                                PC Asus ROG Strix G35DX-VN003W R7
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="lg:px-3 lg:py-4 hidden lg:block cart-unit-price-col">
                                                    <div className="price">81.500.000₫</div>
                                                    <div className="compare-price line-through">
                                                        105.100.000₫
                                                    </div>
                                                </div>
                                                <div className="lg:px-3 lg:py-4 flex  lg:justify-center cart-quantity-col">
                                                    <quantity-input>
                                                        <div className="custom-number-input cart-item-quantity flex flex-row h-10 border border-neutral-50 relative bg-background rounded-sm overflow-hidden h-[3.8rem] w-[13rem]">
                                                            <button
                                                                type="button"
                                                                name="minus"
                                                                className="h-full w-20  cursor-pointer outline-non p-2"
                                                            >
                                                                <i className="m-auto icon icon-minus" />
                                                            </button>
                                                            <input
                                                                type="number"
                                                                className="focus:outline-none form-quantity w-full focus:ring-transparent text-base  font-semibold text-md  md:text-basecursor-default flex items-center outline-none bg-transparent border-none text-center"
                                                                name="Lines"
                                                                data-line-index={1}
                                                                defaultValue={2}
                                                                min={1}
                                                            />
                                                            <button
                                                                type="button"
                                                                name="plus"
                                                                className=" h-full w-20 rounded-r cursor-pointer p-2"
                                                            >
                                                                <i className="m-auto icon icon-plus" />
                                                            </button>
                                                        </div>
                                                    </quantity-input>
                                                </div>
                                                <div className="lg:px-3 lg:py-4   lg:text-right cart-total-col">
                    <span className="loading-icon gap-1 hidden items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse" />
                      <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse" />
                      <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse" />
                    </span>{" "}
                                                    <div className="price"> 163.000.000₫</div>
                                                </div>
                                                <div className="lg:px-3 lg:py-4 text-right cart-remove-col">
                                                    <remove-cart-button data-line-index={1}>
                                                        <i className="icon icon-cross text-neutral-200 cursor-pointer" />
                                                    </remove-cart-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:hidden w-full">
                                    <related-products
                                        className="cart-releated-products hidden no-products"
                                        data-query=""
                                        data-product-type="row"
                                    >
                                        <div className="heading-bar py-3 px-5  text-center mb-2">
                                            <h2 className="text-h4 font-semibold text-secondary">
                                                Sản phẩm gợi ý
                                            </h2>
                                        </div>
                                        <ega-carousel>
                                            <div className="swiper swiper-initialized swiper-horizontal">
                                                <div
                                                    className="swiper-wrapper product-list "
                                                    id="swiper-wrapper-3f24beb086e52468"
                                                    aria-live="polite"
                                                    style={{
                                                        transitionDuration: "0ms",
                                                        transitionDelay: "0ms"
                                                    }}
                                                ></div>
                                                <span
                                                    className="swiper-notification"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                />
                                            </div>
                                        </ega-carousel>
                                    </related-products>
                                </div>
                                <div className="cart-right lg:rounded-0 rounded-sm   px-3 lg:px-0   bg-background flex-[0_0_100%] md:flex-[0_0_var(--cart-right-column)]  lg:sticky top-[var(--header-height)] py-6">
                                    <div className="cart-summary">
                                        <div className=" cart-summary-info p-4 lg:p-6 border-2 border-primary rounded-lg  divide-dashed divide-y divide-neutral-50">
                                            <div className="cart-opener-group   divide-dashed divide-y divide-neutral-50">
                                                <div className="cart-opener-item">
                                                    <div className="bill-field  space-y-3 hidden ">
                                                        <div className="flex items-center">
                                                            <div className="flex items-center ">
                                                                <input
                                                                    className="invoice"
                                                                    type="hidden"
                                                                    name="attributes[Xuất hóa đơn]"
                                                                    defaultValue="không"
                                                                />
                                                                <input
                                                                    className="invoice-checkbox form-checkbox"
                                                                    type="checkbox"
                                                                />
                                                            </div>
                                                            <div className="ml-2 text-sm">
                                                                <label>Xuất hóa đơn</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="label block mb-2">Tên công ty</label>
                                                            <input
                                                                type="text"
                                                                className="form-input"
                                                                name="attributes[Tên công ty]"
                                                                defaultValue=""
                                                                data-rules="['required']"
                                                                data-messages="{'required':'Trường này không được bỏ trống' }"
                                                                placeholder="Tên công ty"
                                                            />
                                                            <span className="error  text-error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="label block mb-2">Mã số thuế</label>
                                                            <input
                                                                type="number"
                                                                className="form-input"
                                                                name="attributes[Mã số thuế]"
                                                                defaultValue=""
                                                                data-rules="['minLength:10','required']"
                                                                data-messages="{ 'minLength:10': 'Số kí tự tối thiểu [size]', 'require':'Trường này không được bỏ trống' }"
                                                                placeholder="Mã số thuế"
                                                            />
                                                            <span className="error text-error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="label block mb-2">
                                                                Địa chỉ công ty
                                                            </label>
                                                            <textarea
                                                                className="form-textarea"
                                                                data-rules="['required']"
                                                                data-messages="{'required':'Trường này không được bỏ trống' }"
                                                                name="attributes[Địa chỉ công ty]"
                                                                placeholder="Địa chỉ công ty"
                                                                defaultValue={""}
                                                            />
                                                            <span className="error  text-error" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="label block mb-2">
                                                                Email nhận hóa đơn
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-input"
                                                                name="attributes[Email nhận hóa đơn]"
                                                                defaultValue=""
                                                                placeholder="Email nhận hóa đơn"
                                                                data-rules="['required','email']"
                                                                data-messages="{'required':'Trường này không được bỏ trống', 'email': 'Email không đúng định dạng' }"
                                                            />
                                                            <span className="error  text-error" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-opener-item">
                                                    <portal-opener>
                                                        <div
                                                            className="cart-voucer text-neutral-300 py-2 md:py-4 flex items-center justify-between w-full"
                                                            data-portal="#cart-note-drawer"
                                                        >
                                                            <p className="flex items-center gap-1">
                                                                <i className="icon icon-stickynote" />
                                                                <span className="line-clamp-1">
                            {" "}
                                                                    Ghi chú đơn hàng{" "}
                          </span>
                                                            </p>
                                                            <button type="button" className="flex items-center">
                                                                Thay đổi
                                                                <i className="icon icon-carret-right ml-2  flex items-center" />
                                                            </button>
                                                            <textarea
                                                                className="form-textarea hidden"
                                                                name="note"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </portal-opener>
                                                </div>
                                                <div className="cart-opener-item">
                                                    <portal-opener>
                                                        <div
                                                            className="cart-voucer text-neutral-300 py-2 md:py-4 flex items-center justify-between w-full"
                                                            data-portal="#coupon-drawer"
                                                        >
                                                            <p className="flex items-center gap-1">
                                                                <i className="icon icon-ticket-discount" />
                                                                <span className="line-clamp-1"> Mã giảm giá </span>
                                                            </p>
                                                            <button type="button" className="flex items-center">
                                                                Chọn
                                                                <i className="icon icon-carret-right ml-2  flex items-center" />
                                                            </button>
                                                        </div>
                                                    </portal-opener>
                                                </div>
                                            </div>
                                            <div className="cart-bottom">
                                                <div className="cart-total py-2 md:py-4 flex items-start justify-between w-full">
                                                    <p className="font-semibold">TỔNG CỘNG</p>
                                                    <div className="text-right">
                                                        <div className="price">210.540.000₫</div>
                                                        <span className="loading-icon gap-1 hidden items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse" />
                        <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse" />
                        <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse" />
                      </span>
                                                    </div>
                                                </div>
                                                <div className="cart-submit">
                                                    <button
                                                        type="submit"
                                                        className="btn w-full btn--large font-semibold  bg-primary text-white inline-flex  justify-center items-center gap-2"
                                                    >
                                                        THANH TOÁN
                                                        <i className="icon icon-arrow-login" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="cart-empty ">
                            <div className=" bg-background px-gutter lg:px-6 py-6 rounded-sm  relative text-center">
                                <div className="flex-col mx-auto gap-4  hidden  items-center justify-center">
                                    <img
                                        className="aspect-square object-contain"
                                        src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/cart_empty_background.png?1712737586456"
                                        alt="cart_empty_background"
                                        width={320}
                                        height={320}
                                    />
                                    <h2 className="text-h4  font-semibold">Giỏ hàng chưa có gì!</h2>
                                    <p>Hãy tìm sản phẩm ứng ý và thêm vào giỏ hàng bạn nhé</p>
                                    <a
                                        className="btn font-semibold bg-primary text-white"
                                        href="/collections/all"
                                        title="Tiếp tục mua sắm"
                                    >
                                        Tiếp tục mua sắm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </cart-form>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Cart;