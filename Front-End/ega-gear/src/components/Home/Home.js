import {Helmet} from "react-helmet";
import HeaderUser from "../Header/HeaderUser";
import Footer from "../Footer/Footer";
import "../Css/Index.css"
import "./HomeCss.css"

function Home() {

    return (
        <>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>
            <HeaderUser/>
            <div>
                
                <main>
                    <h1 className="hidden">EGA Gear - Giao diện thiết kế tối ưu cho ngành hàng công nghệ, sản phẩm công
                        thái học,..</h1>
                    <div className="section-hot-banner section home-dis-1">
                        <div className="container">
                            <a className="banner" href="/" title="Banner ngang">
                                <picture>
                                    <source media="(max-width: 600px)"
                                            srcSet="//bizweb.dktcdn.net/thumb/grande/100/502/483/themes/941751/assets/hot_banner.png?1712722184442"></source>
                                    <img className="object-contain  " loading="lazy"
                                         src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/hot_banner.png?1712722184442"
                                         alt="" width="1432" height="120"></img>
                                </picture>


                            </a>
                        </div>

                    </div>

                    <section className="section section-collection-list home-dis-3">
                        <div className="container overflow-hidden md:px-container px-0">
                            <div className="overflow-auto md:px-0 px-container">
                                <div
                                    className="collection-list    grid mx-auto grid-cols-[var(--grid-col-mobile)]  lg:grid-cols-[var(--grid-col-desktop)] gap-[1px] rounded overflow-auto "

                                >


                                    <a
                                        href="/collections/laptop"
                                        title="Laptop"
                                        className="collection-item bg-background text-center flex flex-col items-center gap-1 lg:gap-3 p-2 xl:p-6 group hover:brightness-[0.98] "
                                    >
                                        <div
                                            className="collection-item-thumb w-[5.2rem] h-[5.2rem] lg:w-[8.8rem] lg:h-[8.8rem]  flex items-center justify-center">
                                            <img
                                                className="object-contain transition-transform relative z-10 group-hover:scale-110 duration-200"
                                                width="88"
                                                height="88"
                                                src="//bizweb.dktcdn.net/thumb/small/100/502/483/themes/941751/assets/coll_1.png?1712722184442"
                                                alt="Laptop"
                                                loading="lazy"
                                            ></img>
                                        </div>
                                        <span className="text-xs lg:text-base line-clamp-2"> Laptop </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section section-product-tabs product_tabs_3 home-dis-2">
                        <tabs-section data-type=".card-product--vertical">
                            <div className="container">
                                <div className="tab-content " id="product_tabs_3_tab_1"
                                     data-url="/ghe-cong-thai-hoc"
                                     data-limit="4"
                                >
                                    <div
                                        className="product-list grid tab-content-inner   grid-cols-2  lg:grid-cols-4	 gap-2 mt-2">


                                        <card-product className="h-full"
                                                      data-prefetch="/ghe-cong-thai-hoc-herman-miller-aeron"
                                        >
                                            <div
                                                className=" item_product_main card-product card-product--vertical relative transition-transform duration-200 ease-in-out rounded-sm h-full

  "
                                            >
                                                <form
                                                    action="/cart/add"
                                                    method="post"
                                                    data-id="product-actions-33897876"
                                                    encType="multipart/form-data"
                                                    className="bg-background relative z-10 m-0  rounded-sm h-full"
                                                >
                                                    <div
                                                        className="card-product__top relative rounded-tr-sm rounded-tl-sm overflow-hidden group/card  ">
                                                        <a
                                                            className="link aspect-square flex items-center justify-center w-full"
                                                            href="/ghe-cong-thai-hoc-herman-miller-aeron"
                                                            title="Ghế công thái học Herman Miller Aeron"
                                                        >
                                                            <div
                                                                className="card-product__badges absolute top-2 left-2 z-10 flex items-center gap-2">


                                                            </div>


                                                            <picture>
                                                                <source media="(max-width: 600px)"
                                                                        srcSet="//bizweb.dktcdn.net/thumb/medium/100/502/483/products/herman-miller-aeron-office-chair-carbon-size-a-small-p1983-19944-image.jpg?v=1702862164873"></source>
                                                                <img
                                                                    className="dis-img-1 card-product__image max-h-full w-auto aspect-square object-contain scale-[var(--image-scale)]  absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-out  group-hover/card:opacity-0  "
                                                                    width="480"
                                                                    height="480"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/502/483/products/herman-miller-aeron-office-chair-carbon-size-a-small-p1983-19944-image.jpg?v=1702862164873"
                                                                    alt="Ghế công thái học Herman Miller Aeron"
                                                                ></img>
                                                            </picture>

                                                            <picture>
                                                                <source media="(max-width: 600px)"
                                                                        srcSet="//bizweb.dktcdn.net/thumb/medium/100/502/483/products/herman-miller-aeron-office-chair-carbon-size-a-small-p1983-19945-image.jpg?v=1702862195787"></source>
                                                                <img
                                                                    className="card-product__image-2 dis-img-1 max-h-full w-auto aspect-square object-contain  opacity-0 scale-[var(--image-scale)]  absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 z-[0] group-hover/card:opacity-1 group-hover/card:z-[1] group-hover/card:opacity-100 transition duration-300 ease-out"
                                                                    width="480"
                                                                    height="480"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="//bizweb.dktcdn.net/thumb/large/100/502/483/products/herman-miller-aeron-office-chair-carbon-size-a-small-p1983-19945-image.jpg?v=1702862195787"
                                                                    alt="Ghế công thái học Herman Miller Aeron"
                                                                ></img>
                                                            </picture>
                                                        </a>
                                                    </div>
                                                    <a
                                                        className="link"
                                                        href="/ghe-cong-thai-hoc-herman-miller-aeron"
                                                        title="Ghế công thái học Herman Miller Aeron"
                                                    >
                                                        <div
                                                            className="card-product__body flex flex-col gap-2 px-2 py-2  md:gap-2 md:px-5 md:py-4">
                                                            <div
                                                                className="card-product__title text-base font-semibold line-clamp-2 ">
                                                                Ghế công thái học Herman Miller Aeron

                                                            </div>
                                                            <div
                                                                className="price-box flex justify-between items-center">
                                                                <div className="flex flex-col gap-1 ">
                                                                    <span className="price">26.500.000₫</span>

                                                                </div>

                                                            </div>


                                                        </div>
                                                    </a>


                                                    <div
                                                        className="card-product__bottom w-full px-2 md:px-5 left-0 lg:block hidden">


                                                        <input type="hidden" name="variantId" value="105531416"/>
                                                        <button
                                                            className="btn bg- w-full addtocart-btn font-semibold add_to_cart  flex justify-center items-center gap-3"
                                                            aria-label="Tùy chọn"
                                                            data-product="/ghe-cong-thai-hoc-herman-miller-aeron"
                                                            data-portal="#quick-view-product"
                                                            data-action="quickview"
                                                        >
  <span className="loading-icon gap-1 hidden items-center justify-center">

            <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>

            <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>

            <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>

</span>
                                                            <span>
	Tùy chọn
  </span>
                                                        </button>
                                                    </div>


                                                </form>
                                            </div>
                                        </card-product>

                                    </div>


                                </div>
                            </div>
                        </tabs-section>
                    </section>
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Home;